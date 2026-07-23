import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { CommitmentCard } from "./commitmentCard";

const COMMITMENTS = [
  {
    heading: "Mentor Accountability",
    description:
      "Every learner is paired with a live mentor, not left to a self-paced dashboard.",
    bgClassName: "bg-blue-primary",
  },
  {
    heading: "Outcome Tracking",
    description:
      "Progress is measured by shipped projects and milestones, not video- watch time.",
    bgClassName: "bg-purple",
  },
  {
    heading: "Placement Follow-Through",
    description:
      "Our placement team stays involved through every interview round, not just at enrollment.",
    bgClassName: "bg-green",
  },
  {
    heading: "Transparent Outcomes",
    description:
      "Every number we publish — completion, placement, CTC hike — is one we track and stand behind.",
    bgClassName: "bg-purple-two",
  },
];

export const CommitmentSection = () => {
  return (
    <section className="py-15 md:py-22 bg-bg-light">
      <Container>
        <SectionHeader
          eyebrow="Our Commitment"
          heading="Our commitment to student success."
          description="These aren't marketing lines — they're the standards we hold every domain and every mentor to."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {COMMITMENTS.map((commitment) => (
            <CommitmentCard key={commitment.heading} {...commitment} />
          ))}
        </div>
      </Container>
    </section>
  );
};
