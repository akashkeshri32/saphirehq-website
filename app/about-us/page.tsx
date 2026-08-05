import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/aboutHeroSection";
import { WhyWeExistSection } from "@/components/sections/whyWeExistSection";
import { VisionAndMissionSection } from "@/components/sections/visionAndMissionSection";
import { ProblemsWeSolveSection } from "@/components/sections/problemsWeSolveSection";
import { CommitmentSection } from "@/components/sections/commitmentSection";
import { WhatToExpectSection } from "@/components/sections/whatToExpectSection";
import { CtaSectionV2 } from "@/components/sections/ctaSectionV2";
import { CtaSection } from "@/components/sections/ctaSection";
import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Sapphire IQ | India's Career Accelerator for Tech Internships",
  description:
    "Learn why Sapphire IQ exists, how our career accelerator program works, and the commitment we make to every learner who joins us.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us" },
        ])}
      />

      <AboutHeroSection />

      <WhyWeExistSection />

      <VisionAndMissionSection />

      <ProblemsWeSolveSection />

      <CommitmentSection />

      <WhatToExpectSection />

      <CtaSectionV2
        heading="Ready to see it for yourself?"
        description="The best way to understand Sapphire IQ is to start your application."
        ctaLabel="Enroll Now"
        ctaHref="/enroll-now"
      />

      <CtaSection
        className="max-w-160!"
        heading="Don't just plan. Start building."
        description="Take the first step towards an exciting career with Sapphire IQ."
        buttons={[
          { label: "Register Now", href: "?apply-now", variant: "white" },
          { label: "Explore Programs", href: "/#domains", variant: "outline-white" },
        ]}
      />
    </>
  );
}
