import { FeatureCardData } from "./feature-card";
import IndustryIcon from "@/assets/icons/industry.svg";
import MentorIcon from "@/assets/icons/mentors.svg";
import PortfolioIcon from "@/assets/icons/portfolio.svg";
import CapIcon from "@/assets/icons/cap.svg";
import TickIcon from "@/assets/icons/tick.svg";
import GraphIcon from "@/assets/icons/graph.svg";
import { CardsSection } from ".";
import Image from "next/image";
import MultiGradientBg from "@/assets/gradients/multi-gradient-bg.png";



export default function () {
  const WHY_CARDS: FeatureCardData[] = [
    {
      gradient: "primary-gradient",
      icon: IndustryIcon,
      heading: "Real-World Projects",
      description:
        "Work on industry-grade projects with real scope documents and deliverables, not toy tutorials.",
    },
    {
      gradient: "purple",
      icon: MentorIcon,
      heading: "Expert Mentorship",
      description:
        "Weekly 1:1 sessions with industry professionals who unblock you and sharpen your craft.",
    },
    {
      gradient: "plain-green",
      icon: PortfolioIcon,
      heading: "Structured Learning Path",
      description:
        "Follow a clear, milestone-driven curriculum designed to take you from fundamentals to job-ready.",
    },
    {
      gradient: "black",
      icon: CapIcon,
      heading: "Portfolio & Certification",
      description:
        "Graduate with a verified certificate and a portfolio you can confidently show recruiters.",
    },
    {
      gradient: "light-deep-blue",
      icon: TickIcon,
      heading: "Placement Assistance",
      description:
        "Get connected with our network of 500+ hiring partners once you're ready.",
    },
    {
      gradient: "psych-violet",
      icon: GraphIcon,
      heading: "Community & Support",
      description:
        "Learn alongside a cohort of peers, with mentors and support just a message away.",
    },
  ];

  return (
    <div className="relative bg-bg-light">
      <CardsSection
        eyebrow="Why Sapphire IQ"
        heading="Bridging the gap between education and employment."
        description="We transform theoretical knowledge into practical skills through real-world projects, mentorship, and portfolio development — preparing students for careers, not just credentials."
        cards={WHY_CARDS}
      />

      <Image src={MultiGradientBg} alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
    </div>

  )
}