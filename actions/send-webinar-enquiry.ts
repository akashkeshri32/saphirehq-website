"use server";

import { createWebinarEnquiry } from "@/lib/db-utils/webinar";
import { webinarEnquiry } from "@/lib/drizzle/schema";
import { getTomorrowInIST } from "@/lib/utils/date";

export async function sendWebinarEnquiry(prevState: any, formData: FormData) {
  try {
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const domainOfInterest = formData.get("domain") as string;
    const applicantType = formData.get("applicantType") as string;
    const webinarSessionId = formData.get("webinarSessionId") as string;

    const isAnyEmpty = checkForEmptyFields([
      name,
      email,
      phone,
      domainOfInterest,
      applicantType,
      webinarSessionId,
    ]);

    if (isAnyEmpty) throw new Error("Please fill in all fields");

    // Never trust a date computed at page-load time (or supplied by the
    // client at all) — a tab left open across midnight would otherwise
    // submit a stale date. Recompute "tomorrow" fresh, in IST, at the
    // exact moment of submission, so it always matches what "tomorrow"
    // actually means right now.
    const { isoDate: webinarDate } = getTomorrowInIST();

    const newWebinarEnquiry = {
      name,
      email,
      phone,
      domainOfInterest,
      applicantType: applicantType as typeof webinarEnquiry.$inferInsert.applicantType,
      webinarDate,
      webinarSessionId, // time ID
    };

    const { error } = await createWebinarEnquiry(newWebinarEnquiry);
    if (error) throw new Error(error.message);

    return {
      success: true,
      message: "Registration submitted",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}

function checkForEmptyFields(arr: string[]): boolean {
  return arr.some((el) => !el || el.trim().length === 0);
}
