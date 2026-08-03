import BarGraphIcon from "@/assets/icons/bar-graph.svg";
import JiraIcon from "@/assets/tools-icons/Jira.svg";
import PowerBiIcon from "@/assets/tools-icons/power-bi.svg";
import ExcelIcon from "@/assets/tools-icons/excel.svg";


export const businessAnalyst = {
  id: "business-analyst",
  label: "Business Analyst",
  Icon: BarGraphIcon,
  heroPillText: "Most in-demand domain",
  tagline: "Turn business problems into data-backed decisions and strategy.",
  description:
    "Turn business problems into data-backed decisions and strategy.",
  tools: [
    { name: "Jira", icon: JiraIcon },
    { name: "Power BI", icon: PowerBiIcon },
    { name: "Excel", icon: ExcelIcon },
  ],
  projects: [
    "Process optimisation case study",
    "Market opportunity analysis",
    "Product roadmap documentation",
  ],
  duration: "8–12 weeks",
  popular: false,
  highlights: [
    "Bridge business goals with data-driven strategy",
    "Learn stakeholder communication that gets buy-in",
    "Master Agile delivery from a business lens",
    "Build dashboards decision-makers actually use",
  ],
  impactPoints: [
    "Lead a real process-optimisation case study",
    "Present findings to a live stakeholder panel",
    "Build a market opportunity analysis from scratch",
    "Ship a product roadmap ready for leadership review",
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
      name: "Meera Shah",
      domain: "Business Analyst",
      description:
        "9+ years translating business requirements into shipped product decisions.",
      linkedin: ""
    },
    {
      name: "Rahul Deshmukh",
      domain: "Business Analyst",
      description:
        "Agile delivery lead who has run 50+ stakeholder-facing projects.",
      linkedin: ""
    },
  ],
}