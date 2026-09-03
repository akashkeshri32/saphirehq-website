"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { CalendarDays, Clock } from "lucide-react";
import { Input, Select } from "@/components/ui";
import { sendWebinarEnquiry } from "@/actions/send-webinar-enquiry";
import SubmitButton from "@/components/forms/homepage-form/submit-btn";
import SuccessMessage from "@/components/forms/homepage-form/success-message";
import { getTomorrowInIST, msUntilNextISTMidnight } from "@/lib/utils/date";

import { useSearchParams } from "next/navigation";
import DOMAINS from "@/lib/data/domains";

const APPLICANT_TYPES = ["Student", "Switching Careers", "Working Professional"] as const;

const roles: Record<string, (typeof APPLICANT_TYPES)[number]> = {
  student: "Student",
  "switching-careers": "Switching Careers",
  "working-professional": "Working Professional",
};

type Props = {
  sessionId: string;
  sessionTime: string;
  webinarDateLabel: string;
};

export const WebinarRegistrationForm = ({
  sessionId,
  sessionTime,
  webinarDateLabel,
}: Props) => {
  const searchParams = useSearchParams();

  const roleParam = searchParams.get("role");
  const domainParam = searchParams.get("domain");

  const defaultRole = roleParam ? (roles[roleParam] ?? "Student") : "Student";

  const initialState = { success: false, message: "" };
  const [state, formAction] = useActionState(sendWebinarEnquiry, initialState);

  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Seeded from the server-rendered value for a correct first paint, then
  // self-corrects at IST midnight so a tab left open overnight never shows
  // a stale "tomorrow" — the actual submission date is always recomputed
  // server-side anyway, but the display should never lie about it either.
  const [displayDate, setDisplayDate] = useState({ label: webinarDateLabel });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNextFlip = () => {
      timeoutId = setTimeout(() => {
        setDisplayDate(getTomorrowInIST());
        scheduleNextFlip();
      }, msUntilNextISTMidnight() + 1000);
    };

    scheduleNextFlip();
    return () => clearTimeout(timeoutId);
  }, []);

  const domainOptions = DOMAINS.map((item) => ({ label: item.label, value: item.label, id: item.id }));

  const defaultDomain = domainParam ? domainOptions.find((el) => el.id === domainParam)?.label : "";

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
      <h3 className="text-20 font-heading font-semibold">Webinar Registration</h3>

      {showSuccessMessage ? (
        <SuccessMessage />
      ) : <>

      <div className="flex flex-wrap gap-3 mt-4.5">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-light px-3.5 py-2 text-13 font-semibold text-blue-primary">
          <CalendarDays size={15} />
          {displayDate.label}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-light px-3.5 py-2 text-13 font-semibold text-blue-primary">
          <Clock size={15} />
          {sessionTime}
        </span>
      </div>

        <form ref={formRef} action={formAction} className="flex flex-col gap-4 mt-6">
          <input type="hidden" name="webinarSessionId" value={sessionId} />

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
            defaultValue={defaultDomain}
            placeholder="Select Domain"
            label="Choose a Domain"
          />

          <h5 className="font-semibold text-13">Which best describes you?</h5>
          <div className="flex flex-wrap gap-2">
            {APPLICANT_TYPES.map((type) => (
              <label key={type} className="cursor-pointer">
                <input
                  type="radio"
                  name="applicantType"
                  value={type}
                  defaultChecked={type === defaultRole}
                  required
                  className="peer sr-only"
                />
                <span className="inline-flex items-center rounded-full border border-white-two px-4.5 py-2.5 text-14 text-text-gray transition-colors peer-checked:bg-blue-light peer-checked:border-blue-primary peer-checked:text-blue-primary peer-checked:font-semibold">
                  {type}
                </span>
              </label>
            ))}
          </div>

          <SubmitButton label="Register for Webinar" pendingLabel="Registering…" />

          <p className="text-12 text-gray-two text-center">
            By submitting, you agree to be contacted by Sapphire IQ about this
            webinar.
          </p>
        </form>
      </>
      }
    </div>
  );
};
