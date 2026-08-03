import BackendIcon from "@/assets/icons/backend.svg";
import NodejsIcon from "@/assets/tools-icons/nodejs.png";
import PythonIcon from "@/assets/tools-icons/python.png";
import RestApiIcon from "@/assets/tools-icons/rest-api-icon.webp";
import JwtIcon from "@/assets/tools-icons/jwt.png";
import AwsIcon from "@/assets/tools-icons/aws.svg";


export const backend = {
  id: "backend",
  label: "Backend Development",
  heroPillText: "Most in-demand domain",

  Icon: BackendIcon,
  tagline: "Architect the servers, APIs, and databases that power real products at scale.",
  description:
    "Build the systems that power applications at scale. Design secure REST APIs, work with databases, implement authentication, and write backend code that's reliable, efficient, and truly production-ready.",
  tools: [
    { name: "Node.js", icon: NodejsIcon },
    { name: "Python", icon: PythonIcon },
    { name: "PostgreSQL", icon: null },
    { name: "REST APIs", icon: RestApiIcon },
    { name: "Auth & JWT", icon: JwtIcon },
    { name: "Cloud (AWS)", icon: AwsIcon },
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
    { stat: "100+", text: "Real Projects" },

    { stat: "99%", text: "Completion Rate" },
    { stat: "30+", text: "Skilled Mentors" },
  ],
  instructors: [
    {
      name: "Karthik Subramaniam",
      domain: "Backend Development",
      description: "Backend architect with 8+ years building systems at scale.",
      linkedin: ""
    },
    {
      name: "Neha Bansal",
      domain: "Backend Development",
      description: "API and cloud infrastructure specialist across fintech platforms.",
      linkedin: ""
    },
  ],
}