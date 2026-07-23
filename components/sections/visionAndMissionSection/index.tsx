import Container from "@/components/layout/container";
import { FeatureCard, type FeatureCardData } from "@/components/sections/cards-section/feature-card";
import IndustryIcon from "@/assets/icons/industry.svg";
import PortfolioIcon from "@/assets/icons/portfolio.svg";
import { SectionHeader } from "@/components/ui/section-header";
import EyeIcon from "@/assets/icons/eye.svg";
import CapIcon from "@/assets/icons/cap.svg"

const CARDS: FeatureCardData[] = [
  {
    gradient: "primary-gradient",
    icon: EyeIcon,
    heading: "Our Vision",
    description:
      "A world where hiring is based on demonstrated skill, not credentials alone — where anyone with the drive to learn can prove they're ready for the job.",
  },
  {
    gradient: "light-deep-blue",
    icon: CapIcon,
    heading: "Our Mission",
    description: `To deliver structured, mentor-guided, project-based learning that makes every student genuinely industry-ready — and to stand behind that with real placement support.`,
  }
];

export const VisionAndMissionSection = () => {
  return (
    <section className="py-15 md:py-22 bg-bg-light">
      <Container>
        <SectionHeader 
          eyebrow="Vision & Mission"
          eyebrowVariant="default"
          heading="What we're building toward."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6.5 mt-10">
          {CARDS.map((card) => (
            <FeatureCard key={card.heading} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
