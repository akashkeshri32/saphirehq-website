"use server";

import { createEnquiry } from "@/lib/db-utils/enquiry";
import { sendEnquiryMail } from "@/lib/utils/mails";

export async function sendCounsellorEnquiry(
  _prevState: { success: boolean; message: string },
  formData: FormData,
) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const countryCode = formData.get("country-code") as string;
    const domain = formData.get("domain") as string;

    if ([name, email, phone, countryCode, domain].some((v) => !v?.trim())) {
      throw new Error("Please fill in all fields");
    }

    const fullPhone = `${countryCode}-${phone}`;
    const enquiry = {
      name,
      email,
      phone: fullPhone,
      domainOfInterest: domain,
      duration: "Counselling",
    };

    const { error } = await createEnquiry(enquiry);
    if (error) throw new Error(error.message);

    // const { error: mailError } = await sendEnquiryMail(enquiry);
    // if (mailError) throw new Error(mailError.message);

    return { success: true, message: "Enquiry submitted" };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}
