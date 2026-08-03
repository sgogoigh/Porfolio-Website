export const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About Me' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'connect', title: 'Connect' },
] as const;

export const socialLinks = [
  { id: 'email', label: 'Email', url: 'mailto:sgogoi2004@gmail.com' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/sunnygogoi' },
  { id: 'github', label: 'GitHub', url: 'https://github.com/sgogoigh' },
  { id: 'twitter', label: 'Twitter', url: 'https://x.com/sunnygogoi' },
];

export const education = {
  college: 'Vellore Institute of Technology, Vellore',
  gradYear: 'Graduation: 2026',
  degree: 'B.Tech Computer Science & Engineering',
  cgpa: 'CGPA: 9.13 / 10',
};

export const techStack = [
  { name: 'Python', icon: 'PythonIcon' }
  { name: 'JavaScript', icon: 'JavaScriptIcon' },
  { name: 'SQL', icon: 'SqlIcon' },
  { name: 'PyTorch', icon: 'PyTorchIcon' },
  { name: 'TensorFlow', icon: 'TensorFlowIcon' },
  { name: 'Keras', icon: 'KerasIcon' },
  { name: 'scikit-learn', icon: 'ScikitLearnIcon' },
  { name: 'OpenCV', icon: 'OpenCvIcon' },
  { name: 'YOLO', icon: 'YoloIcon' },
  { name: 'LangChain', icon: 'LangChainIcon' },
  { name: 'Hugging Face', icon: 'HuggingFaceIcon' },
  { name: 'OpenAI', icon: 'OpenAiIcon' },
  { name: 'Gemini', icon: 'GeminiIcon' },
  { name: 'Groq', icon: 'GroqIcon' },
  { name: 'NumPy', icon: 'NumpyIcon' },
  { name: 'Pandas', icon: 'PandasIcon' },
  { name: 'FastAPI', icon: 'FastApiIcon' },
  { name: 'Next.js', icon: 'NextJsIcon' },
  { name: 'React', icon: 'ReactIcon' },
  { name: 'Streamlit', icon: 'StreamlitIcon' },
  { name: 'Docker', icon: 'DockerIcon' },
  { name: 'Git', icon: 'GitIcon' },
  { name: 'AWS', icon: 'AwsIcon' },
  { name: 'Oracle Cloud', icon: 'OracleIcon' },
];

export const experience = [
  {
    company: 'Matrice AI',
    role: 'Machine Learning Engineer - Apps & Analytics',
    duration: 'Jan 2026 - Present',
    achievements: [
      'Developed and scaled the Matrice Analytics Platform for low-latency, multi-class object detection, sustaining 30 FPS inference across up to 30 concurrent streams on Nvidia Jetson Thor hardware.',
      'Reduced operational anomalies by 60% by building automated real-time metrics and incident-management tooling.',
      'Deployed and maintained 12 detection applications built on pre-trained YOLO models within the Matrice Video Management System, using SAM3 for ground-truth extraction and benchmarking pipelines.',
      'Achieved a 0.9 mean F1 score across deployed detection apps while accelerating model deployment throughput by 30%.',
    ],
  },
  {
    company: 'Quintinno Labs',
    role: 'Research & Data Intern',
    duration: 'Jun 2025 - Jul 2025',
    achievements: [
      'Developed a conceptual model for an automated EV charging robot using a 30kW LiFePO4 battery, ArUco markers, and real-time object detection from cameras over RTSP streaming.',
      'Cut robot costs by 50% and achieved a 15-minute average charge time.',
      'Evaluated LSTM models for a Smart Battery Management System (BMS), running extensive exploratory data analysis on BMS parameters.',
      'Identified n=55 and n=92 as the most accurate configurations for state-of-charge (SoC) calculations.',
    ],
  },
  {
    company: 'Ashva Wearable Technologies',
    role: 'Technical Content Writer',
    duration: 'Sept 2022 - Jan 2024',
    achievements: [
      'Summarized 75+ research papers and articles on physiotherapy healthcare trends to produce 10+ articles for the company\'s newsletter, "Raftaar."',
      'Strategized content distribution across 5 platforms, including Instagram, YouTube, Quora, LinkedIn, and Reddit.',
      'Applied SEO and infographic-based digital marketing techniques to grow traffic and reader engagement.',
    ],
  },
];

export const projects = [
  // Research
  {
    name: 'Workflow-Graph RAG for LLM Support Agents',
    category: 'Research',
    description: 'A 3-arm benchmark (monolithic prompt vs. graph-RAG vs. vector RAG) achieving 53% token reduction at higher judged quality using a 42-node workflow graph with hybrid retrieval.',
    techIcons: ['PythonIcon', 'LangChainIcon', 'GroqIcon'],
    url: '#',
    imageId: 'project-research-1',
  },
  {
    name: 'Federated GraphSAGE for APT Detection',
    category: 'Research',
    description: 'A privacy-preserving federated GraphSAGE model detecting APT lateral movement across 1.05B authentication events, reaching 0.97 ROC-AUC and a 10x gain over non-graph baselines.',
    techIcons: ['PythonIcon', 'PyTorchIcon', 'DockerIcon'],
    url: 'https://github.com/sgogoigh/Federated-Learning-APT-Detection',
    imageId: 'project-research-2',
  },
  {
    name: 'AI Image Captioning Model',
    category: 'Research',
    description: 'An LSTM-RNN captioning model with a CNN feature extractor, reaching 93% test accuracy on image-to-caption generation with TensorFlow and Keras.',
    techIcons: ['PythonIcon', 'TensorFlowIcon', 'KerasIcon'],
    url: '#',
    imageId: 'project-research-3',
  },
  {
    name: 'DeFi Wallet Credit Scoring System',
    category: 'Research',
    description: 'A five-component behavioral scoring framework over 3,000 on-chain wallets, engineering 30+ features and validating scores via unsupervised clustering.',
    techIcons: ['PythonIcon', 'PandasIcon', 'NumpyIcon'],
    url: 'https://github.com/sgogoigh/Wallet-Scoring-System',
    imageId: 'project-research-4',
  },
  // AI/ML
  {
    name: 'Chatterbot AI - Presentation Voice Agent',
    category: 'AI/ML',
    description: 'A real-time, full-duplex voice AI that narrates slide decks and handles spoken interruptions with sub-3.6s latency across a 6-stage speech and RAG pipeline.',
    techIcons: ['PythonIcon', 'GroqIcon', 'DockerIcon'],
    url: '#',
    imageId: 'project-ai-5',
  },
  {
    name: 'Dreamers - Movie Script Generator',
    category: 'AI/ML',
    description: 'A fine-tuned Llama 3 model trained on 2,800 curated movie scripts, integrated with Gemini Veo-3 for automatic 8-second trailer generation.',
    techIcons: ['PythonIcon', 'GeminiIcon', 'HuggingFaceIcon'],
    url: 'https://github.com/sgogoigh/Character-Video-Generation',
    imageId: 'project-ai-6',
  },
  {
    name: 'Study Easy',
    category: 'AI/ML',
    description: 'A LoRA fine-tuned Mistral 7.3B model for summarization and Q&A over college notes, with OCR-based auto-extraction from PDFs and slides.',
    techIcons: ['PythonIcon', 'HuggingFaceIcon', 'FastApiIcon'],
    url: '#',
    imageId: 'project-ai-8',
  },
  {
    name: 'Movie Recommendation System',
    category: 'AI/ML',
    description: 'Content-based movie recommendations over the TMDB 10,000-title dataset using cosine similarity, deployed as an interactive Streamlit app.',
    techIcons: ['PythonIcon', 'PandasIcon', 'StreamlitIcon'],
    url: '#',
    imageId: 'project-ai-9',
  },
  {
    name: 'Spotify Song Recommendation System',
    category: 'AI/ML',
    description: 'A playlist-based song recommender built on Spotify\'s developer API, matching audio features via dot-product similarity and deployed on Streamlit.',
    techIcons: ['PythonIcon', 'NumpyIcon', 'StreamlitIcon'],
    url: '#',
    imageId: 'project-ai-10',
  },
  {
    name: 'Premier League Table Prediction',
    category: 'AI/ML',
    description: 'Match outcome prediction over 13,000+ Premier League fixtures scraped from FBREF, modeling recent form and scoring trends.',
    techIcons: ['PythonIcon', 'PandasIcon', 'SqlIcon'],
    url: '#',
    imageId: 'project-ai-11',
  },
  {
    name: 'Product Discovery Assistant',
    category: 'AI/ML',
    description: 'Scraping products from Hunnit and searching using chatbot!',
    techIcons: ['PythonIcon', 'FastApiIcon', 'SqlIcon'],
    url: 'https://github.com/sgogoigh/Product-Discovery-Assistant',
    imageId: 'project-ai-3',
  },
];

export const certifications = [
  {
    name: 'Oracle OCI Generative AI Professional',
    verifyUrl: '#',
  },
  {
    name: 'Oracle OCI Vector Search Professional',
    verifyUrl: '#',
  },
  {
    name: 'Anthropic Claude with Vertex AI',
    verifyUrl: '#',
  },
  {
    name: 'Anthropic Model Context Protocol - Advanced Topics',
    verifyUrl: '#',
  },
  {
    name: 'Google Machine Learning Operations with Vertex AI',
    verifyUrl: '#',
  },
  {
    name: 'CS50: Introduction to Databases with SQL',
    verifyUrl: '#',
  },
  {
    name: 'CS50: Introduction to Programming with Python',
    verifyUrl: '#',
  },
  {
    name: 'CS50: Introduction to Artificial Intelligence',
    verifyUrl: '#',
  },
];
