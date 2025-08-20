export interface Skill {
  name: string;
  level: number;
  color: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
}

export const skills: Skill[] = [
  { name: "FastAPI", level: 90, color: "#61DAFB", category: "backend" },
  { name: "TypeScript", level: 85, color: "#3178C6", category: "frontend" },
  { name: "LangChain", level: 92, color: "#06B6D4", category: "frontend" },
  { name: "Node.js", level: 80, color: "#339933", category: "backend" },
  { name: "Python", level: 75, color: "#3776AB", category: "backend" },
  { name: "PostgreSQL", level: 70, color: "#336791", category: "backend" },
  { name: "MongoDB", level: 72, color: "#47A248", category: "backend" },
  { name: "AWS", level: 70, color: "#FF9900", category: "devops" },
  { name: "Docker", level: 65, color: "#2496ED", category: "devops" },
  { name: "Git", level: 85, color: "#F05032", category: "tools" },
  { name: "Figma", level: 78, color: "#F24E1E", category: "tools" },
];

export const tools = [
  "Git & GitHub", "VS Code", "Figma", "Postman", 
  "Docker", "AWS", "Vercel", "Netlify", "Jira", "Slack"
];
