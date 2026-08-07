import PasteIcon from "@/assets/icons/paste-purple.svg";
import FigmaIcon from "@/assets/tools-icons/figma.png";
import AdobeXdIcon from "@/assets/tools-icons/Adobe XD.svg";
import CanvaIcon from "@/assets/tools-icons/Canva.svg";
import FigJamIcon from "@/assets/tools-icons/figjam.svg";
import MiroIcon from "@/assets/tools-icons/miro.svg";
import AdobePhotoshopIcon from "@/assets/tools-icons/Adobe Photoshop.svg";
import AdobeIllustratorIcon from "@/assets/tools-icons/Adobe Illustrator.svg";
import DesignSystemIcon from "@/assets/tools-icons/design-system.png";
import WireframeIcon from "@/assets/tools-icons/wireframe.png";
import PrototypeIcon from "@/assets/tools-icons/prototype.png";
import TanishRajSharmaImage from "@/assets/images/instructors/tanish-raj.png";

import EcommerceMobileAppDesignProject from "@/assets/images/projects/uiux/ecommerce mobile app design.png";
import BankingAppUiProject from "@/assets/images/projects/uiux/banking app ui.png";
import HealthcareDashboardProject from "@/assets/images/projects/uiux/healthcare dashboard.png";
import SaasDashboardProject from "@/assets/images/projects/uiux/saas dashboard.png";
import FoodDeliveryApplicationProject from "@/assets/images/projects/uiux/food delivery application.png";
import LearningManagementSystemUiProject from "@/assets/images/projects/uiux/learning management system ui.png";
import TravelBookingPlatformProject from "@/assets/images/projects/uiux/travel booking platform.png";
import CrmDashboardProject from "@/assets/images/projects/uiux/crm dashboard.png";
import AdminPanelDesignProject from "@/assets/images/projects/uiux/admin panel design.png";
import PortfolioWebsiteDesignProject from "@/assets/images/projects/uiux/portfolio website design.png";

export const uiUx = {
  id: "ui-ux",
  label: "UI/UX",
  Icon: PasteIcon,
  heroPillText: "Most in-demand domain",

  tagline: "Design Digital Experiences That Users Love.",
  description:
    "Learn the complete design process — from user research and low-fidelity wireframes to polished interactive prototypes. You'll design real interfaces, run usability sessions, and build a portfolio that stands out to top companies.",

  tools: [
    { name: "Figma", icon: FigmaIcon },
    { name: "Adobe XD", icon: AdobeXdIcon },
    { name: "Canva", icon: CanvaIcon },
    { name: "FigJam", icon: FigJamIcon },
    { name: "Miro", icon: MiroIcon },
    { name: "Adobe Photoshop", icon: AdobePhotoshopIcon },
    { name: "Adobe Illustrator", icon: AdobeIllustratorIcon },
    { name: "Design Systems", icon: DesignSystemIcon },
    { name: "Wireframing", icon: WireframeIcon },
    { name: "Prototyping", icon: PrototypeIcon },
  ],
  projects: [
    { name: "E-commerce Mobile App Design", icon: EcommerceMobileAppDesignProject },
    { name: "Banking App UI", icon: BankingAppUiProject },
    { name: "Healthcare Dashboard", icon: HealthcareDashboardProject },
    { name: "SaaS Dashboard", icon: SaasDashboardProject },
    { name: "Food Delivery Application", icon: FoodDeliveryApplicationProject },
    { name: "Learning Management System UI", icon: LearningManagementSystemUiProject },
    { name: "Travel Booking Platform", icon: TravelBookingPlatformProject },
    { name: "Admin Panel Design", icon: AdminPanelDesignProject },
    { name: "CRM Dashboard", icon: CrmDashboardProject },
    { name: "Portfolio Website Design", icon: PortfolioWebsiteDesignProject },
  ],
  duration: "8–12 weeks",
  popular: false,
  highlights: [
    "Understand user needs through research, analysis, and a structured design thinking approach.",
    "Create wireframes, high-fidelity interfaces, and interactive prototypes for digital products.",
    "Apply usability, interaction, and visual design principles to build intuitive experiences.",
    "Design real-world, user-centric products that solve practical business and customer challenges.",

  ],
  impactPoints: [
    "Redesign a mobile app end-to-end",
    "Build a reusable component design system",
    "Run a full user journey and flow optimisation",
    "Present case studies to a live design critique",
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
      name: "Tanish Raj Sharma",
      domain: "UI UX Designer",
      description: "5+ years work Exp.",
      image : TanishRajSharmaImage,
      linkedin : "https://www.linkedin.com/in/tanish-raj-sharma"
    },
  ],
}
