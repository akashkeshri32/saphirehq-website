"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { CheckCircle } from "lucide-react";
import { Input, Textarea } from "@/components/ui";
import { sendContactMessage } from "@/actions/send-contact-message";
import SubmitButton from "@/components/forms/homepage-form/submit-btn";

const SUCCESS_RESET_DELAY = 6000;

export const ContactForm = () => {
  const initialState = { success: false, message: "" };
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (!state?.message) return;

    if (!state.success) {
      toast.error(state.message);
      return;
    }

    const revealSuccess = () => setShowSuccessMessage(true);
    revealSuccess();

    const timeoutId = setTimeout(() => {
      formRef.current?.reset();
      setShowSuccessMessage(false);
    }, SUCCESS_RESET_DELAY);

    return () => clearTimeout(timeoutId);
  }, [state]);

  return (
    <div
      style={{ boxShadow: "0px 2px 8px rgba(7, 27, 45, 0.08)" }}
      className="bg-white border border-border-stroke rounded-xl p-7.5"
    >
      { !showSuccessMessage && <h3 className="text-20 font-heading font-semibold">Send Us a Message</h3>}

      {showSuccessMessage ? (
        <div className="flex flex-col items-center text-center py-8 gap-5">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
              <CheckCircle size={32} className="text-blue-primary" strokeWidth={1.5} />
            </div>
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping" />
          </div>

          <div className="space-y-2">
            <h4 className="text-20 font-heading font-semibold">Message Sent!</h4>
            <p className="text-14 text-text-gray max-w-xs">
              Thanks for reaching out — our team will get back to you shortly.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-primary/10 border border-blue-primary/15">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-primary animate-pulse shrink-0" />
            <p className="text-12 text-blue-primary font-medium">We typically respond within a few hours</p>
          </div>
        </div>
      ) : (
        <form ref={formRef} action={formAction} className="flex flex-col gap-4 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
            <Input label="Full Name" name="name" placeholder="Your name" required />

            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="10-digit mobile number"
            />
          </div>

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
          />

          <Textarea
            label="Message"
            name="message"
            placeholder="Tell us how we can help..."
            required
          />

          <SubmitButton label="Send Message" pendingLabel="Sending…" />

          <p className="text-12 text-gray-two text-center">
            By submitting, you agree to be contacted by Sapphire IQ regarding your message.
          </p>
        </form>
      )}
    </div>
  );
};
