import type { Metadata } from "next";
import { EnrollmentHeroSection } from "@/components/sections/enrollmentHeroSection";
import { HowEnrollmentWorksSection } from "@/components/sections/howEnrollmentWorksSection";
import { EnrollmentFaqSection, ENROLLMENT_FAQS } from "@/components/sections/enrollmentFaqSection";
import { CtaSection } from "@/components/sections/ctaSection";
import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Enroll Now | Apply to the Sapphire IQ Internship Program",
  description:
    "Apply to the Sapphire IQ career accelerator program today. Submit your application and our team will get in touch within 24 hours to get you started.",
  path: "/enroll-now",
});

export default function EnrollNowPage() {

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Enroll Now", path: "/enroll-now" },
          ]),
          faqSchema(ENROLLMENT_FAQS),
        ]}
      />

      <EnrollmentHeroSection  />

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
