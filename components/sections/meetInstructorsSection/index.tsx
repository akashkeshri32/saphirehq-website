import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import PortraitPlaceholder from "@/assets/images/placeholders/portrait-placeholder.svg";
import { InstructorCard } from "./instructorCard";

export type Instructor = {
  name: string;
  domain: string;
  description: string;
};

const DEFAULT_INSTRUCTORS: Instructor[] = [
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

type Props = {
  instructors?: Instructor[];
  eyebrow?: string;
  heading?: string;
  description?: string;
};

export const MeetInstructorsSection = ({
  instructors = DEFAULT_INSTRUCTORS,
  eyebrow = "Meet Your Instructors",
  heading = "30+ mentors, currently working in the field.",
  description = "Every instructor is an active industry professional, not a full-time trainer reading from a script.",
}: Props) => {
  return (
    <section className="py-12 md:py-22">
      <Container>
        <SectionHeader eyebrow={eyebrow} heading={heading} description={description} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 justify-items-center">
          {instructors.map((instructor) => (
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
