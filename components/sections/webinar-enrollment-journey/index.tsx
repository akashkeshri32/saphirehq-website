import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import { EnrollmentStepCard } from "../howEnrollmentWorksSection/enrollmentStepCard";

const STEPS = [
  {
    heading: "Real-world projects",
    description:
      "Work on industry-relevant projects and build a strong portfolio.",
  },
  {
    heading: "Weekly mentor guidance",
    description:
      "Learn from industry professionals with practical experience.",
  },
  {
    heading: "Verified certificate",
    description:
      "Receive a certificate upon successful completion.",
  },
  {
    heading: "Career support",
    description:
      "Get guidance for placements and future opportunities.",
  },
];

export const WebinarEnrollmentJourney = () => {
  return (
    <section className="bg-bg-light">
      <div className="h-px bg-border-stroke/80 w-full"></div>
      <Container className="py-19 md:py-22">
        <SectionHeader
          // eyebrow="How Enrollment Works"
          heading="Why Sapphire IQ?"
          // description="Here's exactly what happens after you hit submit."
          descriptionDelay={0.4}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {STEPS.map((step, index) => (
            <Reveal key={step.heading} direction="up" delay={index * 0.1} hover className="h-full [&>*]:h-full">
              <EnrollmentStepCard index={index + 1} {...step} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
