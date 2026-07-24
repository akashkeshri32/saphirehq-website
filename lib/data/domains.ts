import LinkedinIcon from "@/components/icons/linkedin";

import BarGraphIcon from "@/assets/icons/bar-graph.svg";
import GraphIcon from "@/assets/icons/graph-purple.svg";
import SunIcon from "@/assets/icons/sun.svg";
import DashboardIcon from "@/assets/icons/dashboard.svg";
import PasteIcon from "@/assets/icons/paste-purple.svg";
import CodeIcon from "@/assets/icons/code.svg";
import BackendIcon from "@/assets/icons/backend.svg";
import FullstackIcon from "@/assets/icons/fullstack.svg";





/* ─── Domain tracks ─────────────────────────────────────────────────────── */

export const DOMAINS = [
    {
    id: "business-analyst",
    label: "Business Analyst",
    Icon: BarGraphIcon,
    heroPillText : "Most in-demand domain",
    tagline: "Turn business problems into data-backed decisions and strategy.",
    description:
      "Turn business problems into data-backed decisions and strategy.",
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
      { stat: "99%", text: "Completion Rate" },
      { stat: "30+", text: "Skilled Mentors" },
    ],
    instructors: [
      {
        name: "Meera Shah",
        domain: "Business Analyst",
        description:
          "9+ years translating business requirements into shipped product decisions.",
      },
      {
        name: "Rahul Deshmukh",
        domain: "Business Analyst",
        description:
          "Agile delivery lead who has run 50+ stakeholder-facing projects.",
      },
    ],
  },

  {
    id: "data-analyst",
    label: "Data Analyst",
    heroPillText : "Most in-demand domain",
    
    Icon: GraphIcon,
    tagline: "Explore, clean, and visualize data to uncover the story behind the numbers.",
    description:
      "Explore, clean, and visualize data to uncover the story behind the numbers.",
    skills: ["SQL", "Python", "Power BI", "Tableau", "Excel", "Statistics"],
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
      { stat: "99%", text: "Completion Rate" },
      { stat: "30+", text: "Skilled Mentors" },
    ],
    instructors: [
      {
        name: "Ananya Iyer",
        domain: "Data Analyst",
        description:
          "Ex-analytics lead who has built reporting systems for 3 unicorn startups.",
      },
      {
        name: "Vivek Nair",
        domain: "Data Analyst",
        description: "SQL and BI specialist with 7+ years in retail analytics.",
      },
    ],
  },

  {
    id: "data-science",
    label: "Data Science",
    Icon: SunIcon,
    heroPillText : "Most in-demand domain",

    glowColor: "rgba(0,201,167,0.12)",
    tagline: "Master data analysis by working with real datasets, dashboards, and business challenges.",
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
    highlights: [
      "Go beyond theory into applied statistical modeling",
      "Work with real, messy, business-scale datasets",
      "Learn the exact ML workflow used in industry",
      "Build models you can explain in an interview",
    ],
    impactPoints: [
      "Build a predictive sales forecasting model",
      "Ship an NLP-based text classification system",
      "Run a full exploratory data analysis end-to-end",
      "Defend your model choices to a mentor panel",
    ],
     careerStats: [
      { stat: "250+", text: "Hiring Partners" },
      { stat: "1000+", text: "Students Trained" },
      { stat: "99%", text: "Completion Rate" },
      { stat: "30+", text: "Skilled Mentors" },
    ],
    instructors: [
      {
        name: "Dr. Kavya Menon",
        domain: "Data Science",
        description:
          "Applied ML researcher who has shipped models to production at scale.",
      },
      {
        name: "Aditya Rao",
        domain: "Data Science",
        description: "Data scientist with 6+ years across fintech and healthtech.",
      },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    Icon: DashboardIcon,
    glowColor: "rgba(255,107,53,0.12)",
    heroPillText : "Most in-demand domain",

    tagline: "Turn Data into Insights.",
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
    highlights: [
      "Build with the same tools shaping every industry today",
      "Go from neural network theory to deployed systems",
      "Work hands-on with LLMs, not just slides about them",
      "Ship a project recruiters will actually ask about",
    ],
    impactPoints: [
      "Train an image classification model from scratch",
      "Build a product recommendation engine",
      "Fine-tune and deploy an LLM assistant",
      "Document your MLOps pipeline like a production team",
    ],
    careerStats: [
      { stat: "250+", text: "Hiring Partners" },
      { stat: "1000+", text: "Students Trained" },
      { stat: "99%", text: "Completion Rate" },
      { stat: "30+", text: "Skilled Mentors" },
    ],
    instructors: [
      {
        name: "Rohan Kulkarni",
        domain: "AI / ML",
        description: "ML engineer building LLM-powered products in production today.",
      },
      {
        name: "Sneha Kapoor",
        domain: "AI / ML",
        description:
          "Deep learning specialist with 5+ years shipping computer vision systems.",
      },
    ],
  },
  {
    id: "ui-ux",
    label: "UI/UX",
    Icon: PasteIcon,
    heroPillText : "Most in-demand domain",

    tagline: "Design digital products people love — from research to pixel-perfect execution.",
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
    highlights: [
      "Learn the full design process, not just Figma shortcuts",
      "Run real usability sessions with real users",
      "Design systems used by actual product teams",
      "Build a case-study portfolio that gets callbacks",
    ],
    impactPoints: [
      "Redesign a mobile app end-to-end",
      "Build a reusable component design system",
      "Run a full user journey and flow optimisation",
      "Present case studies to a live design critique",
    ],
    careerStats: [
      { stat: "250+", text: "Hiring Partners" },
      { stat: "1000+", text: "Students Trained" },
      { stat: "99%", text: "Completion Rate" },
      { stat: "30+", text: "Skilled Mentors" },
    ],
    instructors: [
      {
        name: "Priya Nair",
        domain: "UI/UX",
        description: "Lead product designer with a decade of experience across startups.",
      },
      {
        name: "Farah Sheikh",
        domain: "UI/UX",
        description:
          "Design systems specialist who has scaled UI libraries for 3 product teams.",
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend Developer",
    heroPillText : "Most in-demand domain",

    Icon: CodeIcon,
    tagline: "Build fast, accessible interfaces with modern frameworks and real design systems.",
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
      { stat: "99%", text: "Completion Rate" },
      { stat: "30+", text: "Skilled Mentors" },
    ],
    instructors: [
      {
        name: "Arjun Mehta",
        domain: "Frontend Developer",
        description: "Senior engineer who has shipped production apps used by millions.",
      },
      {
        name: "Ishaan Bhatt",
        domain: "Frontend Developer",
        description:
          "React specialist with 6+ years building design-system-driven products.",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend Development",
    heroPillText : "Most in-demand domain",

    Icon: BackendIcon,
    tagline: "Architect the servers, APIs, and databases that power real products at scale.",
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
    highlights: [
      "Design systems that hold up under real traffic",
      "Learn auth, databases, and APIs the production way",
      "Get your architecture reviewed by working engineers",
      "Ship backend code ready for a real deployment",
    ],
    impactPoints: [
      "Build a REST API with JWT authentication",
      "Design a relational database schema from scratch",
      "Ship a serverless microservice end-to-end",
      "Get your architecture reviewed by a mentor",
    ],
    careerStats: [
      { stat: "250+", text: "Hiring Partners" },
      { stat: "1000+", text: "Students Trained" },
      { stat: "99%", text: "Completion Rate" },
      { stat: "30+", text: "Skilled Mentors" },
    ],
    instructors: [
      {
        name: "Karthik Subramaniam",
        domain: "Backend Development",
        description: "Backend architect with 8+ years building systems at scale.",
      },
      {
        name: "Neha Bansal",
        domain: "Backend Development",
        description: "API and cloud infrastructure specialist across fintech platforms.",
      },
    ],
  },
  {
    id: "full-stack",
    label: "Full Stack Development",
    Icon: FullstackIcon,
    heroPillText : "Most in-demand domain",

    tagline: "Ship complete products end-to-end, from database to deployed interface.",
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
      { stat: "99%", text: "Completion Rate" },
      { stat: "30+", text: "Skilled Mentors" },
    ],
    instructors: [
      {
        name: "Aakash Verma",
        domain: "Full Stack Development",
        description: "Full-stack lead who has taken 4 products from zero to production.",
      },
      {
        name: "Ritika Chawla",
        domain: "Full Stack Development",
        description: "Full-stack engineer with 7+ years across startups and scale-ups.",
      },
    ],
  },
] as const;

export type DomainData = (typeof DOMAINS)[number];

/* ─── Why SaphireIQ ─────────────────────────────────────────────────────── */

// export const WHY_ITEMS = [
//   {
//     Icon: FolderGit2,
//     gradient: "from-[#1437FF] to-[#6A2EFF]",
//     title: "Real-World Projects",
//     description:
//       "Not tutorials or toy examples — actual industry projects with scope documents, deliverables, and client-style review sessions that build your portfolio from day one.",
//   },
//   {
//     Icon: Users,
//     gradient: "from-[#6A2EFF] to-[#9A2DFF]",
//     title: "Expert Mentorship",
//     description:
//       "Weekly check-ins with experienced professionals in your domain who give actionable feedback, help you unblock, and share insights you won't find in any course.",
//   },
//   {
//     Icon: Award,
//     gradient: "from-[#9A2DFF] to-[#C9A6FF]",
//     title: "Portfolio & Certification",
//     description:
//       "Graduate with a verified certificate and a portfolio of real, polished projects that you can confidently present to any recruiter or hiring manager.",
//   },
// ] as const;

// /* ─── 8-Step Career Accelerator ─────────────────────────────────────────── */

// export const CAREER_ACCELERATOR_STEPS = [
//   {
//     step: 1,
//     Icon: Video,
//     title: "Live Mentor Guidance",
//     description:
//       "Learn directly from experienced industry professionals through interactive live sessions and expert guidance.",
//   },
//   {
//     step: 2,
//     Icon: BookOpen,
//     title: "Industry-Relevant Projects",
//     description:
//       "Apply your knowledge by working on practical projects designed around real business challenges.",
//   },
//   {
//     step: 3,
//     Icon: FolderGit2,
//     title: "Portfolio Development",
//     description:
//       "Build a strong project portfolio that showcases your practical skills and technical expertise.",
//   },
//   {
//     step: 4,
//     Icon: FileText,
//     title: "ATS-Optimized Resume Building",
//     description:
//       "Create a professional resume optimized for Applicant Tracking Systems (ATS) to improve your chances of getting shortlisted.",
//   },
//   {
//     step: 5,
//     Icon: LinkedinIcon,
//     title: "LinkedIn Profile Optimization",
//     description:
//       "Develop a recruiter-friendly LinkedIn profile that strengthens your professional presence and personal brand.",
//   },
//   {
//     step: 6,
//     Icon: MessageSquare,
//     title: "Mock Interviews",
//     description:
//       "Prepare for technical and HR interviews through structured mock interview sessions with personalized feedback.",
//   },
//   {
//     step: 7,
//     Icon: Zap,
//     title: "Career Readiness",
//     description:
//       "Enhance your communication, presentation, and professional skills to confidently enter the job market.",
//   },
//   {
//     step: 8,
//     Icon: Building2,
//     title: "Placement Assistance",
//     description:
//       "Receive placement assistance through our network of 500+ collaborated companies to help you explore relevant career opportunities.",
//   },
// ] as const;
