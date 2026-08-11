import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contactHeroSection";
import { CtaSection } from "@/components/sections/ctaSection";
import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Sapphire IQ",
  description:
    "Get in touch with the Sapphire IQ team — reach out by email, phone, or the contact form for admissions, partnerships, or general enquiries.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact-us" },
        ])}
      />

      <ContactHeroSection />

      <CtaSection
        heading="Ready to start your journey?"
        description="Skip the wait — apply now and a mentor will reach out within 24 hours."
        className="max-w-155!"
        buttons={[
          { label: "Enroll Now", href: "/enroll-now", variant: "white" },
          { label: "Explore Domains", href: "/#domains", variant: "outline-white" },
        ]}
      />
    </>
  );
}
