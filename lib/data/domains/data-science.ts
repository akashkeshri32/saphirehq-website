import SunIcon from "@/assets/icons/sun.svg";
import PythonIcon from "@/assets/tools-icons/python.png";
import PandasIcon from "@/assets/tools-icons/pandas.svg";
import ScikitLearnIcon from "@/assets/tools-icons/scikit-learn.svg";
import NumpyIcon from "@/assets/tools-icons/numpy.svg";


export const dataScience = {
  id: "data-science",
  label: "Data Science",
  Icon: SunIcon,
  heroPillText: "Most in-demand domain",

  glowColor: "rgba(0,201,167,0.12)",
  tagline: "Master data analysis by working with real datasets, dashboards, and business challenges.",
  description:
    "Go beyond basic analysis and build predictive models that anticipate real outcomes. Combine statistical thinking with Python to uncover hidden patterns in complex datasets and communicate findings that shape business strategy.",
  tools: [
    { name: "Python", icon: PythonIcon },
    { name: "Pandas", icon: PandasIcon },
    { name: "Scikit-learn", icon: ScikitLearnIcon },
    { name: "NumPy", icon: NumpyIcon },
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
    { stat: "100+", text: "Real Projects" },
    { stat: "99%", text: "Completion Rate" },
    { stat: "30+", text: "Skilled Mentors" },
  ],
  instructors: [
    {
      name: "Dr. Kavya Menon",
      domain: "Data Science",
      description:
        "Applied ML researcher who has shipped models to production at scale.",
      linkedin: ""
    },
    {
      name: "Aditya Rao",
      domain: "Data Science",
      description: "Data scientist with 6+ years across fintech and healthtech.",
      linkedin: ""
    },
  ],
}