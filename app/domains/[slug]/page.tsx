import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DomainHeroSection } from "@/components/sections/domainHeroSection";
import { DomainToolsSection } from "@/components/sections/domainToolsSection";
import { DomainProjectsSection } from "@/components/sections/domainProjectsSection";
import { DomainImpactSection } from "@/components/sections/domainImpactSection";
import { DomainJourneySection } from "@/components/sections/domainJourneySection";
import { MeetInstructorsSection } from "@/components/sections/meetInstructorsSection";
import { DomainCareerSection } from "@/components/sections/domainCareerSection";
import { CtaSection } from "@/components/sections/ctaSection";
import { CertificatesSection } from "@/components/sections/certificatesSection";
import { LogoCarouselSection } from "@/components/sections/logoCarouselSection";
import DOMAINS from "@/lib/data/domains";
import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";

type Params = {
  slug: string;
};

const DOMAIN_META: Record<string, { title: string; description: string }> = {
  "business-analyst": {
    title: "Business Analyst Internship | Sapphire IQ",
    description:
      "Turn business problems into data-backed decisions and strategy. Join Sapphire IQ's Business Analyst internship with real mentors and live projects.",
  },
  "data-analyst": {
    title: "Data Analyst Internship | Sapphire IQ",
    description:
      "Explore, clean, and visualize real data to uncover the story behind the numbers. Build a portfolio-ready Data Analyst skillset with Sapphire IQ.",
  },
  "data-science": {
    title: "Data Science Internship | Sapphire IQ",
    description:
      "Master data analysis by working with real datasets, dashboards, and business challenges. Learn Data Science hands-on with Sapphire IQ mentors.",
  },
  "ai-ml": {
    title: "AI/ML Engineering Internship | Sapphire IQ",
    description:
      "Build and train machine learning models that solve real problems, from prototype to deployment. Gain hands-on AI/ML experience with Sapphire IQ.",
  },
  "ui-ux": {
    title: "UI/UX Design Internship | Sapphire IQ",
    description:
      "Design digital products people love — from research to pixel-perfect execution. Build a real UI/UX portfolio with Sapphire IQ's mentor-led internship.",
  },
  frontend: {
    title: "Frontend Developer Internship | Sapphire IQ",
    description:
      "Build fast, accessible interfaces with modern frameworks and real design systems. Learn frontend development hands-on with Sapphire IQ mentors.",
  },
  backend: {
    title: "Backend Development Internship | Sapphire IQ",
    description:
      "Architect the servers, APIs, and databases that power real products at scale. Gain hands-on backend experience with Sapphire IQ's mentor program.",
  },
  "full-stack": {
    title: "Full Stack Development Internship | Sapphire IQ",
    description:
      "Ship complete products end-to-end, from database to deployed interface. Learn full-stack development hands-on with Sapphire IQ mentors.",
  },
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

  const meta = DOMAIN_META[domain.id] ?? {
    title: `${domain.label} Internship | Sapphire IQ`,
    description: domain.tagline,
  };

  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/domains/${domain.id}`,
  });
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
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: domain.label, path: `/domains/${domain.id}` },
        ])}
      />

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


      <LogoCarouselSection />

      <CertificatesSection />
      

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
