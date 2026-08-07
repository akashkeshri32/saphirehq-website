import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import RedCross from "@/assets/icons/red-cross.svg";
import GreenTick from "@/assets/icons/green-tick.svg";
import { ProblemBulletCard } from "./problemBulletCard";

const PROBLEMS = [
"Lack of practical, hands-on experience",
"Limited exposure to real-world projects",
"Difficulty building a strong portfolio",
"Insufficient industry mentorship",
"Uncertainty about employer expectations",
"Low confidence during interviews",
"Inability to showcase skills beyond academics",

];

const SOLUTIONS = [
  "Work on industry-relevant projects",
  "Build a professional portfolio",
  "Learn from experienced industry mentors",
  "Develop practical problem-solving skills",
  "Master modern tools and technologies",
  "Showcase real-world project experience",
  "Strengthen their resume and LinkedIn profile",

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
          <Reveal direction="left" className="h-full [&>*]:h-full">
            <ProblemBulletCard
              heading="Problems We Are Solving"
              description="Despite completing courses and earning certifications, many students struggle with:"
              items={PROBLEMS}
              icon={RedCross}
            />
          </Reveal>
          <Reveal direction="right" delay={0.1} className="h-full [&>*]:h-full">
            <ProblemBulletCard
              heading="How We Solve It"
              description="Our ecosystem enables students to:"
              items={SOLUTIONS}
              icon={GreenTick}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
