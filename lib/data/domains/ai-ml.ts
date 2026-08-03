import DashboardIcon from "@/assets/icons/dashboard.svg";
import PythonIcon from "@/assets/tools-icons/python.png";
import TensorFlowIcon from "@/assets/tools-icons/TensorFlow.png";
import PyTorchIcon from "@/assets/tools-icons/PyTorch.png";


export const aiMl = {
  id: "ai-ml",
  label: "AI / ML",
  Icon: DashboardIcon,
  glowColor: "rgba(255,107,53,0.12)",
  heroPillText: "Most in-demand domain",

  tagline: "Build and train models that solve real problems, from prototype to deployment.",
  description:
    "Dive into the technologies reshaping every industry. From neural networks to large language models, you'll build, train, and deploy intelligent systems that can see, understand, and reason — hands-on from the very first week.",
  tools: [
    { name: "Python", icon: PythonIcon },
    { name: "TensorFlow", icon: TensorFlowIcon },
    { name: "PyTorch", icon: PyTorchIcon },
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
    { stat: "100+", text: "Real Projects" },

    { stat: "99%", text: "Completion Rate" },
    { stat: "30+", text: "Skilled Mentors" },
  ],
  instructors: [
    {
      name: "Rohan Kulkarni",
      domain: "AI / ML",
      description: "ML engineer building LLM-powered products in production today.",
      linkedin: ""
    },
    {
      name: "Sneha Kapoor",
      domain: "AI / ML",
      description:
        "Deep learning specialist with 5+ years shipping computer vision systems.",
      linkedin: ""
    },
  ],
}