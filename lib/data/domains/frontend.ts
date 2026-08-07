import CodeIcon from "@/assets/icons/code.svg";
import HtmlIcon from "@/assets/tools-icons/html.svg";
import CssIcon from "@/assets/tools-icons/css.svg";
import JavascriptIcon from "@/assets/tools-icons/javascript.svg";
import ReactIcon from "@/assets/tools-icons/react.svg";
import NextjsIcon from "@/assets/tools-icons/nextjs.svg";
import TailwindIcon from "@/assets/tools-icons/tailwind.svg";
import BootstrapIcon from "@/assets/tools-icons/Bootstrap.svg";
import ReduxIcon from "@/assets/tools-icons/Redux.svg";
import GitHubIcon from "@/assets/tools-icons/GitHub.svg";
import RestApiIcon from "@/assets/tools-icons/rest-api-icon.webp";
import RitikSinghImage from "@/assets/images/instructors/ritik-singh.png";

import NetflixCloneProject from "@/assets/images/projects/frontend/netflix clone.png";
import FoodDeliveryUiProject from "@/assets/images/projects/frontend/food delivery ui.png";
import PortfolioWebsiteProject from "@/assets/images/projects/frontend/portfolio website.png";
import EcommerceFrontendProject from "@/assets/images/projects/frontend/ecommerce frontend.png";
import SpotifyCloneProject from "@/assets/images/projects/frontend/spotify clone.png";
import AdminDashboardProject from "@/assets/images/projects/frontend/admin dashboard.png";
import ChatApplicationUiProject from "@/assets/images/projects/frontend/chat application ui.png";
import LmsFrontendProject from "@/assets/images/projects/frontend/lms frontend.png";
import WeatherApplicationProject from "@/assets/images/projects/frontend/weather application.png";
import BlogPlatformProject from "@/assets/images/projects/frontend/blog platform.png";


export const frontEnd = {
  id: "frontend",
  label: "Frontend Development",
  heroPillText: "Most in-demand domain",

  Icon: CodeIcon,
  tagline: "Create Beautiful, Responsive & Interactive User Interfaces.",
  description:
    "Craft the interfaces users see and interact with every day. Build production-quality projects with modern frameworks, write clean maintainable code, and develop the eye for detail that separates great frontend engineers from good ones.",
  tools: [
    { name: "HTML5", icon: HtmlIcon },
    { name: "CSS3", icon: CssIcon },
    { name: "JavaScript", icon: JavascriptIcon },
    { name: "React.js", icon: ReactIcon },
    { name: "Next.js", icon: NextjsIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "Redux", icon: ReduxIcon },
    { name: "Git & GitHub", icon: GitHubIcon },
    { name: "REST API Integration", icon: RestApiIcon },
  ],
  projects: [
    { name: "Netflix Clone", icon: NetflixCloneProject },
    { name: "Food Delivery UI", icon: FoodDeliveryUiProject },
    { name: "Portfolio Website", icon: PortfolioWebsiteProject },
    { name: "E-commerce Frontend", icon: EcommerceFrontendProject },
    { name: "Spotify Clone", icon: SpotifyCloneProject },
    { name: "Admin Dashboard", icon: AdminDashboardProject },
    { name: "Chat Application UI", icon: ChatApplicationUiProject },
    { name: "LMS Frontend", icon: LmsFrontendProject },
    { name: "Weather Application", icon: WeatherApplicationProject },
    { name: "Blog Platform", icon: BlogPlatformProject },
  ],
  duration: "10–14 weeks",
  popular: false,
  highlights: [
    "Build responsive websites using modern frontend technologies.",
    "Create interactive, reusable, and user-friendly web interfaces.",
    "Develop real-world projects with API integrations and animations.",
    "Build a professional portfolio through industry-focused frontend projects.",
  ],
  impactPoints: [
    "Build a personal developer portfolio from scratch",
    "Ship a SaaS product dashboard UI",
    "Build a full e-commerce storefront",
    "Get your code reviewed by a working engineer",
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
