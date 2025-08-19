export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'ai' | 'other';
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    image: "/project1.jpg",
    link: "#",
    github: "https://github.com/username/ecommerce-platform",
    featured: true,
    category: "web"
  },
  {
    id: "ai-chat-app",
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses and sentiment analysis. Built with Python, TensorFlow, and WebSocket for real-time communication.",
    tech: ["Python", "TensorFlow", "WebSocket", "Redis", "FastAPI", "React"],
    image: "/project2.jpg",
    link: "#",
    github: "https://github.com/username/ai-chat-app",
    featured: true,
    category: "ai"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern responsive portfolio built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/project3.jpg",
    link: "#",
    github: "https://github.com/username/portfolio",
    featured: true,
    category: "web"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Firebase", "Material-UI", "React DnD"],
    image: "/project4.jpg",
    link: "#",
    github: "https://github.com/username/task-manager",
    featured: false,
    category: "web"
  },
  {
    id: "mobile-fitness-app",
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app for fitness tracking with workout plans, progress analytics, and social features.",
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS S3"],
    image: "/project5.jpg",
    link: "#",
    github: "https://github.com/username/fitness-app",
    featured: false,
    category: "mobile"
  }
];
