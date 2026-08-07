import BarGraphIcon from "@/assets/icons/bar-graph.svg";
import JiraIcon from "@/assets/tools-icons/Jira.svg";
import ConfluenceIcon from "@/assets/tools-icons/Confluence.svg";
import MicrosoftVisioIcon from "@/assets/tools-icons/microsoft-visio.svg";
import LucidchartIcon from "@/assets/tools-icons/lucide-chart.svg";
import ExcelIcon from "@/assets/tools-icons/excel.svg";
import PowerBiIcon from "@/assets/tools-icons/power-bi.svg";
import TableauIcon from "@/assets/tools-icons/tableau.svg";
import BpmnIcon from "@/assets/tools-icons/bmpn.svg";
import AgileScrumIcon from "@/assets/tools-icons/agile-scrum.png";
import MySqlIcon from "@/assets/tools-icons/MySQL.svg"
import AshishRajputImage from "@/assets/images/instructors/ashish-rajput.png";

import BusinessRequirementDocumentProject from "@/assets/images/projects/business-analyst/Business Requirement Document (BRD).png";
import RequirementGatheringCaseStudyProject from "@/assets/images/projects/business-analyst/Requirement Gathering Case Study.png";
import FunctionalRequirementDocumentProject from "@/assets/images/projects/business-analyst/Functional Requirement Document (FRD).png";
import ProcessFlowMappingProject from "@/assets/images/projects/business-analyst/Process Flow Mapping.png";
import StakeholderAnalysisProject from "@/assets/images/projects/business-analyst/Stakeholder Analysis.png";
import GapAnalysisReportProject from "@/assets/images/projects/business-analyst/Gap Analysis Report.png";
import AgileSprintPlanningProject from "@/assets/images/projects/business-analyst/Agile Spring Planning.png";
import CrmBusinessCaseStudyProject from "@/assets/images/projects/business-analyst/CRM Business Case Study.png";
import KpiDashboardDesignProject from "@/assets/images/projects/business-analyst/KIP Dashboard Design.png";
import BusinessProcessOptimizationProject from "@/assets/images/projects/business-analyst/Business Process Optimization.png";


export const businessAnalyst = {
  id: "business-analyst",
  label: "Business Analyst",
  Icon: BarGraphIcon,
  heroPillText: "Most in-demand domain",
  tagline: "Bridge Business Goals with Technology Through Smart Analysis.",
  description:
    "Turn business problems into data-backed decisions and strategy.",
  tools: [
    { name: "Jira", icon: JiraIcon },
    { name: "Confluence", icon: ConfluenceIcon },
    { name: "Microsoft Visio", icon: MicrosoftVisioIcon },
    { name: "Lucidchart", icon: LucidchartIcon },
    { name: "Microsoft Excel", icon: ExcelIcon },
    { name: "SQL", icon: MySqlIcon },
    { name: "Power BI", icon: PowerBiIcon },
    { name: "Tableau", icon: TableauIcon },
    { name: "BPMN", icon: BpmnIcon },
    { name: "Agile & Scrum", icon: AgileScrumIcon },
  ],
  projects: [
    { name: "Business Requirement Document (BRD)", icon: BusinessRequirementDocumentProject },
    { name: "Requirement Gathering Case Study", icon: RequirementGatheringCaseStudyProject },
    { name: "Functional Requirement Document (FRD)", icon: FunctionalRequirementDocumentProject },
    { name: "Process Flow Mapping", icon: ProcessFlowMappingProject },
    { name: "Stakeholder Analysis", icon: StakeholderAnalysisProject },
    { name: "Gap Analysis Report", icon: GapAnalysisReportProject },
    { name: "Agile Sprint Planning", icon: AgileSprintPlanningProject },
    { name: "CRM Business Case Study", icon: CrmBusinessCaseStudyProject },
    { name: "KPI Dashboard Design", icon: KpiDashboardDesignProject },
    { name: "Business Process Optimization", icon: BusinessProcessOptimizationProject },
  ],
  duration: "8–12 weeks",
  popular: false,
  highlights: [
    "Understand business needs and translate them into effective solutions.",
    "Gather, analyze, and document business requirements professionally.",
    "Optimize business processes using Agile methodologies and industry tools.",
    "Gain hands-on experience through real-world business case studies.",
  ],
  impactPoints: [
    "Lead a real process-optimisation case study",
    "Present findings to a live stakeholder panel",
    "Build a market opportunity analysis from scratch",
    "Ship a product roadmap ready for leadership review",
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
      name: "Ashish Rajput",
      domain: "Data Science / Data Analyst / AI-ML / Business Analyst",
      description: "8+ Years work Exp.",
      image : AshishRajputImage,
      linkedin : "https://www.linkedin.com/in/ashish-rajput-8b26a31b2",
    },
  ],
}
