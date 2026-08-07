import FullstackIcon from "@/assets/icons/fullstack.svg";
import HtmlIcon from "@/assets/tools-icons/html.svg";
import CssIcon from "@/assets/tools-icons/css.svg";
import JavascriptIcon from "@/assets/tools-icons/javascript.svg";
import ReactIcon from "@/assets/tools-icons/react.svg";
import NodejsIcon from "@/assets/tools-icons/nodejs.png";
import ExpressJsIcon from "@/assets/tools-icons/Express JS.svg";
import MongoDbIcon from "@/assets/tools-icons/MongoDB.svg";
import MySqlIcon from "@/assets/tools-icons/MySQL.svg";
import GitHubIcon from "@/assets/tools-icons/GitHub.svg";
import RestApiIcon from "@/assets/tools-icons/rest-api-icon.webp";
import RitikSinghImage from "@/assets/images/instructors/ritik-singh.png";

import EcommercePlatformProject from "@/assets/images/projects/fullstack/ecommerce platform.png";
import LearningManagementSystemProject from "@/assets/images/projects/fullstack/learning management system.png";
import JobPortalProject from "@/assets/images/projects/fullstack/job portal.png";
import HospitalManagementSystemProject from "@/assets/images/projects/fullstack/hospital management system.png";
import ExpenseTrackerProject from "@/assets/images/projects/fullstack/expense tracker.png";
import CrmPlatformProject from "@/assets/images/projects/fullstack/crm platform.png";
import FoodOrderingWebsiteProject from "@/assets/images/projects/fullstack/food ordering website.png";
import ProjectManagementToolProject from "@/assets/images/projects/fullstack/project management tool.png";
import BankingApplicationProject from "@/assets/images/projects/fullstack/banking application.png";
import SocialMediaPlatformProject from "@/assets/images/projects/fullstack/social media platform.png";

export const fullstack = {
  id: "full-stack",
  label: "Full Stack Development",
  Icon: FullstackIcon,
  heroPillText: "Most in-demand domain",

  tagline: "Build Complete Web Applications from Frontend to Backend.",
  description:
    "Master both frontend and backend to deliver complete, production-ready web applications from scratch. The most comprehensive track — ideal for building entire products independently or stepping into a tech lead role.",
  tools: [
    { name: "HTML5", icon: HtmlIcon },
    { name: "CSS3", icon: CssIcon },
    { name: "JavaScript", icon: JavascriptIcon },
    { name: "React.js", icon: ReactIcon },
    { name: "Node.js", icon: NodejsIcon },
    { name: "Express.js", icon: ExpressJsIcon },
    { name: "MongoDB", icon: MongoDbIcon },
    { name: "MySQL", icon: MySqlIcon },
    { name: "Git & GitHub", icon: GitHubIcon },
    { name: "REST APIs", icon: RestApiIcon },
  ],
  projects: [
    { name: "E-commerce Platform", icon: EcommercePlatformProject },
    { name: "Learning Management System", icon: LearningManagementSystemProject },
    { name: "Job Portal", icon: JobPortalProject },
    { name: "Hospital Management System", icon: HospitalManagementSystemProject },
    { name: "Expense Tracker", icon: ExpenseTrackerProject },
    { name: "CRM Platform", icon: CrmPlatformProject },
    { name: "Food Ordering Website", icon: FoodOrderingWebsiteProject },
    { name: "Project Management Tool", icon: ProjectManagementToolProject },
    { name: "Banking Application", icon: BankingApplicationProject },
    { name: "Social Media Platform", icon: SocialMediaPlatformProject },
  ],
  duration: "14–20 weeks",
  popular: true,
  highlights: [
    "Build responsive frontend interfaces and secure backend systems for web applications.",
    "Connect databases, integrate APIs, and develop complete end-to-end application functionality.",
    "Work on real-world projects across the complete software development lifecycle.",
    "Build a strong portfolio showcasing practical full stack development skills.",
  ],
  impactPoints: [
    "Ship a full-stack SaaS application",
    "Build a real-time collaboration tool",
    "Launch an e-commerce platform with a CMS",
    "Deploy your own project to production",
  ],
  careerStats: [
    { stat: "500+", text: "Hiring Partners" },
    { stat: "1000+", text: "Students Trained" },
    { stat: "100+", text: "Real Projects" },

    { stat: "99%", text: "Completion Rate" },
    { stat: "30+", text: "Skilled Mentors" },
  ],
  instructors: [
    {
      name: "Ritik Singh",
      domain: "Full Stack Developer",
      description: "5+ years work Exp.",
      image : RitikSinghImage,
      linkedin : "https://www.linkedin.com/in/ritikkumarsingh7739"
    },
  ],
}
