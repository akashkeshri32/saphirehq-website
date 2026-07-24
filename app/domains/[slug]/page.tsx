import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DOMAINS } from "@/lib/data/domains";
import { DomainHeroSection } from "@/components/sections/domainHeroSection";
import { DomainToolsSection } from "@/components/sections/domainToolsSection";
import { DomainProjectsSection } from "@/components/sections/domainProjectsSection";
import { DomainImpactSection } from "@/components/sections/domainImpactSection";
import { DomainJourneySection } from "@/components/sections/domainJourneySection";
import { MeetInstructorsSection } from "@/components/sections/meetInstructorsSection";
import { DomainCareerSection } from "@/components/sections/domainCareerSection";
import { CtaSection } from "@/components/sections/ctaSection";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return DOMAINS.map((domain) => ({ slug: domain.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const domain = DOMAINS.find((d) => d.id === slug);

  if (!domain) return {};

  return {
    title: `${domain.label} — Sapphire IQ`,
    description: domain.tagline,
  };
}

export default async function DomainPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const domain = DOMAINS.find((d) => d.id === slug);

  if (!domain) notFound();

  return (
    <>
      <DomainHeroSection domain={domain} />

      <DomainToolsSection domain={domain} />

      <DomainProjectsSection domain={domain} />

      <DomainImpactSection domain={domain} />

      <DomainJourneySection />

      <MeetInstructorsSection
        instructors={[...domain.instructors]}
        eyebrow="Meet Your Instructors"
        heading={`Mentors currently working in ${domain.label}`}
        description="Every instructor teaching this track is an active industry professional."
      />

      <DomainCareerSection domain={domain} />

      <CtaSection
        heading={`Ready to start your ${domain.label} journey?`}
        description="Enroll now and get matched with a mentor within 24 hours."
        buttons={[
          { label: "Enroll Now", href: "/enroll-now", variant: "white" },
          { label: "Explore Other Domains", href: "/#domains", variant: "outline-white" },
        ]}
      />
    </>
  );
}
