import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PlacementCard } from "./placementCard";
import UserIcon from "@/assets/icons/user-green.svg";
import DocBlueIcon from "@/assets/icons/doc-blue.svg";

import PastePurpleIcon from "@/assets/icons/paste-purple-light.svg";
import SunIcon from "@/assets/icons/sun-yellow.svg";





const PLACEMENT_CARDS = [
  {
    icon: DocBlueIcon,
    heading: "Resume & LinkedIn Building",
    description:
      "Get your resume and LinkedIn profile optimized by placement experts to catch recruiter attention.",
  },
  {
    icon: PastePurpleIcon,
    heading: "Mock Interviews",
    description:
      "Practice with mentors through structured mock interviews and real-time feedback.",
  },
  {
    icon: UserIcon,
    heading: "Hiring Partner Network",
    description:
      "Direct access to our network of 250+ companies actively hiring our graduates.",
  },
  {
    icon: SunIcon,
    heading: "Dedicated Placement Cell",
    description:
      "A dedicated team works with you until you're placed — not just until you graduate.",
  },
];

export const PlacementAssistanceSection = () => {
  return (
    <section className="py-120 bg-black">
      <Container>
        <div className="max-w-160 flex flex-col gap-3.5">
          <Eyebrow variant="secondary" text="Placement Assistance" />
          <h2 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-white">
            We Don&apos;t Stop at Training
          </h2>
          <p className="text-17 text-white-two">
            From resumes to interviews to introductions — we stay with you
            until you have an offer in hand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {PLACEMENT_CARDS.map((card) => (
            <PlacementCard key={card.heading} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
