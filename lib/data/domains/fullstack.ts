import FullstackIcon from "@/assets/icons/fullstack.svg";
import ReactIcon from "@/assets/tools-icons/react.svg";
import NodejsIcon from "@/assets/tools-icons/nodejs.png";
import TypescriptIcon from "@/assets/tools-icons/typescript.svg";
import DevopsIcon from "@/assets/tools-icons/devops.svg";

export const fullstack = {
  id: "full-stack",
  label: "Full Stack Development",
  Icon: FullstackIcon,
  heroPillText: "Most in-demand domain",

  tagline: "Ship complete products end-to-end, from database to deployed interface.",
  description:
    "Master both frontend and backend to deliver complete, production-ready web applications from scratch. The most comprehensive track — ideal for building entire products independently or stepping into a tech lead role.",
  tools: [
    { name: "React", icon: ReactIcon },
    { name: "Node.js", icon: NodejsIcon },
    { name: "PostgreSQL", icon: null },
    { name: "TypeScript", icon: TypescriptIcon },
    { name: "DevOps", icon: DevopsIcon },
  ],
  projects: [
    "Full-stack SaaS application",
    "Real-time collaboration tool",
    "E-commerce platform with CMS",
  ],
  duration: "14–20 weeks",
  popular: true,
  highlights: [
    "Own a product end-to-end, frontend to backend",
    "Learn the full stack modern teams actually hire for",
    "Build and deploy, not just prototype in a sandbox",
    "Graduate ready to lead, not just contribute",
  ],
  impactPoints: [
    "Ship a full-stack SaaS application",
    "Build a real-time collaboration tool",
    "Launch an e-commerce platform with a CMS",
    "Deploy your own project to production",
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
      name: "Aakash Verma",
      domain: "Full Stack Development",
      description: "Full-stack lead who has taken 4 products from zero to production.",
      linkedin: ""
    },
    {
      name: "Ritika Chawla",
      domain: "Full Stack Development",
      description: "Full-stack engineer with 7+ years across startups and scale-ups.",
      linkedin: ""
    },
  ],
}