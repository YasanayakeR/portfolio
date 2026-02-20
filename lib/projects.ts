export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  role: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: {
    github?: string;
    demo?: string;
  };
  cover: {
    gradient: [string, string];
    accent: string;
    image?: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "servexa",
    title: "ServeXa (Automobile Service Platform)",
    date: "Nov 2025",
    role: "AI Chatbot Developer",
    type: "Group project",
    summary:
      "An automobile service management system for booking and tracking services with role-based access and real time progress updates, plus an AI assistant for customers.",
    highlights: [
      "Booking + service tracking workflows for customers and staff",
      "Real-time service progress updates with role based access control",
      "AI chatbot integration to assist customers during service journeys",
    ],
    stack: ["React", "FastAPI", "LangChain", "OpenAI/LLM", "SQL", "Vector DB"],
    links: {
      github: "https://github.com/CharukaVithana/ServeXa",
    },
    cover: {
      gradient: ["#312e81", "#6d28d9"],
      accent: "#a78bfa",
      image: "/projects/servexa.png",
    },
    featured: true,
  },
  {
    slug: "laundry-management-system",
    title: "Laundry Management System",
    date: "Aug 2024 – Jul 2025",
    role: "Full Stack Developer",
    type: "Client project (Vave)",
    summary:
      "Laundry management module for a multi-laundry platform order handling, staff status tracking, and a structured database for customers, orders, and service records.",
    highlights: [
      "Order management and staff facing status tracking",
      "Structured database design for customers, orders, and service records",
      "AWS S3 integration for scalable storage and efficient data handling",
      "CI/CD with GitHub Actions",
    ],
    stack: [
      "Angular",
      "ASP.NET Core",
      "MySQL",
      "Tailwind CSS",
      "AWS (S3)",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/YasanayakeR/Freshly",
    },
    cover: {
      gradient: ["#0f172a", "#1d4ed8"],
      accent: "#60a5fa",
      image: "/projects/freshly.png",
    },
    featured: true,
  },
  {
    slug: "skillswap",
    title: "SkillSwap",
    date: "Dec 2025",
    role: "Full Stack Developer",
    type: "Individual project",
    summary:
      "A peer to peer skill sharing platform for registering skills and learning interests, intelligent user matching, and scheduled knowledge exchange sessions.",
    highlights: [
      "Skill registration and interest based matching",
      "Scheduled knowledge exchange sessions (no monetary transactions)",
      "JWT-secured REST APIs",
    ],
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "JWT", "REST APIs"],
    links: {
      github: "https://github.com/YasanayakeR/SkillSwap",
    },
    cover: {
      gradient: ["#064e3b", "#0f766e"],
      accent: "#34d399",
      image: "/projects/skillswap.png",
    },
    featured: true,
  },
  {
    slug: "intelligent-data-room",
    title: "Intelligent Data Room",
    date: "Jan 2026",
    role: "GenAI & Full Stack Developer",
    type: "Individual project",
    summary:
      "A web app for uploading CSV/XLSX data and querying it in natural language with a multi-agent workflow (planning + execution), plus auto visualisations and short term conversational memory.",
    highlights: [
      "Natural-language querying over CSV/XLSX datasets",
      "Multi-agent workflow using PandasAI + Gemini (planning + execution)",
      "Auto data visualisation with short-term conversational memory",
      "Dockerized deployment with GitHub Actions CI/CD (Hugging Face deployment)",
    ],
    stack: ["React", "FastAPI", "LangGraph", "Docker", "AWS", "GitHub Actions"],
    links: {
      github: "https://github.com/YasanayakeR/intelligent-data-room",
      demo: "https://yasanayaker.github.io",
    },
    cover: {
      gradient: ["#111827", "#7c3aed"],
      accent: "#c4b5fd",
      image: "/projects/intelligent-data-room.png",
    },
    featured: true,
  },
  {
    slug: "sentiment-analysis-web-app",
    title: "Sentiment Analysis Web Application",
    date: "Jan 2026",
    role: "Model Developer",
    type: "Individual project",
    summary:
      "A real-time sentiment analysis web app with NLP preprocessing and traditional ML classifiers, packaged behind a simple interactive UI for instant results.",
    highlights: [
      "Text preprocessing + sentiment classification pipeline",
      "Models: Logistic Regression, SVM, Naive Bayes",
      "Interactive UI for real-time predictions",
    ],
    stack: ["FastAPI", "Streamlit", "Scikit-learn"],
    links: {
      github: "https://github.com/YasanayakeR/sentiment_analysis_project.git",
    },
    cover: {
      gradient: ["#3f1d2a", "#be123c"],
      accent: "#fb7185",
      image: "/projects/sentiment-analysis.png",
    },
  },
  {
    slug: "multimodal-rag",
    title: "Multimodal RAG",
    date: "Feb 2026",
    role: "Multimodal RAG Engineer",
    type: "Individual project",
    summary:
      "An end-to-end multimodal retrieval system that indexes PDFs (text, tables, images) into ChromaDB and answers questions with grounded cross modal summaries.",
    highlights: [
      "Indexed PDFs using Unstructured.io into ChromaDB",
      "MultiVectorRetriever with summarized metadata + raw base64 images / table HTML for better search accuracy",
      "Cross-modal summaries and grounded answers via LangChain (Gemini 2.5 Flash + GPT-4o-mini)",
    ],
    stack: ["FastAPI", "Next.js", "MongoDB", "ChromaDB", "Unstructured.io", "LangChain"],
    links: {
      github: "https://github.com/YasanayakeR/multimodel_rag.git",
    },
    cover: {
      gradient: ["#0b3a2e", "#0ea5e9"],
      accent: "#7dd3fc",
      image: "/projects/multimodal-rag.png",
    },
  },
  {
    slug: "docsync",
    title: "Doctor Appointment Booking System (DocSync)",
    date: "Feb 2026",
    role: "Full Stack Developer",
    type: "Individual project",
    summary:
      "An online platform to schedule, manage, and cancel appointments with patient/doctor availability management and real time updates.",
    highlights: [
      "Digitized appointment workflows to improve operational efficiency",
      "Availability management with real time updates",
      "RESTful APIs and responsive UIs",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "PayHere"],
    links: {
      github: "https://github.com/YasanayakeR/DocSync",
    },
    cover: {
      gradient: ["#0f172a", "#06b6d4"],
      accent: "#67e8f9",
      image: "/projects/docsync.png",
    },
  },
  {
    slug: "laptop-price-predictor",
    title: "Laptop Price Predictor",
    date: "Dec 2025",
    role: "ML Developer",
    type: "Individual project",
    summary:
      "A machine learning web app that predicts laptop prices in euros based on specifications such as RAM, weight, brand, type, CPU, GPU, and display features.",
    highlights: [
      "Trained RandomForestRegressor on laptop dataset for price prediction",
      "Dual interfaces: Flask web app and Streamlit UI for interactive predictions",
      "Feature engineering with one-hot encoding for categorical variables (company, type, OS, CPU, GPU)",
      "Input validation and form-based specification selection",
    ],
    stack: ["Python", "Flask", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
    links: {
      github: "https://github.com/YasanayakeR/laptop_price_predictor",
    },
    cover: {
      gradient: ["#1e3a5f", "#0d9488"],
      accent: "#5eead4",
      image: "/projects/laptop-price-predictor.png",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

