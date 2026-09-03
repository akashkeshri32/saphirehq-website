import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebinarHeroSection } from "@/components/sections/webinarHeroSection";
import { HowEnrollmentWorksSection } from "@/components/sections/howEnrollmentWorksSection";
import { EnrollmentFaqSection, ENROLLMENT_FAQS } from "@/components/sections/enrollmentFaqSection";
import { CtaSection } from "@/components/sections/ctaSection";
import { getWebinarSessionByShortCode } from "@/lib/db-utils/webinar";
import { getTomorrowInIST } from "@/lib/utils/date";
import { JsonLd } from "@/lib/seo/json-ld";
import { faqSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";

type Params = {
  slug: string;
};

export const metadata: Metadata = buildMetadata({
  title: "Webinar Registration | Sapphire IQ",
  description: "Reserve your spot for a live Sapphire IQ webinar and get your questions answered directly by a mentor.",
  path: "/webinar",
  noIndex: true,
});

export default async function WebinarPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const session = await getWebinarSessionByShortCode(slug);
  if (!session) notFound();

  const { label } = getTomorrowInIST();

  return (
    <>
      <JsonLd data={faqSchema(ENROLLMENT_FAQS)} />

      <WebinarHeroSection
        sessionId={session.id}
        sessionTime={session.time}
        webinarDateLabel={label}
      />

      <HowEnrollmentWorksSection />

      <EnrollmentFaqSection />

      <CtaSection
        heading="Can't wait for the webinar?"
        description="Skip ahead — apply now and a mentor will reach out within 24 hours."
        className="max-w-155!"
        buttons={[
          { label: "Enroll Now", href: "/enroll-now", variant: "white" },
          { label: "Explore Domains", href: "/#domains", variant: "outline-white" },
        ]}
      />
    </>
  );
}
