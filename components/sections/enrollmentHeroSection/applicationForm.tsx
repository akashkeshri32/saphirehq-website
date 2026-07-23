"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Input, Select } from "@/components/ui";
import { DOMAINS } from "@/lib/data/domains";
import { sendEnrollmentApplication } from "@/actions/send-enrollment-application";
import SubmitButton from "@/components/forms/homepage-form/submit-btn";
import SuccessMessage from "@/components/forms/homepage-form/success-message";

const APPLICANT_TYPES = ["Student", "Switching Careers", "Working Professional"];

export const ApplicationForm = () => {
  const initialState = { success: false, message: "" };
  const [state, formAction] = useActionState(sendEnrollmentApplication, initialState);

  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const domainOptions = DOMAINS.map((item) => ({ label: item.label, value: item.label }));

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
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [state]);

  return (
    <div
      style={{ boxShadow: "0px 2px 8px rgba(7, 27, 45, 0.08)" }}
      className="bg-white border border-border-stroke rounded-xl p-7.5 "
    >
      <h3 className="text-20 font-heading font-semibold">Application Form</h3>

      {showSuccessMessage ? (
        <SuccessMessage />
      ) : (
        <form ref={formRef} action={formAction} className="flex flex-col gap-4 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
            <Input
              label="Full Name"
              name="fullName"
              placeholder="Your name"
              required
            />

            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="10-digit mobile number"
              required
            />
          </div>

          <Input
            placeholder="you@email.com"
            name="email"
            type="email"
            label="Email Address"
            required
          />

          <Select
            name="domain"
            options={domainOptions}
            placeholder="Select Domain"
            label="Choose a Domain"
          />

          <h5 className="font-semibold text-13">Which best describes you?</h5>
          <div className="flex flex-wrap gap-2">
            {APPLICANT_TYPES.map((type, index) => (
              <label key={type} className="cursor-pointer">
                <input
                  type="radio"
                  name="applicantType"
                  value={type}
                  defaultChecked={index === 0}
                  required
                  className="peer sr-only"
                />
                <span className="inline-flex items-center rounded-full border border-white-two px-4.5 py-2.5 text-14 text-text-gray transition-colors peer-checked:bg-blue-light peer-checked:border-blue-primary peer-checked:text-blue-primary peer-checked:font-semibold">
                  {type}
                </span>
              </label>
            ))}
          </div>

          <SubmitButton />

          <p className="text-12 text-gray-two text-center">
            By submitting, you agree to be contacted by Sapphire IQ about this
            program.
          </p>
        </form>
      )}
    </div>
  );
};
