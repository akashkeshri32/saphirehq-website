import Container from "@/components/layout/container";
import { FeatureCard, type FeatureCardData } from "@/components/sections/cards-section/feature-card";
// import IndustryIcon from "@/assets/icons/industry.svg";
// import PortfolioIcon from "@/assets/icons/portfolio.svg";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import EyeIcon from "@/assets/icons/eye.svg";
import CapIcon from "@/assets/icons/cap.svg"

const CARDS: FeatureCardData[] = [
  {
    gradient: "primary-gradient",
    icon: EyeIcon,
    heading: "Our Vision",
    description:
      `<p>
        To build India's most trusted ecosystem for project-based learning and career acceleration, where every learner gains the practical skills, industry exposure, and professional confidence required to succeed in the modern workforce.
      </p>`,
  },
  {
    gradient: "light-deep-blue",
    icon: CapIcon,
    heading: "Our Mission",
    description: `
      <p>
        Our mission is to help students transition from learners to professionals by providing practical experiences that extend beyond traditional classrooms.
      </p>

      <p>
        We strive to nurture industry-ready talent through real-world projects, personalized mentorship, career development, and opportunities that prepare students for long-term professional success.
      </p>`,
  }
];

export const VisionAndMissionSection = () => {
  return (
    <section className="py-19 md:py-22 bg-bg-light">
      <Container>
        <SectionHeader
          eyebrow="Vision & Mission"
          eyebrowVariant="default"
          heading="What we're building toward."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6.5 mt-10">
          {CARDS.map((card, index) => (
            <Reveal key={card.heading} direction="up" delay={index * 0.1} hover className="h-full [&>*]:h-full">
              <FeatureCard {...card} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
