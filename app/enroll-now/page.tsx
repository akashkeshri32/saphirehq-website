import type { Metadata } from "next";
import { EnrollmentHeroSection } from "@/components/sections/enrollmentHeroSection";
import { HowEnrollmentWorksSection } from "@/components/sections/howEnrollmentWorksSection";
import { EnrollmentFaqSection } from "@/components/sections/enrollmentFaqSection";
import { CtaSection } from "@/components/sections/ctaSection";

export const metadata: Metadata = {
  title: "Enroll Now — Sapphire IQ",
  description:
    "Apply to the Sapphire IQ career accelerator program — submit your application and our team will reach out within 24 hours.",
};

export default function EnrollNowPage() {
  return (
    <>
      <EnrollmentHeroSection />

      <HowEnrollmentWorksSection />

      <EnrollmentFaqSection />

      <CtaSection
        heading="Your future is built on the decisions you make today."
        description="Don't just plan. Start building — take the first step towards an exciting career."
        className="max-w-155!"
        buttons={[
          { label: "Talk to a Mentor", href: "?apply-now", variant: "white" },
          { label: "Explore Domains", href: "/#domains", variant: "outline-white" },
        ]}
      />
    </>
  );
}
