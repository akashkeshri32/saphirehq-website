"use client";

import { sendCounsellorEnquiry } from "@/actions/send-counsellor-enquiry";
import { CountryDropdown } from "@/components/forms/homepage-form/country-dropdown";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui/button/button";
import { cn } from "@/lib/utils/tailwind";
import { Mail, Phone, User } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const initialState = { success: false, message: "" };

export default function CounsellorForm({ domain }: { domain: string }) {
  const [state, formAction] = useActionState(
    sendCounsellorEnquiry,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.message) return;
    if (!state.success) {
      toast.error(state.message);
    } else {
      formRef.current?.reset();
      toast.success("We'll be in touch soon!");
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-4 text-white-light"
    >
      <input type="hidden" name="domain" value={domain} />

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

      <TalkButton />
    </form>
  );
}

function TalkButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" loading={pending} className="w-full">
      {pending ? "Submitting…" : "Talk to Counsellor"}
    </Button>
  );
}
