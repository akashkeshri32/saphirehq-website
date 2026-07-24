import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import ResumeIcon from "@/assets/icons/placements/resume-building.svg";
import PortfolioIcon from "@/assets/icons/placements/portfolio-building.svg";
import HRIcon from "@/assets/icons/placements/hr.svg";
import MockIcon from "@/assets/icons/placements/mock-interview.svg";

import { HowPlacementWorksCard } from "./howPlacementWorksCard";

const STEPS = [
  {
    icon: ResumeIcon,
    heading: "Resume Building",
    description:
      "ATS-friendly resumes built to pass the filter and land the interview.",
  },
  {
    icon: PortfolioIcon,
    heading: "Portfolio Building",
    description:
      "Project presentation curated for how hiring managers actually review work.",
  },
  {
    icon: HRIcon,
    heading: "HR Reference",
    description:
      "Direct introductions and referrals into our hiring partner network.",
  },
  {
    icon: MockIcon,
    heading: "Mock Interviews",
    description:
      "Practice with real interview formats and structured feedback before the real thing.",
  },
];

export const HowPlacementWorksSection = () => {
  return (
    <section className="bg-black py-15 md:py-22">
      <Container>
        <SectionHeader
          variant="dark"
          eyebrow="How Placement Works"
          eyebrowVariant="secondary"
          heading="Support that continues past the program."
          description="Placement assistance isn't a single session at the end — it's four ongoing tracks running alongside your final projects."
          headingClassName="text-white"
          descriptionClassName="text-white-two"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {STEPS.map((step) => (
            <HowPlacementWorksCard key={step.heading} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
};
