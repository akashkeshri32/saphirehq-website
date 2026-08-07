import DashboardIcon from "@/assets/icons/dashboard.svg";
import PythonIcon from "@/assets/tools-icons/python.png";
import NumpyIcon from "@/assets/tools-icons/numpy.svg";
import PandasIcon from "@/assets/tools-icons/pandas.svg";
import ScikitLearnIcon from "@/assets/tools-icons/scikit-learn.svg";
import TensorFlowIcon from "@/assets/tools-icons/TensorFlow.png";
import KerasIcon from "@/assets/tools-icons/Keras.svg";
import PyTorchIcon from "@/assets/tools-icons/PyTorch.png";
import OpenCvIcon from "@/assets/tools-icons/OpenCV.svg";
import HuggingFaceIcon from "@/assets/tools-icons/hugging-face.png";
import LangChainIcon from "@/assets/tools-icons/langchain.svg";
import AshishRajputImage from "@/assets/images/instructors/ashish-rajput.png";

import AiResumeScreeningProject from "@/assets/images/projects/ai-ml/ai resume screening system.png";
import ChatgptLikeAiAssistantProject from "@/assets/images/projects/ai-ml/chatgpt-like ai assistant.png";
import FaceRecognitionSystemProject from "@/assets/images/projects/ai-ml/face recognition system.png";
import ObjectDetectionModelProject from "@/assets/images/projects/ai-ml/object detection model.png";
import SentimentAnalysisToolProject from "@/assets/images/projects/ai-ml/sentiment analysis tool.png";
import FakeNewsDetectionProject from "@/assets/images/projects/ai-ml/fake news detection.png";
import DiseasePredictionSystemProject from "@/assets/images/projects/ai-ml/disease prediction system.png";
import ImageClassificationProject from "@/assets/images/projects/ai-ml/image classification.png";
import ProductRecommendationEngineProject from "@/assets/images/projects/ai-ml/product recommendation engine.png";
import AiInterviewAssistantProject from "@/assets/images/projects/ai-ml/ai interview assistant.png";


export const aiMl = {
  id: "ai-ml",
  label: "AI / ML",
  Icon: DashboardIcon,
  glowColor: "rgba(255,107,53,0.12)",
  heroPillText: "Most in-demand domain",

  tagline: "Build Intelligent Systems That Learn, Predict & Automate.",
  description:
    "Dive into the technologies reshaping every industry. From neural networks to large language models, you'll build, train, and deploy intelligent systems that can see, understand, and reason — hands-on from the very first week.",
  tools: [
    { name: "Python", icon: PythonIcon },
    { name: "NumPy", icon: NumpyIcon },
    { name: "Pandas", icon: PandasIcon },
    { name: "Scikit-learn", icon: ScikitLearnIcon },
    { name: "TensorFlow", icon: TensorFlowIcon },
    { name: "Keras", icon: KerasIcon },
    { name: "PyTorch", icon: PyTorchIcon },
    { name: "OpenCV", icon: OpenCvIcon },
    { name: "Hugging Face", icon: HuggingFaceIcon },
    { name: "LangChain", icon: LangChainIcon },
  ],
  projects: [
    { name: "AI Resume Screening System", icon: AiResumeScreeningProject },
    { name: "ChatGPT-like AI Assistant", icon: ChatgptLikeAiAssistantProject },
    { name: "Face Recognition System", icon: FaceRecognitionSystemProject },
    { name: "Object Detection Model", icon: ObjectDetectionModelProject },
    { name: "Sentiment Analysis Tool", icon: SentimentAnalysisToolProject },
    { name: "Fake News Detection", icon: FakeNewsDetectionProject },
    { name: "Disease Prediction System", icon: DiseasePredictionSystemProject },
    { name: "Image Classification", icon: ImageClassificationProject },
    { name: "Product Recommendation Engine", icon: ProductRecommendationEngineProject },
    { name: "AI Interview Assistant", icon: AiInterviewAssistantProject },
  ],
  duration: "12–16 weeks",
  popular: true,
  highlights: [
    "Build intelligent applications using modern AI and machine learning frameworks.",
    "Train models to recognize patterns and make accurate predictions.",
    "Develop AI solutions using real-world datasets and practical workflows.",
    "Create industry-ready AI projects to strengthen your professional portfolio.",
  ],
  impactPoints: [
    "Train an image classification model from scratch",
    "Build a product recommendation engine",
    "Fine-tune and deploy an LLM assistant",
    "Document your MLOps pipeline like a production team",
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
