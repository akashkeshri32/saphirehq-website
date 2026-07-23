import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import RedCross from "@/assets/icons/red-cross.svg";
import GreenTick from "@/assets/icons/green-tick.svg";
import { ProblemBulletCard } from "./problemBulletCard";

const PROBLEMS = [
  "Graduates lack hands-on, portfolio-ready experience",
  "Online courses teach concepts with no career pathway",
  "Self-study has no structured roadmap or accountability.",
  `Placement support usually stops at "here are some job links"`,
];

const SOLUTIONS = [
  "Real industry projects reviewed by working mentors.",
  "A structured 8-step Career Accelerator with clear milestones.",
  "Live, weekly mentor accountability — not self-paced isolation.",
  "Resume, portfolio, HR referral, and mock interview support.",
];

export const ProblemsWeSolveSection = () => {
  return (
    <section className="py-15 md:py-22">
      <Container>
        <SectionHeader
          eyebrow="The Gap We Address"
          heading="Problems we're solving — and how."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <ProblemBulletCard
            heading="Problems We Are Solving"
            items={PROBLEMS}
            icon={RedCross}
          />
          <ProblemBulletCard
            heading="How We Solve It"
            items={SOLUTIONS}
            icon={GreenTick}
          />
        </div>
      </Container>
    </section>
  );
};
