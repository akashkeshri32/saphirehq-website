import CodeIcon from "@/assets/icons/code.svg";
import ReactIcon from "@/assets/tools-icons/react.svg";
import NextjsIcon from "@/assets/tools-icons/nextjs.svg";
import TypescriptIcon from "@/assets/tools-icons/typescript.svg";
import TailwindIcon from "@/assets/tools-icons/taliwind.svg";
import JavascriptIcon from "@/assets/tools-icons/javascript.svg";
import HtmlIcon from "@/assets/tools-icons/html.svg";


export const frontEnd = {
  id: "frontend",
  label: "Frontend Developer",
  heroPillText: "Most in-demand domain",

  Icon: CodeIcon,
  tagline: "Build fast, accessible interfaces with modern frameworks and real design systems.",
  description:
    "Craft the interfaces users see and interact with every day. Build production-quality projects with modern frameworks, write clean maintainable code, and develop the eye for detail that separates great frontend engineers from good ones.",
  tools: [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextjsIcon },
    { name: "TypeScript", icon: TypescriptIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "JavaScript", icon: JavascriptIcon },
    { name: "HTML & CSS", icon: HtmlIcon },
  ],
  projects: [
    "Personal developer portfolio",
    "SaaS product dashboard UI",
    "E-commerce storefront",
  ],
  duration: "10–14 weeks",
  popular: false,
  highlights: [
    "Build production-quality UI, not tutorial clones",
    "Learn the exact stack modern teams hire for",
    "Write code reviewed the way real teams review it",
    "Ship a portfolio with real, working deployed apps",
  ],
  impactPoints: [
    "Build a personal developer portfolio from scratch",
    "Ship a SaaS product dashboard UI",
    "Build a full e-commerce storefront",
    "Get your code reviewed by a working engineer",
  ],
  careerStats: [
    { stat: "250+", text: "Hiring Partners" },
    { stat: "1000+", text: "Students Trained" },
    { stat: "100+", text: "Real Projects" },

    { stat: "99%", text: "Completion Rate" },
    { stat: "30+", text: "Skilled Mentors" },
  ],
  instructors: [
    {
      name: "Arjun Mehta",
      domain: "Frontend Developer",
      description: "Senior engineer who has shipped production apps used by millions.",
      linkedin: ""
    },
    {
      name: "Ishaan Bhatt",
      domain: "Frontend Developer",
      description:
        "React specialist with 6+ years building design-system-driven products.",
      linkedin: ""
    },
  ],
}