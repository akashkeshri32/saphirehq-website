import type { Metadata } from "next";
import { PlacementHeroSection } from "@/components/sections/placementHeroSection";
import { PlacementStatsSection } from "@/components/sections/placementStatsSection";
import { PlacementDistributionSection } from "@/components/sections/placementDistributionSection";
import { HowPlacementWorksSection } from "@/components/sections/howPlacementWorksSection";
import { LogoCarouselSection } from "@/components/sections/logoCarouselSection";
import { PlacementSuccessStoriesSection } from "@/components/sections/placementSuccessStoriesSection";
import { CtaSection } from "@/components/sections/ctaSection";
import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Placement Statistics | Sapphire IQ Success Stories & Hiring Outcomes",
  description:
    "See real placement outcomes from Sapphire IQ learners — hiring partners, completion rates, average CTC hikes, and success stories from our alumni.",
  path: "/placement-statistics",
});

export default function PlacementStatisticsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Placement Statistics", path: "/placement-statistics" },
        ])}
      />

      <PlacementHeroSection />

      <PlacementStatsSection />

      <PlacementDistributionSection />

      <HowPlacementWorksSection />

      <LogoCarouselSection />

      <PlacementSuccessStoriesSection />

      <CtaSection
        heading="Ready to be our next placement story?"
        description="Start your application today and get matched with a mentor within 24 hours."
        buttons={[
          { label: "Enroll Now", href: "/enroll-now", variant: "white" },
          { label: "Explore Domains", href: "/#domains", variant: "outline-white" },
        ]}
      />
    </>
  );
}
