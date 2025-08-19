export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  about: string[];
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  stats: {
    experience: string;
    projects: string;
    clients: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Shubham Yadav",
  title: "GenAI Developer & Backend Engineer",
  description: "Building the future with GenAI and Backend development",
  about: [
    "I'm a passionate GenAI developer with expertise in building intelligent applications that leverage the power of artificial intelligence. I specialize in Large Language Models, Computer Vision, and creating AI-powered solutions that solve real-world problems.",
    "With experience in OpenAI, LangChain, TensorFlow, and modern AI frameworks, I bridge the gap between cutting-edge AI research and practical applications. I love exploring the frontiers of AI technology and turning complex algorithms into user-friendly experiences."
  ],
  contact: {
    email: "shubham22121@gmail.com",
    linkedin: "https://linkedin.com/in/shubham22121",
    github: "https://github.com/shubham-yadavv",
    twitter: "https://twitter.com/shubhz"
  },
  stats: {
    experience: "5+",
    projects: "50+",
    clients: "10+"
  }
};
