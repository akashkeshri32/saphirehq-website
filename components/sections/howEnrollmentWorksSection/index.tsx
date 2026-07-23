import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { EnrollmentStepCard } from "./enrollmentStepCard";

const STEPS = [
  {
    heading: "Submit Your Application",
    description:
      "Fill out the form with your details and preferred domain — it takes less than two minutes.",
  },
  {
    heading: "Talk to a Mentor",
    description:
      "Our team reaches out within 24 hours to understand your goals and confirm the right fit.",
  },
  {
    heading: "Start Your Journey",
    description:
      "Get onboarded, meet your mentor, and begin working on real projects from week one.",
  },
];

export const HowEnrollmentWorksSection = () => {
  return (
    <section className="bg-bg-light">
      <div className="h-px bg-border-stroke/80 w-full"></div>
      <Container className="py-22">
        <SectionHeader
          eyebrow="How Enrollment Works"
          heading="Three steps to get started."
          description="Here's exactly what happens after you hit submit."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {STEPS.map((step, index) => (
            <EnrollmentStepCard key={step.heading} index={index + 1} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
};
