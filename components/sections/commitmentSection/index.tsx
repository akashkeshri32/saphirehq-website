import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import { CommitmentCard } from "./commitmentCard";

const COMMITMENTS = [
  {
    heading: "🎯 Industry-Ready Skills",
    description:
      "Every learner is paired with a live mentor, not left to a self-paced dashboard.",
    bgClassName: "bg-blue-primary",
  },
  {
    heading: "💼 Professional Confidence",
    description:
      "Progress is measured by shipped projects and milestones, not video- watch time.",
    bgClassName: "bg-purple",
  },
  {
    heading: "🗣️ Interview & Communication Excellence",
    description:
      "Our placement team stays involved through every interview round, not just at enrollment.",
    bgClassName: "bg-green",
  },
  {
    heading: "📂 Portfolio That Demonstrates Your Skills",
    description:
      "Every number we publish — completion, placement, CTC hike — is one we track and stand behind.",
    bgClassName: "bg-purple-two",
  },
  {
    heading: "📄 ATS-Optimized Resume & LinkedIn Profile",
    description:
      "Every number we publish — completion, placement, CTC hike — is one we track and stand behind.",
    bgClassName: "bg-blue-primary",
  },
  {
    heading: "🏆 Professional Certifications & Credentials",
    description:
      "Every number we publish — completion, placement, CTC hike — is one we track and stand behind.",
    bgClassName: "bg-purple",
  },
  {
    heading: "🚀 Career-Ready Mindset",
    description:
      "Every number we publish — completion, placement, CTC hike — is one we track and stand behind.",
    bgClassName: "bg-green",
  },
  {
    heading: "🤝 Placement Assistance & Career Support",
    description:
      "Every number we publish — completion, placement, CTC hike — is one we track and stand behind.",
    bgClassName: "bg-purple-two",
  },
];

export const CommitmentSection = () => {
  return (
    <section className="py-19 md:py-22 bg-bg-light">
      <Container>
        <SectionHeader
          eyebrow="Our Commitment"
          heading="Our commitment to student success."
          description="These aren't marketing lines — they're the standards we hold every domain and every mentor to."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {COMMITMENTS.map((commitment, index) => (
            <Reveal key={commitment.heading} direction="up" delay={(index % 4) * 0.08} hover className="h-full [&>*]:h-full">
              <CommitmentCard {...commitment} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
