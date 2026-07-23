import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { JourneyCard } from "./journeyCard";

const JOURNEY_STEPS = [
  {
    heading: "Apply Online",
    description: "Submit your application and tell us about your goals.",
  },
  {
    heading: "Screening Call",
    description: "A quick call to understand your background and interests.",
  },
  {
    heading: "Domain Selection",
    description: "Pick the track that fits your career goals best.",
  },
  {
    heading: "Onboarding",
    description: "Get access to your dashboard, mentor, and cohort.",
  },
  {
    heading: "Live Learning",
    description: "Attend live sessions and work through structured modules.",
  },
  {
    heading: "Real Projects",
    description: "Apply your skills on real, industry-style projects.",
  },
  {
    heading: "Mock Interviews",
    description: "Sharpen your interview skills with mentor feedback.",
  },
  {
    heading: "Placement Support",
    description: "Get matched with our hiring partners and land the offer.",
  },
];

export const JourneySection = () => {
  return (
    <section className="py-120 border-b border-border-stroke">
      <Container>
        <div className="max-w-160 flex flex-col gap-3.25 mb-12">
          <Eyebrow variant="default" text="Your Journey" />
          <h2 className="text-h2-mobile lg:text-h2 font-heading font-semibold">
            Build your career, not just a resume.
          </h2>
          <p className="text-17 text-text-gray">
            More than an internship — our 8-step Career Accelerator equips you with the skills, experience, and confidence to become industry-ready, one verifiable milestone at a time.
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 md:hidden">
          {JOURNEY_STEPS.map((step, i) => (
            <div key={step.heading} className="w-40 shrink-0">
              <JourneyCard index={i + 1} {...step} />
            </div>
          ))}
        </div>

        <div className="relative hidden md:grid grid-cols-8 gap-3">
          <div className="absolute top-6 left-0 right-[8.25%] h-0.5 bg-border-stroke -z-10" />
          {JOURNEY_STEPS.map((step, i) => (
            <JourneyCard key={step.heading} index={i + 1} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
};
