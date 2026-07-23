"use server";

import { createEnquiry } from "@/lib/db-utils/enquiry";
import { enquiry } from "@/lib/drizzle/schema";
import { sendEnquiryMail } from "@/lib/utils/mails";



export async function sendEnrollmentApplication(prevState: any, formData: FormData) {
  try {
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const domainOfInterest = formData.get("domain") as string;
    const applicantType = formData.get("applicantType") as string;

    const isAnyEmpty = checkForEmptyFields([
      name,
      email,
      phone,
      domainOfInterest,
      applicantType,
    ]);

    if (isAnyEmpty) throw new Error("Please fill in all fields");

    const newEnquiry = {
      name,
      email,
      phone,
      domainOfInterest,
      applicantType: applicantType as typeof enquiry.$inferInsert.applicantType,
    };

    const { error } = await createEnquiry(newEnquiry);
    if (error) throw new Error(error.message);

    const { error: enquiryMailError } = await sendEnquiryMail(newEnquiry);
    if (enquiryMailError) throw new Error(enquiryMailError.message);

    return {
      success: true,
      message: "Application submitted",
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
