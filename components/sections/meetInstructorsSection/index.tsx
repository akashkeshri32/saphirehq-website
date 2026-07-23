import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import PortraitPlaceholder from "@/assets/images/placeholders/portrait-placeholder.svg";
import { InstructorCard } from "./instructorCard";

const INSTRUCTORS = [
  {
    name: "Ritika Verma",
    domain: "Data Science",
    description: "8+ years building ML systems at scale for fintech and retail.",
  },
  {
    name: "Arjun Mehta",
    domain: "Full Stack Development",
    description: "Senior engineer who has shipped production apps used by millions.",
  },
  {
    name: "Priya Nair",
    domain: "UI/UX Design",
    description: "Lead product designer with a decade of experience across startups.",
  },
  {
    name: "Karan Singh",
    domain: "AI / ML Engineering",
    description: "Applied ML engineer working on LLM-powered products in production.",
  },
];

export const MeetInstructorsSection = () => {
  return (
    <section className="py-120">
      <Container>
        <SectionHeader
          eyebrow="Meet Your Instructors"
          heading="30+ mentors, currently working in the field."
          description="Every instructor is an active industry professional, not a full-time trainer reading from a script."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 justify-items-center">
          {INSTRUCTORS.map((instructor) => (
            <InstructorCard
              key={instructor.name}
              image={PortraitPlaceholder}
              {...instructor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
