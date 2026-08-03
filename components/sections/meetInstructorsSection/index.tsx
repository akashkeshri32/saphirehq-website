import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import PortraitPlaceholder from "@/assets/images/placeholders/portrait-placeholder.svg";
import { InstructorCard } from "./instructorCard";

export type Instructor = {
  name: string;
  domain: string;
  description: string;
  linkedin : string
};

const DEFAULT_INSTRUCTORS: Instructor[] = [
  {
    name: "Ashish Rajput",
    domain: "Data Science",
    description: "8+ Years work Exp.",
    linkedin : "https://www.linkedin.com/in/ashish-rajput-8b26a31b2/",
  },
  {
    name: "Ritik Singh",
    domain: "Full Stack Developer",
    description: "5+ years work Exp.",
    linkedin : ""
  },
  {
    name: "Tanish Raj Sharma",
    domain: "UI UX Designer",
    description: "5+ years work Exp.",
    linkedin : ""
  },
  {
    name: "Muskan Swaroop",
    linkedin : "https://www.linkedin.com/in/muskan-swaroop/",
    domain: "Student Career Guide",
    description: "5+ years of Exp.",
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
    <section id="instructors" className="py-12 md:py-22">
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
