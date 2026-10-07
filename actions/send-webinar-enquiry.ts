"use server";

import { headers } from "next/headers";
import { checkIfEnquiryAlreadyExists, createWebinarEnquiry } from "@/lib/db-utils/webinar";
import { webinarEnquiry } from "@/lib/drizzle/schema";
import { getNextWebinarDateInIST } from "@/lib/utils/date";
import { sendEnquiryLeadToBrevo } from "@/lib/utils/brevo";
import { verifyTurnstileToken } from "@/lib/utils/turnstile";

export async function sendWebinarEnquiry(prevState: any, formData: FormData) {
  try {
    // Honeypot: a field real visitors never see or fill, but naive bots
    // scanning form inputs often do. Pretend to succeed so a scripted
    // attacker gets no signal that it's being filtered.
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      return { success: true, message: "Registration submitted" };
    }

    // CAPTCHA: the real defense against a scripted attacker, since a
    // honeypot alone only catches naive bots. Verified server-side against
    // Cloudflare directly — the client-side widget can't be trusted on its
    // own, since a script could just omit it or replay an old token.
    //
    // Skips cleanly (doesn't block registrations) until TURNSTILE_SECRET_KEY
    // is actually configured, so shipping this code is safe before Turnstile
    // is set up on the dashboard — it just has no effect until then.
    if (process.env.TURNSTILE_SECRET_KEY) {
      const turnstileToken = formData.get("cf-turnstile-response") as string | null;
      const headersList = await headers();
      const remoteIp =
        headersList.get("cf-connecting-ip") ||
        headersList.get("x-forwarded-for")?.split(",")[0]?.trim();

      const { success: captchaOk } = await verifyTurnstileToken(turnstileToken, remoteIp);
      if (!captchaOk) {
        throw new Error("We couldn't verify you're human. Please try again.");
      }
    }

    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const domainOfInterest = formData.get("domain") as string;
    // const applicantType = formData.get("applicantType") as string;
    const webinarSessionId = formData.get("webinarSessionId") as string;
    const sessionTime = formData.get("sessionTime") as string;

    const isAnyEmpty = checkForEmptyFields([
      name,
      email,
      phone,
      domainOfInterest,
      // applicantType,
      webinarSessionId,
      sessionTime,
    ]);

    if (isAnyEmpty) throw new Error("Please fill in all fields");

    // Never trust a date computed at page-load time (or supplied by the
    // client at all) — a tab left open across the 4 PM cutoff would
    // otherwise submit a stale date. Recompute the applicable webinar
    // date fresh, in IST, at the exact moment of submission: today
    // before 4 PM, tomorrow from 4 PM onward (no morning webinars).
    const { isoDate: webinarDate } = getNextWebinarDateInIST();

    const newWebinarEnquiry = {
      name,
      email,
      phone,
      domainOfInterest,
      // applicantType: applicantType as typeof webinarEnquiry.$inferInsert.applicantType,
      webinarDate,
      webinarSessionId, // time ID
    };


    // check if webinar enquiry already exists
    // same person cannot register for the same webinar again
    const enquiryAlreadyExists = await checkIfEnquiryAlreadyExists(email, webinarDate, webinarSessionId, domainOfInterest);

    if (enquiryAlreadyExists) throw new Error("You are already Registered");

    const { error } = await createWebinarEnquiry(newWebinarEnquiry);
    if (error) throw new Error(error.message);

    // The registration itself is already saved at this point. Adding the
    // contact to Brevo is what triggers their dashboard-side automation to
    // send the confirmation email — if that call fails, the visitor's
    // registration is still valid, so this is best-effort: log it, but
    // don't fail the action for it (they'd otherwise likely resubmit and
    // create a duplicate row).
    const { error: brevoError } = await sendEnquiryLeadToBrevo(newWebinarEnquiry);
    if (brevoError) {
      console.error("Failed to sync webinar lead to Brevo:", brevoError);
      return {
        success: false,
        message : "Registration Failed"
      }
    }

    return {
      success: true,
      message: "Registration submitted",
    };
  } catch (error: any) {
    console.log({ error })
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}

function checkForEmptyFields(arr: string[]): boolean {
  return arr.some((el) => !el || el.trim().length === 0);
}
