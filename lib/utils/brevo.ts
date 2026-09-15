import { getWebinarSessionById } from "../db-utils/webinar";
import { type CreateWebinarEnquiry } from "../drizzle/schema";

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const BREVO_ORIENTATION_LIST_ID = 64;

/**
 * Adds/updates the registrant as a Brevo contact in the orientation list.
 * Brevo's own automation (configured on the dashboard, outside this repo)
 * watches that list and sends the confirmation email whenever a contact
 * lands in it — this call is what triggers that automation, it does not
 * send an email itself.
 */
export async function sendEnquiryLeadToBrevo(
  webinarEnquiry: CreateWebinarEnquiry,
): Promise<{ error: Error | null }> {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return { error: new Error("BREVO_API_KEY is not configured") };
  }

  const session = await getWebinarSessionById(webinarEnquiry.webinarSessionId);

  if (!session) {
    return { error: new Error(`Webinar session "${webinarEnquiry.webinarSessionId}" not found`) };
  }

  const contactData = {
    email: webinarEnquiry.email,
    attributes: {
      FIRSTNAME: webinarEnquiry.name,
      DOMAIN: webinarEnquiry.domainOfInterest,
      WEBINAR_DATE: webinarEnquiry.webinarDate,
      TIME: session.time,
      STATUS: "New",
    },
    listIds: [BREVO_ORIENTATION_LIST_ID],
    updateEnabled: true,
  };

  try {
    const response = await fetch(BREVO_CONTACTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new Error(`Brevo API error (${response.status}): ${body}`);
    }

    return { error: null };
  } catch (err) {
    return { error: err instanceof Error ? err : new Error(String(err)) };
  }
}
