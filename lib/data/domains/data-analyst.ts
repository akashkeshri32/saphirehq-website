import GraphIcon from "@/assets/icons/graph-purple.svg";
import MySqlIcon from "@/assets/tools-icons/MySQL.svg";
import ExcelIcon from "@/assets/tools-icons/excel.svg";
import PowerBiIcon from "@/assets/tools-icons/power-bi.svg";
import GoogleSheetsIcon from "@/assets/tools-icons/google-sheets.png"
import TableauIcon from "@/assets/tools-icons/tableau.svg";
import PythonIcon from "@/assets/tools-icons/python.png";
import PandasIcon from "@/assets/tools-icons/pandas.svg";
import StatisticsIcon from "@/assets/tools-icons/statistics.png";
import DataVisualisationIcon from "@/assets/tools-icons/data-visualisation.png";
import BusinessReportingIcon from "@/assets/tools-icons/business-reporting.png";
import AshishRajputImage from "@/assets/images/instructors/ashish-rajput.png";

import HrAnalyticsDashboardProject from "@/assets/images/projects/data-analyst/hr analytics dashboard.png";
import CustomerChurnAnalysisProject from "@/assets/images/projects/data-analyst/customer churn analysis.png";
import SalesPerformanceDashboardProject from "@/assets/images/projects/data-analyst/sales performance dashboard.png";
import MarketingCampaignAnalysisProject from "@/assets/images/projects/data-analyst/marketing campaign analysis.png";
import FinancialKpiDashboardProject from "@/assets/images/projects/data-analyst/financial kpi dashboard.png";
import EmployeeAttritionDashboardProject from "@/assets/images/projects/data-analyst/employee attrition dashboard.png";
import RetailBusinessAnalyticsProject from "@/assets/images/projects/data-analyst/retail business analytics.png";
import HospitalAnalyticsDashboardProject from "@/assets/images/projects/data-analyst/hospital analytics dashboard.png";
import SupplyChainAnalyticsProject from "@/assets/images/projects/data-analyst/supply chain analytics.png";
import ProductPerformanceReportProject from "@/assets/images/projects/data-analyst/product performance report.png";


export const dataAnalyst = {
  id: "data-analyst",
  label: "Data Analyst",
  heroPillText: "Most in-demand domain",

  Icon: GraphIcon,
  tagline: "Transform Raw Data into Actionable Business Intelligence.",
  description:
    "Explore, clean, and visualize data to uncover the story behind the numbers.",
  tools: [
    { name: "Microsoft Excel", icon: ExcelIcon },
    { name: "SQL", icon: MySqlIcon },
    { name: "Power BI", icon: PowerBiIcon },
    { name: "Tableau", icon: TableauIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Pandas", icon: PandasIcon },
    { name: "Google Sheets", icon: GoogleSheetsIcon },
    { name: "Statistics", icon: StatisticsIcon },
    { name: "Data Visualization", icon: DataVisualisationIcon },
    { name: "Business Reporting", icon: BusinessReportingIcon },
  ],
  projects: [
    { name: "HR Analytics Dashboard", icon: HrAnalyticsDashboardProject },
    { name: "Customer Churn Analysis", icon: CustomerChurnAnalysisProject },
    { name: "Sales Performance Dashboard", icon: SalesPerformanceDashboardProject },
    { name: "Marketing Campaign Analysis", icon: MarketingCampaignAnalysisProject },
    { name: "Financial KPI Dashboard", icon: FinancialKpiDashboardProject },
    { name: "Employee Attrition Dashboard", icon: EmployeeAttritionDashboardProject },
    { name: "Retail Business Analytics", icon: RetailBusinessAnalyticsProject },
    { name: "Hospital Analytics Dashboard", icon: HospitalAnalyticsDashboardProject },
    { name: "Supply Chain Analytics", icon: SupplyChainAnalyticsProject },
    { name: "Product Performance Report", icon: ProductPerformanceReportProject },
  ],

  duration: "8–12 weeks",
  popular: false,
  highlights: [
    "Collect, clean, and analyze real-world business data effectively.",
    "Build interactive dashboards using leading business intelligence tools.",
    "Identify trends to support strategic business decision-making.",
    "Present actionable insights through portfolio-ready analytics projects.",
  ],
  impactPoints: [
    "Ship a sales performance dashboard end-to-end",
    "Run a full customer segmentation analysis",
    "Build a live KPI tracking & reporting system",
    "Present insights to a real mentor review panel",
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
