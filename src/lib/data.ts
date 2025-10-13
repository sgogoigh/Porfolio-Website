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
  { id: 'twitter', label: 'Twitter', url: 'https://twitter.com/sunnygogoi' },
];

export const education = {
  college: 'Vellore Institute of Technology, Vellore',
  gradYear: 'Graduation: 2026',
  degree: 'B.Tech Computer Science & Engineering',
  cgpa: 'CGPA: 9.09',
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
    description: 'Developed and maintained features for a large-scale web application using React and TypeScript, improving performance by 15%.',
  },
  {
    company: 'Ashva Wearable Technologies',
    role: 'Technical Content Writer',
    duration: 'Sept 2022 - Jan 2024',
    description: 'Implemented novel computer vision models with PyTorch, achieving a 5% increase in accuracy on benchmark datasets.',
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
    name: 'AI/ML Project One',
    category: 'AI/ML',
    description: 'A sentiment analysis model for customer reviews, deployed as a REST API.',
    techIcons: ['PythonIcon', 'TensorFlowIcon', 'FastApiIcon'],
    url: '#',
    imageId: 'project-ai-1',
  },
  {
    name: 'AI/ML Project Two',
    category: 'AI/ML',
    description: 'An image classification system to identify species of plants from photos.',
    techIcons: ['PythonIcon', 'PyTorchIcon', 'AwsIcon'],
    url: '#',
    imageId: 'project-ai-2',
  },
    {
    name: 'AI/ML Project Three',
    category: 'AI/ML',
    description: 'A recommendation engine for movies based on collaborative filtering.',
    techIcons: ['PythonIcon', 'RIcon', 'SqlIcon'],
    url: '#',
    imageId: 'project-ai-3',
  },
  {
    name: 'AI/ML Project Four',
    category: 'AI/ML',
    description: 'A chatbot for customer support using natural language processing techniques.',
    techIcons: ['PythonIcon', 'PyTorchIcon', 'DockerIcon'],
    url: '#',
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
