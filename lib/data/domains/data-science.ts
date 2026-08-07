import SunIcon from "@/assets/icons/sun.svg";
import MySqlIcon from "@/assets/tools-icons/MySQL.svg";
import PythonIcon from "@/assets/tools-icons/python.png";
import PandasIcon from "@/assets/tools-icons/pandas.svg";
import ScikitLearnIcon from "@/assets/tools-icons/scikit-learn.svg";
import NumpyIcon from "@/assets/tools-icons/numpy.svg";
import MatplotlibIcon from "@/assets/tools-icons/Matplotlib.svg";
import SeabornIcon from "@/assets/tools-icons/Seaborn.svg";
import JupyterIcon from "@/assets/tools-icons/Jupyter.svg";
import PowerBiIcon from "@/assets/tools-icons/power-bi.svg";
import TableauIcon from "@/assets/tools-icons/tableau.svg";
import AshishRajputImage from "@/assets/images/instructors/ashish-rajput.png";

import CustomerSegmentationProject from "@/assets/images/projects/data-science/Customer segmentation analysis.png";
import StockPricePredictionProject from "@/assets/images/projects/data-science/stock price prediction.png";
import CreditRiskAnalysisProject from "@/assets/images/projects/data-science/credit risk analysis.png";
import HrAttritionPredictionProject from "@/assets/images/projects/data-science/hr attrition prediction.png";
import HousePricePredictionProject from "@/assets/images/projects/data-science/house price prediction.png";
import LoanApprovalPredictionProject from "@/assets/images/projects/data-science/loan approval prediction.png";
import IplDataAnalyticsDashboardProject from "@/assets/images/projects/data-science/ipl data analytics dashboard.png";
import EcommerceSalesDashboardProject from "@/assets/images/projects/data-science/ecommerce sales dashboard.png";
import HealthcareAnalyticsDashboardProject from "@/assets/images/projects/data-science/healthcare analytics dashboard.png";


export const dataScience = {
  id: "data-science",
  label: "Data Science",
  Icon: SunIcon,
  heroPillText: "Most in-demand domain",

  glowColor: "rgba(0,201,167,0.12)",
  tagline: "Turn Data into Insights. Build Solutions That Drive Business Decisions.",
  description:
    "Go beyond basic analysis and build predictive models that anticipate real outcomes. Combine statistical thinking with Python to uncover hidden patterns in complex datasets and communicate findings that shape business strategy.",
  tools: [
    { name: "Python", icon: PythonIcon },
    { name: "SQL", icon: MySqlIcon },
    { name: "Pandas", icon: PandasIcon },
    { name: "NumPy", icon: NumpyIcon },
    { name: "Matplotlib", icon: MatplotlibIcon },
    { name: "Seaborn", icon: SeabornIcon },
    { name: "Scikit-learn", icon: ScikitLearnIcon },
    { name: "Jupyter Notebook", icon: JupyterIcon },
    { name: "Power BI", icon: PowerBiIcon },
    { name: "Tableau", icon: TableauIcon },
  ],
  projects: [
    { name: "Customer Segmentation Analysis", icon: CustomerSegmentationProject },
    { name: "Stock Price Prediction", icon: StockPricePredictionProject },
    { name: "Credit Risk Analysis", icon: CreditRiskAnalysisProject },
    { name: "HR Attrition Prediction", icon: HrAttritionPredictionProject },
    { name: "House Price Prediction", icon: HousePricePredictionProject },
    { name: "Loan Approval Prediction", icon: LoanApprovalPredictionProject },
    { name: "IPL Data Analytics Dashboard", icon: IplDataAnalyticsDashboardProject },
    { name: "E-commerce Sales Dashboard", icon: EcommerceSalesDashboardProject },
    { name: "Healthcare Analytics Dashboard", icon: HealthcareAnalyticsDashboardProject },
  ],
  duration: "12–16 weeks",
  popular: true,
  highlights: [
    "Analyze real-world datasets to uncover meaningful business insights.",
    "Build predictive models using practical data science techniques.",
    "Create interactive dashboards for data-driven business decisions.",
    "Develop a professional portfolio through industry-relevant projects.",

  ],
  impactPoints: [
    "Build a predictive sales forecasting model",
    "Ship an NLP-based text classification system",
    "Run a full exploratory data analysis end-to-end",
    "Defend your model choices to a mentor panel",
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
