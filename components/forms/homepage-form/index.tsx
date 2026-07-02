"use client";

import { useActionState, useEffect, useRef, useState } from "react";

import { User, Mail, Phone } from "lucide-react";
import toast from "react-hot-toast";
import SubmitButton from "./submit-btn";
import { CountryDropdown } from "./country-dropdown";
import DomainOfInterest from "./domain-of-interest";
import InternshipDuration from "./internship-duration";
import SuccessMessage from "./success-message";
import { Domain } from "@/lib/drizzle/schema";
import { cn } from "@/lib/utils/tailwind";
import { Input } from "@/components/ui/input";
import { sendEnquiry } from "@/actions/send-enquiry";
import Image from "next/image";

import BrandLogo from "@/assets/images/logo.png";

const HomepageForm = ({ domains }: { domains: Domain[] }) => {
  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(sendEnquiry, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!state?.message) return;
    if (!state.success) {
      toast.error(state.message);
    }

    if (state.success) {
      // @ts-ignore
      clearTimeout(timeoutId);
      // eslint-disable-next-line
      setShowSuccessMessage(true);
      timeoutId = setTimeout(() => {
        formRef.current?.reset();
        setShowSuccessMessage(false);
      }, 10000);
    }

    return () => clearTimeout(timeoutId);
  }, [state]);

  return (
    <div className="lg:w-xl mx-auto overflow-y-auto text-ink">
      {/* Gradient border wrapper */}
      <div className="relative rounded-2xl p-px bg-linear-to-br from-canvas-tint via-transparent to-surface-overlay">
        <div className="rounded-2xl px-3.5 py-6 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div>
                <Image src={BrandLogo} alt="saphireiq logo" height={35} />
              </div>
              <span className="text-caption text-brand-400 font-semibold tracking-wider uppercase">
                SahphireHQ Internship
              </span>
            </div>
            <h2 className="text-h3 font-bold text-content-primary mb-1">
              Apply for an Internship
            </h2>
            <p className="text-body-sm text-content-muted">
              Fill in your details and our team will reach out within 24 hours.
            </p>
          </div>

          {showSuccessMessage ? (
            <SuccessMessage />
          ) : (
            <form ref={formRef} action={formAction} className="space-y-5">
              {/* Full Name */}
              <Input
                label="Full Name"
                name="name"
                type="text"
                placeholder="John Doe"
                LeftIcon={<User size={15} />}
                autoComplete="name"
                required
                fullWidth
              />

              {/* Email */}
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                LeftIcon={<Mail size={15} />}
                autoComplete="email"
                required
                fullWidth
              />

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-body-sm font-medium text-content-secondary select-none">
                  Phone Number
                </label>
                <div className="flex h-11">
                  <CountryDropdown />
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-content-subtle pointer-events-none">
                      <Phone size={15} />
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                      className={cn(
                        "w-full h-full bg-surface-input pl-10 pr-3.5",
                        "border border-border-default rounded-r-xl",
                        "text-body-sm text-content-primary placeholder:text-content-subtle",
                        "transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-brand-500/25 focus:border-brand-500/50 focus:bg-surface-hover",
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Domain of Interest */}
              <DomainOfInterest domains={domains} />

              {/* Duration */}
              <InternshipDuration />

              {/* Divider */}
              <div className="h-px bg-border-subtle" />

              {/* Submit */}
              <SubmitButton />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomepageForm;
