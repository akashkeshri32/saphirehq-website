import type { Metadata } from "next";
import { PlacementHeroSection } from "@/components/sections/placementHeroSection";
import { PlacementStatsSection } from "@/components/sections/placementStatsSection";
import { PlacementDistributionSection } from "@/components/sections/placementDistributionSection";
import { HowPlacementWorksSection } from "@/components/sections/howPlacementWorksSection";
import { LogoCarouselSection } from "@/components/sections/logoCarouselSection";
import { SuccessStoriesSection } from "@/components/sections/successStoriesSection";
import { CtaSection } from "@/components/sections/ctaSection";

export const metadata: Metadata = {
  title: "Placement Statistics — Sapphire IQ",
  description:
    "See real placement outcomes from Sapphire IQ learners — hiring partners, completion rates, CTC hikes, and how our placement process works.",
};

export default function PlacementStatisticsPage() {
  return (
    <>
      <PlacementHeroSection />

      <PlacementStatsSection />

      <PlacementDistributionSection />

      <HowPlacementWorksSection />

      <LogoCarouselSection />

      <SuccessStoriesSection />

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
