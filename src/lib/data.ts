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
  cgpa: 'CGPA: 9.1 / 10',
};

export const techStack = [
  { name: 'Python', icon: 'PythonIcon' },
  { name: 'Java', icon: 'JavaIcon' },
  { name: 'SQL', icon: 'SqlIcon' },
  { name: 'C', icon: 'CIcon' },
  { name: 'C++', icon: 'CppIcon' },
  { name: 'R', icon: 'RIcon' },
  { name: 'JavaScript', icon: 'JavaScriptIcon' },
  { name: 'TypeScript', icon: 'TypeScriptIcon' },
  { name: 'React', icon: 'ReactIcon' },
  { name: 'PyTorch', icon: 'PyTorchIcon' },
  { name: 'TensorFlow', icon: 'TensorFlowIcon' },
  { name: 'FastAPI', icon: 'FastApiIcon' },
  { name: 'Docker', icon: 'DockerIcon' },
  { name: 'Git', icon: 'GitIcon' },
  { name: 'AWS', icon: 'AwsIcon' },
];

export const experience = [
  {
    company: 'Quintinno Labs',
    role: 'Research & Data Intern',
    duration: 'Jun 2025 - Jul 2025',
    description: 'Developed a conceptual model of an automated EV charging robot, Evaluated LSTM models in Smart Battery Management System (BMS) for State of Charge (SoC) calculations',
  },
  {
    company: 'Ashva Wearable Technologies',
    role: 'Technical Content Writer',
    duration: 'Sept 2022 - Jan 2024',
    description: 'Summarized 75+ research papers and articles to evaluate future of data-driven physiotherapy equipment in Indian healthcare',
  },
];

export const projects = [
  {
    name: 'DevProject One',
    category: 'Developer',
    description: 'A full-stack web application for task management, built with React, Node.js, and PostgreSQL.',
    techIcons: ['ReactIcon', 'TypeScriptIcon', 'DockerIcon'],
    url: '#',
    imageId: 'project-dev-1',
  },
  {
    name: 'DevProject Two',
    category: 'Developer',
    description: 'An e-commerce platform with a custom CMS and Stripe integration for payments.',
    techIcons: ['JavaScriptIcon', 'JavaIcon', 'SqlIcon'],
    url: '#',
    imageId: 'project-dev-2',
  },
    {
    name: 'DevProject Three',
    category: 'Developer',
    description: 'A real-time chat application using WebSockets and FastAPI for the backend.',
    techIcons: ['PythonIcon', 'FastApiIcon', 'ReactIcon'],
    url: '#',
    imageId: 'project-dev-3',
  },
  {
    name: 'DevProject Four',
    category: 'Developer',
    description: 'A personal blog platform with markdown support and static site generation.',
    techIcons: ['TypeScriptIcon', 'ReactIcon', 'GitIcon'],
    url: '#',
    imageId: 'project-dev-4',
  },
  {
    name: 'Credit Wallet Scoring System',
    category: 'AI/ML',
    description: 'Assigning DeFi credit scores to users based on their wallet transaction history with feature engineering!',
    techIcons: ['PythonIcon', 'HuggingFaceIcon', 'FastApiIcon'],
    url: 'https://github.com/sgogoigh/Wallet-Scoring-System',
    imageId: 'project-ai-1',
  },
  {
    name: 'Movie Character Generation',
    category: 'AI/ML',
    description: 'Making movie characters from user input with short 6-second clips!',
    techIcons: ['PythonIcon', 'PyTorchIcon', 'AwsIcon'],
    url: 'https://github.com/sgogoigh/Character-Video-Generation',
    imageId: 'project-ai-2',
  },
    {
    name: 'Product Discovery Assistant',
    category: 'AI/ML',
    description: 'Scraping products from Hunnit and searching using chatbot!',
    techIcons: ['PythonIcon', 'FastApiIcon', 'SqlIcon'],
    url: 'https://github.com/sgogoigh/Product-Discovery-Assistant',
    imageId: 'project-ai-3',
  },
  {
    name: 'APT Detection using GNN in Federated Learning',
    category: 'AI/ML',
    description: 'Detecting Advanced Persistent Threats (APTs) in network systems using Graph Neural Networks (GNN) within a Federated Learning framework!',
    techIcons: ['PythonIcon', 'PyTorchIcon', 'DockerIcon'],
    url: 'https://github.com/sgogoigh/Federated-Learning-APT-Detection',
    imageId: 'project-ai-4',
  },
];

export const certifications = [
  {
    name: 'Oracle Generative AI Professional',
    verifyUrl: '#',
  },
  {
    name: 'Oracle OCI Vector Search Professional',
    verifyUrl: '#',
  },
  {
    name: 'CS50 Introduction to Databases with SQL',
    verifyUrl: '#',
  },
  {
    name: 'Introduction to MCP Servers with Claude',
    verifyUrl: '#',
  },
];
