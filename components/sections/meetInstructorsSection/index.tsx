import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import { InstructorCard } from "./instructorCard";
import AshishRajputImage from "@/assets/images/instructors/ashish-rajput.png";
import RitikSinghImage from "@/assets/images/instructors/ritik-singh.png";
import TanishRajSharmaImage from "@/assets/images/instructors/tanish-raj.png";
import MuskanSwaroopImage from "@/assets/images/instructors/muskan-swaroop.png";
import type { StaticImageData } from "next/image";



export type Instructor = {
  name: string;
  domain: string;
  description: string;
  linkedin: string
  image : StaticImageData
};

const DEFAULT_INSTRUCTORS: Instructor[] = [
  {
    name: "Ashish Rajput",
    domain: "Data Science / Data Analyst / AI-ML / Business Analyst",
    description: "8+ Years work Exp.",
    image : AshishRajputImage,
    linkedin : "https://www.linkedin.com/in/ashish-rajput-8b26a31b2",
  },
  {
    name: "Ritik Singh",
    domain: "Full Stack Developer",
    description: "5+ years work Exp.",
    image : RitikSinghImage,
    linkedin : "https://www.linkedin.com/in/ritikkumarsingh7739"
  },
  {
    name: "Tanish Raj Sharma",
    domain: "UI UX Designer",
    description: "5+ years work Exp.",
    image : TanishRajSharmaImage,
    linkedin : "https://www.linkedin.com/in/tanish-raj-sharma"
  },
  {
    name: "Muskan Swaroop",
    linkedin : "https://www.linkedin.com/in/muskan-swaroop",
    domain: "Student Career Guide",
    description: "5+ years of Exp.",
    image : MuskanSwaroopImage
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
    <section id="instructors" className="py-19 md:py-22">
      <Container>
        <SectionHeader eyebrow={eyebrow} heading={heading} description={description} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 justify-items-center">
          {instructors.map((instructor, index) => (
            <Reveal className="w-full" key={instructor.name} direction="up" delay={(index % 4) * 0.08}>
              <InstructorCard {...instructor} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
