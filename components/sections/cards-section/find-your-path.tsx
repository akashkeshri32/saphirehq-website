import { FeatureCardData } from "./feature-card";
import CapIcon from "@/assets/icons/cap.svg";
import PasteIcon from "@/assets/icons/paste.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import { CardsSection } from ".";



export default function () {

  const FIND_PATH_CARDS: FeatureCardData[] = [
    {
      gradient: "primary-gradient",
      icon: CapIcon,
      heading: "I'm a student",
      description:
        `Build a real portfolio alongside your degree, so you graduate with proof of skill — not just a transcript.`,
      cta: { label: "Explore Student Path", href: "#quiz" },
    },
    {
      gradient: "light-deep-blue",
      icon: PasteIcon,
      heading: "I'm switching careers",
      description:
        `Move into tech with a structured, mentor-guided track built around outcomes — not open-ended self-study.`,
      cta: { label: "Explore Career-Switch Path", href: "?apply-now" },
    },
    {
      gradient: "psych-violet",
      icon: ClockIcon,
      heading: "I'm a working professional",
      description:
        "Flexible schedules and weekly live sessions built around a job you're already keeping.",
      cta: { label: "Explore Upskilling Path", href: "/#domains" },
    },
  ];


  return (
    <div className="bg-bg-light">
      <CardsSection
        id="find-your-path"
        eyebrow="Find Your Path"
        heading="Wherever you're starting from, there's a path in."
        description="Sapphire IQ works differently depending on where you're coming from — tell us which one sounds like you."
        cards={FIND_PATH_CARDS}
      />
    </div>
  )
}