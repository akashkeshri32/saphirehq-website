import crypto from "crypto";
import { getWebinarSessionById } from "../db-utils/webinar";
import { type CreateWebinarEnquiry } from "../drizzle/schema";

/** Mailchimp API keys are suffixed with the data center they belong to,
 * e.g. "abcd1234...-us21" — the base URL must use that same subdomain. */
function getDatacenter(apiKey: string): string | null {
  const dashIndex = apiKey.lastIndexOf("-");
  return dashIndex === -1 ? null : apiKey.slice(dashIndex + 1);
}

function subscriberHash(email: string): string {
  return crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
}

/** "2026-10-15" -> "15 Oct 2026", the format marketing's automation
 * expects. Parsed/formatted in UTC explicitly, since the stored value is a
 * date-only string with no time component — using the server's local
 * timezone here could shift it a day in either direction. */
function formatWebinarDateForMailchimp(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Adds/updates the registrant as a Mailchimp audience member. Mailchimp's
 * own automation (a Journey or Classic Automation, configured on the
 * dashboard, outside this repo) watches that audience and sends the
 * confirmation email whenever a contact lands in it — this call is what
 * triggers that automation, it does not send an email itself.
 *
 * Uses the "add or update list member" endpoint (PUT, keyed by the MD5
 * hash of the lowercased email), so re-registering updates the existing
 * contact instead of erroring like a plain create would.
 */
export async function sendEnquiryLeadToMailchimp(
  webinarEnquiry: CreateWebinarEnquiry,
): Promise<{ error: Error | null }> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey) {
    return { error: new Error("MAILCHIMP_API_KEY is not configured") };
  }
  if (!listId) {
    return { error: new Error("MAILCHIMP_AUDIENCE_ID is not configured") };
  }

  const datacenter = getDatacenter(apiKey);
  if (!datacenter) {
    return {
      error: new Error(
        "Could not determine the Mailchimp data center from MAILCHIMP_API_KEY (expected a '...-usNN' suffix)",
      ),
    };
  }

  const session = await getWebinarSessionById(webinarEnquiry.webinarSessionId);

  if (!session) {
    return { error: new Error(`Webinar session "${webinarEnquiry.webinarSessionId}" not found`) };
  }

  const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash(webinarEnquiry.email)}`;

  // Mailchimp's real API tags are auto-generated per-field (e.g. "Domain"
  // became MMERGE7) and don't match the human-readable labels marketing
  // sees in the dashboard — confirmed directly against this audience's
  // /merge-fields response rather than guessed:
  //   First Name        -> FNAME
  //   Phone Number      -> PHONE
  //   Domain            -> MMERGE7
  //   Time Slot         -> MMERGE8
  //   Webinar Date      -> MMERGE9
  //   Webinar_Register  -> MMERGE10
  // (There's also an unused "Lead_Status" / MMERGE11 field not covered by
  // these instructions — nothing writes to it.)
  const memberData = {
    email_address: webinarEnquiry.email,
    status_if_new: "subscribed",
    merge_fields: {
      FNAME: webinarEnquiry.name,
      PHONE: webinarEnquiry.phone,
      MMERGE7: webinarEnquiry.domainOfInterest,
      MMERGE8: session.time,
      MMERGE9: formatWebinarDateForMailchimp(webinarEnquiry.webinarDate),
      MMERGE10: "New",
    },
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(memberData),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new Error(`Mailchimp API error (${response.status}): ${body}`);
    }

    return { error: null };
  } catch (err) {
    return { error: err instanceof Error ? err : new Error(String(err)) };
  }
}
