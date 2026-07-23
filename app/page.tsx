import { HeroSection } from "@/components/sections/heroSection";
import { DomainsSection } from "@/components/sections/domainsSection";
import WhySapphire from "@/components/sections/cards-section/why-sapphire";
import FindYourPath from "@/components/sections/cards-section/find-your-path";
import { JourneySection } from "@/components/sections/journeySection";
import { ColumnHighlightsSection } from "@/components/sections/columnHighlightsSection";
import { PlacementAssistanceSection } from "@/components/sections/placementAssistanceSection";
import { StatsSection } from "@/components/sections/statsSection";
import { LogoCarouselSection } from "@/components/sections/logoCarouselSection";
import { SuccessStoriesSection } from "@/components/sections/successStoriesSection";
import { TestimonialsSection } from "@/components/sections/testimonialsSection";
import { CertificatesSection } from "@/components/sections/certificatesSection";
import { MeetInstructorsSection } from "@/components/sections/meetInstructorsSection";
import { FaqSection } from "@/components/sections/faqSection";
import { CtaSection } from "@/components/sections/ctaSection";

import IndustryProjectImage from "@/assets/industry-projects-col-img.png"
import MentorshipImage from "@/assets/industry-projects-col-img.png"


export default function Homepage() {
  return (
    <>
      <HeroSection />

      <WhySapphire />

      <FindYourPath />

      <DomainsSection />

      <JourneySection />

      <ColumnHighlightsSection
        eyebrow="Industry Projects"
        heading="100+ projects, built for real briefs."
        description="Every project mirrors a real business problem — not a simplified classroom version of one. You'll leave with work you can defend in an interview, not just describe."
        highlights={[
          "Real datasets, real stakeholders, real constraints",
          "Reviewed and scored by industry mentors",
          "Directly portfolio-ready on completion",
        ]}

        imageSrc={IndustryProjectImage}
      />

      <ColumnHighlightsSection
        eyebrow="Live Mentorship"
        heading="Guided by people who've done the job."
        description="Every domain is led by 30+ mentors currently working in the field — not full-time instructors reading from a syllabus. You get direct, live feedback on real work."
        highlights={[
          "Weekly live sessions, not pre-recorded lectures",
          "Direct project feedback from your assigned mentor",
          "Career guidance beyond the curriculum",
        ]}

        imageSrc={MentorshipImage}
      />

      <PlacementAssistanceSection />

      <StatsSection />

      <LogoCarouselSection />

      <SuccessStoriesSection />

      <TestimonialsSection />

      <CertificatesSection />

      <MeetInstructorsSection />

      <FaqSection />

      <CtaSection
        heading="Don't just plan. Start building."
        description="Your future is built on the decisions you make today. Take the first step toward an exciting career with Sapphire IQ."
        buttons={[
          { label: "Apply Now", href: "?apply-now", variant: "white" },
          { label: "Explore Domains", href: "/#domains", variant: "outline-white" },
        ]}
      />
    </>
  );
}
