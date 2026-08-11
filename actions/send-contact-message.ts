"use server";

import { sendContactMessage as sendContactMail } from "@/lib/utils/mails";

export async function sendContactMessage(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if ([name, email, message].some((v) => !v || v.trim().length === 0)) {
      throw new Error("Please fill in all required fields");
    }

    const { error } = await sendContactMail({
      name,
      email,
      phone: phone?.trim() || undefined,
      message,
    });

    if (error) throw new Error(error.message);

    return {
      success: true,
      message: "Message sent",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}
