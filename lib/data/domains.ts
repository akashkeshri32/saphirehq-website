import LinkedinIcon from "@/components/icons/linkedin";
import {
  BarChart3,
  Brain,
  Boxes,
  Bot,
  Palette,
  Globe,
  Server,
  Layers,
  FolderGit2,
  Award,
  Users,
  Video,
  FileText,
  MessageSquare,
  Zap,
  Building2,
  BookOpen,
} from "lucide-react";

/* ─── Domain tracks ─────────────────────────────────────────────────────── */

export const DOMAINS = [
  {
    id: "data-analyst",
    label: "Data Analyst",
    Icon: BarChart3,
    gradient: "from-[#1437FF] to-[#00b7ff]",
    glowColor: "rgba(20,55,255,0.12)",
    tagline: "Turn data into decisions",
    description:
      "Master the art of transforming raw data into actionable insights. You'll work with real business datasets, build interactive dashboards, and present findings the way analysts do at high-growth companies — not just learn the theory.",
    skills: ["SQL", "Python", "Power BI", "Tableau", "Excel", "Statistics"],
    projects: [
      "Sales performance dashboard",
      "Customer segmentation analysis",
      "KPI tracking & reporting system",
    ],
    duration: "8–12 weeks",
    popular: false,
  },
  {
    id: "business-analyst",
    label: "Business Analyst",
    Icon: Boxes,
    gradient: "from-[#6A2EFF] to-[#9A2DFF]",
    glowColor: "rgba(106,46,255,0.12)",
    tagline: "Bridge business and technology",
    description:
      "Learn to identify business challenges, gather requirements, and design solutions that align technical capabilities with strategic goals. Practice stakeholder communication, process mapping, and agile delivery on real scenarios.",
    skills: [
      "Requirements Analysis",
      "Agile",
      "Jira",
      "Process Mapping",
      "Power BI",
      "Excel",
    ],
    projects: [
      "Process optimisation case study",
      "Market opportunity analysis",
      "Product roadmap documentation",
    ],
    duration: "8–12 weeks",
    popular: false,
  },
  {
    id: "data-science",
    label: "Data Science",
    Icon: Brain,
    gradient: "from-[#00C9A7] to-[#00b7ff]",
    glowColor: "rgba(0,201,167,0.12)",
    tagline: "Extract knowledge from complexity",
    description:
      "Go beyond basic analysis and build predictive models that anticipate real outcomes. Combine statistical thinking with Python to uncover hidden patterns in complex datasets and communicate findings that shape business strategy.",
    skills: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NumPy",
      "ML Algorithms",
      "Statistics",
    ],
    projects: [
      "Predictive sales forecasting model",
      "NLP-based text classification",
      "End-to-end exploratory data analysis",
    ],
    duration: "12–16 weeks",
    popular: true,
  },
  {
    id: "ai-ml",
    label: "AI / ML Engineer",
    Icon: Bot,
    gradient: "from-[#FF6B35] to-[#FF9A3C]",
    glowColor: "rgba(255,107,53,0.12)",
    tagline: "Build the systems of tomorrow",
    description:
      "Dive into the technologies reshaping every industry. From neural networks to large language models, you'll build, train, and deploy intelligent systems that can see, understand, and reason — hands-on from the very first week.",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Deep Learning",
      "LLMs",
      "MLOps",
    ],
    projects: [
      "Image classification model",
      "Product recommendation engine",
      "Fine-tuned LLM assistant",
    ],
    duration: "12–16 weeks",
    popular: true,
  },
  {
    id: "ui-ux",
    label: "UI/UX Designer",
    Icon: Palette,
    gradient: "from-[#F857A6] to-[#FF5858]",
    glowColor: "rgba(248,87,166,0.12)",
    tagline: "Design experiences people love",
    description:
      "Learn the complete design process — from user research and low-fidelity wireframes to polished interactive prototypes. You'll design real interfaces, run usability sessions, and build a portfolio that stands out to top companies.",
    skills: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
    projects: [
      "Mobile app end-to-end redesign",
      "Component design system",
      "User journey & flow optimisation",
    ],
    duration: "8–12 weeks",
    popular: false,
  },
  {
    id: "frontend",
    label: "Frontend Developer",
    Icon: Globe,
    gradient: "from-[#1437FF] to-[#6A2EFF]",
    glowColor: "rgba(20,55,255,0.12)",
    tagline: "Build beautiful web interfaces",
    description:
      "Craft the interfaces users see and interact with every day. Build production-quality projects with modern frameworks, write clean maintainable code, and develop the eye for detail that separates great frontend engineers from good ones.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML & CSS",
    ],
    projects: [
      "Personal developer portfolio",
      "SaaS product dashboard UI",
      "E-commerce storefront",
    ],
    duration: "10–14 weeks",
    popular: false,
  },
  {
    id: "backend",
    label: "Backend Developer",
    Icon: Server,
    gradient: "from-[#4F46E5] to-[#1437FF]",
    glowColor: "rgba(79,70,229,0.12)",
    tagline: "Engineer the logic that matters",
    description:
      "Build the systems that power applications at scale. Design secure REST APIs, work with databases, implement authentication, and write backend code that's reliable, efficient, and truly production-ready.",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "REST APIs",
      "Auth & JWT",
      "Cloud (AWS)",
    ],
    projects: [
      "REST API with JWT authentication",
      "Relational database schema design",
      "Serverless microservice",
    ],
    duration: "10–14 weeks",
    popular: false,
  },
  {
    id: "full-stack",
    label: "Full Stack Developer",
    Icon: Layers,
    gradient: "from-[#9A2DFF] to-[#C9A6FF]",
    glowColor: "rgba(154,45,255,0.12)",
    tagline: "Build complete products end to end",
    description:
      "Master both frontend and backend to deliver complete, production-ready web applications from scratch. The most comprehensive track — ideal for building entire products independently or stepping into a tech lead role.",
    skills: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "REST APIs",
      "DevOps basics",
    ],
    projects: [
      "Full-stack SaaS application",
      "Real-time collaboration tool",
      "E-commerce platform with CMS",
    ],
    duration: "14–20 weeks",
    popular: true,
  },
] as const;

export type DomainData = (typeof DOMAINS)[number];

/* ─── Why SaphireIQ ─────────────────────────────────────────────────────── */

export const WHY_ITEMS = [
  {
    Icon: FolderGit2,
    gradient: "from-[#1437FF] to-[#6A2EFF]",
    title: "Real-World Projects",
    description:
      "Not tutorials or toy examples — actual industry projects with scope documents, deliverables, and client-style review sessions that build your portfolio from day one.",
  },
  {
    Icon: Users,
    gradient: "from-[#6A2EFF] to-[#9A2DFF]",
    title: "Expert Mentorship",
    description:
      "Weekly check-ins with experienced professionals in your domain who give actionable feedback, help you unblock, and share insights you won't find in any course.",
  },
  {
    Icon: Award,
    gradient: "from-[#9A2DFF] to-[#C9A6FF]",
    title: "Portfolio & Certification",
    description:
      "Graduate with a verified certificate and a portfolio of real, polished projects that you can confidently present to any recruiter or hiring manager.",
  },
] as const;

/* ─── 8-Step Career Accelerator ─────────────────────────────────────────── */

export const CAREER_ACCELERATOR_STEPS = [
  {
    step: 1,
    Icon: Video,
    title: "Live Mentor Guidance",
    description:
      "Learn directly from experienced industry professionals through interactive live sessions and expert guidance.",
  },
  {
    step: 2,
    Icon: BookOpen,
    title: "Industry-Relevant Projects",
    description:
      "Apply your knowledge by working on practical projects designed around real business challenges.",
  },
  {
    step: 3,
    Icon: FolderGit2,
    title: "Portfolio Development",
    description:
      "Build a strong project portfolio that showcases your practical skills and technical expertise.",
  },
  {
    step: 4,
    Icon: FileText,
    title: "ATS-Optimized Resume Building",
    description:
      "Create a professional resume optimized for Applicant Tracking Systems (ATS) to improve your chances of getting shortlisted.",
  },
  {
    step: 5,
    Icon: LinkedinIcon,
    title: "LinkedIn Profile Optimization",
    description:
      "Develop a recruiter-friendly LinkedIn profile that strengthens your professional presence and personal brand.",
  },
  {
    step: 6,
    Icon: MessageSquare,
    title: "Mock Interviews",
    description:
      "Prepare for technical and HR interviews through structured mock interview sessions with personalized feedback.",
  },
  {
    step: 7,
    Icon: Zap,
    title: "Career Readiness",
    description:
      "Enhance your communication, presentation, and professional skills to confidently enter the job market.",
  },
  {
    step: 8,
    Icon: Building2,
    title: "Placement Assistance",
    description:
      "Receive placement assistance through our network of 500+ collaborated companies to help you explore relevant career opportunities.",
  },
] as const;
