import GraphIcon from "@/assets/icons/graph-purple.svg";
import MySqlIcon from "@/assets/tools-icons/MySQL.svg";
import PythonIcon from "@/assets/tools-icons/python.png";
import PowerBiIcon from "@/assets/tools-icons/power-bi.svg";
import TableauIcon from "@/assets/tools-icons/tableau.svg";
import ExcelIcon from "@/assets/tools-icons/excel.svg";


export const dataAnalyst = {
  id: "data-analyst",
  label: "Data Analyst",
  heroPillText: "Most in-demand domain",

  Icon: GraphIcon,
  tagline: "Explore, clean, and visualize data to uncover the story behind the numbers.",
  description:
    "Explore, clean, and visualize data to uncover the story behind the numbers.",
  tools: [
    { name: "MySQL", icon: MySqlIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Power BI", icon: PowerBiIcon },
    { name: "Tableau", icon: TableauIcon },
    { name: "Excel", icon: ExcelIcon },
  ],
  projects: [
    "Sales performance dashboard",
    "Customer segmentation analysis",
    "KPI tracking & reporting system",
  ],
  duration: "8–12 weeks",
  popular: false,
  highlights: [
    "Turn raw spreadsheets into decision-ready dashboards",
    "Learn SQL and Python the way analysts use them daily",
    "Practice on real, messy business datasets",
    "Build a portfolio recruiters can verify",
  ],
  impactPoints: [
    "Ship a sales performance dashboard end-to-end",
    "Run a full customer segmentation analysis",
    "Build a live KPI tracking & reporting system",
    "Present insights to a real mentor review panel",
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
      name: "Ananya Iyer",
      domain: "Data Analyst",
      description:
        "Ex-analytics lead who has built reporting systems for 3 unicorn startups.",
      linkedin: ""
    },
    {
      name: "Vivek Nair",
      domain: "Data Analyst",
      description: "SQL and BI specialist with 7+ years in retail analytics.",
      linkedin: ""
    },
  ],
}