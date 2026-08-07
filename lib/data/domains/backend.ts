import BackendIcon from "@/assets/icons/backend.svg";
import NodejsIcon from "@/assets/tools-icons/nodejs.png";
import ExpressJsIcon from "@/assets/tools-icons/Express JS.svg";
import JavaIcon from "@/assets/tools-icons/Java.svg";
import SpringBootIcon from "@/assets/tools-icons/Spring Boot.svg";
import FastApiIcon from "@/assets/tools-icons/FastAPI.svg";
import MongoDbIcon from "@/assets/tools-icons/MongoDB.svg";
import MySqlIcon from "@/assets/tools-icons/MySQL.svg";
import PostgresIcon from "@/assets/tools-icons/PostgresSQL.svg";
import RestApiIcon from "@/assets/tools-icons/rest-api-icon.webp";
import JwtIcon from "@/assets/tools-icons/jwt.png";
import RitikSinghImage from "@/assets/images/instructors/ritik-singh.png";

import AuthenticationSystemProject from "@/assets/images/projects/backend/authentication system.png";
import PaymentGatewayIntegrationProject from "@/assets/images/projects/backend/payment gateway system.png";
import StudentManagementApiProject from "@/assets/images/projects/backend/student management api.png";
import CrmBackendProject from "@/assets/images/projects/backend/crm backend.png";
import HospitalManagementBackendProject from "@/assets/images/projects/backend/hospital management backend.png";
import LmsBackendProject from "@/assets/images/projects/backend/lms backend.png";
import BankingApiProject from "@/assets/images/projects/backend/backend api.png";
import UrlShortenerApiProject from "@/assets/images/projects/backend/url shortener api.png";
import InventoryManagementSystemProject from "@/assets/images/projects/backend/inventory management system.png";
import EcommerceBackendProject from "@/assets/images/projects/backend/ecommerce backend.png";


export const backend = {
  id: "backend",
  label: "Backend Development",
  heroPillText: "Most in-demand domain",

  Icon: BackendIcon,
  tagline: "Build Secure, Scalable & High-Performance Server Applications.",
  description:
    "Build the systems that power applications at scale. Design secure REST APIs, work with databases, implement authentication, and write backend code that's reliable, efficient, and truly production-ready.",
  tools: [
    { name: "Node.js", icon: NodejsIcon },
    { name: "Express.js", icon: ExpressJsIcon },
    { name: "Java", icon: JavaIcon },
    { name: "Spring Boot", icon: SpringBootIcon },
    { name: "Python (FastAPI)", icon: FastApiIcon },
    { name: "MongoDB", icon: MongoDbIcon },
    { name: "MySQL", icon: MySqlIcon },
    { name: "PostgreSQL", icon: PostgresIcon },
    { name: "REST APIs", icon: RestApiIcon },
    { name: "JWT Authentication", icon: JwtIcon },
  ],
  projects: [
    { name: "Authentication System", icon: AuthenticationSystemProject },
    { name: "Payment Gateway Integration", icon: PaymentGatewayIntegrationProject },
    { name: "Student Management API", icon: StudentManagementApiProject },
    { name: "CRM Backend", icon: CrmBackendProject },
    { name: "Hospital Management Backend", icon: HospitalManagementBackendProject },
    { name: "LMS Backend", icon: LmsBackendProject },
    { name: "Banking API", icon: BankingApiProject },
    { name: "URL Shortener API", icon: UrlShortenerApiProject },
    { name: "Inventory Management System", icon: InventoryManagementSystemProject },
    { name: "E-commerce Backend", icon: EcommerceBackendProject },
  ],
  duration: "10–14 weeks",
  popular: false,
  highlights: [
   "Build secure, scalable, and high-performance backend applications.",
   "Develop REST APIs, databases, and authentication systems.",
   "Learn how modern applications manage data and business logic.",
   "Build a career-ready portfolio through real-world backend projects.",
  ],
  impactPoints: [
    "Build a REST API with JWT authentication",
    "Design a relational database schema from scratch",
    "Ship a serverless microservice end-to-end",
    "Get your architecture reviewed by a mentor",
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
