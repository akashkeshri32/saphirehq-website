import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebinarHeroSection } from "@/components/sections/webinarHeroSection";
import { EnrollmentFaqSection, ENROLLMENT_FAQS } from "@/components/sections/enrollmentFaqSection";
import { CtaSection } from "@/components/sections/ctaSection";
import { getWebinarSessionByShortCode } from "@/lib/db-utils/webinar";
import { getTomorrowInIST } from "@/lib/utils/date";
import { JsonLd } from "@/lib/seo/json-ld";
import { faqSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { WebinarEnrollmentJourney } from "@/components/sections/webinar-enrollment-journey";
import Image from "next/image";

import SapphireLogo from "@/assets/brand-logos/logo-main.svg";
import { WebinarFAQ } from "@/components/sections/webinar-faq";

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

      <nav className="flex justify-center items-center pt-7">
        <Image src={SapphireLogo} alt="sapphire iq" width={300} height={80} className="w-60 h-auto object-contain"  />
      </nav>

      <WebinarHeroSection
        sessionId={session.id}
        sessionTime={session.time}
        webinarDateLabel={label}
      />

      <WebinarEnrollmentJourney />

      <WebinarFAQ />

      {/*<CtaSection
        heading="Can't wait for the webinar?"
        description="Skip ahead — apply now and a mentor will reach out within 24 hours."
        className="max-w-155!"
        buttons={[
          { label: "Join Webinar Now", href: "#join-webinar", variant: "white" },
        ]}
      />*/}
    </>
  );
}
