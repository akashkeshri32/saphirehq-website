"use server";

import { createEnquiry } from "@/lib/db-utils/enquiry";
import { sendEnquiryMail } from "@/lib/utils/mails";

export async function sendEnquiry(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const phoneNumber = formData.get("phone") as string;

    const countryCode = formData.get("country-code") as string;
    const domainOfInterest = formData.get("domainOfInterest") as string;

    const duration = formData.get("duration") as string;

    const phone = `${countryCode}-${phoneNumber}`;

    const isAnyEmpty = checkForEmptyFields([
      email,
      name,
      phone,
      countryCode,
      domainOfInterest,
      duration,
    ]);

    const enquiry = { email, name, phone, domainOfInterest, duration };

    console.log({ isAnyEmpty });

    if (isAnyEmpty) throw Error("Fields Missing");

    // create an enquiry
    const { error } = await createEnquiry(enquiry);

    if (error) throw Error(error.message);

    const { error: enquiryMailError } = await sendEnquiryMail(enquiry);

    if (enquiryMailError) throw new Error(enquiryMailError.message);

    return {
      success: true,
      message: "Enquiry Created",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}

function checkForEmptyFields(arr: string[]): boolean {
  return arr.some((el) => el.trim().length === 0);
}
