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
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/sunny-gogoi' },
  { id: 'github', label: 'GitHub', url: 'https://github.com/sunnygogoi' },
  { id: 'twitter', label: 'Twitter', url: 'https://twitter.com/sunnygogoi' },
];

export const education = {
  college: 'Placeholder University',
  gradYear: '2025',
  degree: 'B.Tech in Computer Science & Engineering',
  cgpa: '9.0/10.0',
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
    company: 'Tech Solutions Inc.',
    role: 'Software Development Intern',
    duration: '05/2024 - 08/2024',
    description: 'Developed and maintained features for a large-scale web application using React and TypeScript, improving performance by 15%.',
  },
  {
    company: 'AI Innovations Lab',
    role: 'Machine Learning Research Intern',
    duration: '01/2023 - 04/2023',
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
    name: 'AWS Certified Cloud Practitioner',
    verifyUrl: '#',
  },
  {
    name: 'TensorFlow Developer Certificate',
    verifyUrl: '#',
  },
  {
    name: 'Certified Professional in C++',
    verifyUrl: '#',
  },
];
