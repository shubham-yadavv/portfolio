"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Brain, Cpu, Code, Database, Zap, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Enhanced AI-focused projects
  const aiProjects = [
    {
      id: "ai-chatbot",
      title: "AI-Powered Chatbot",
      description: "An intelligent conversational AI built with OpenAI GPT-4, LangChain, and React. Features context-aware responses, memory management, and multi-modal interactions.",
      image: "/api/placeholder/400/250",
      technologies: ["OpenAI GPT-4", "LangChain", "React", "FastAPI", "PostgreSQL"],
      category: "AI/ML",
      icon: Brain,
      color: "from-emerald-400 via-cyan-400 to-blue-400",
      glowColor: "rgba(16, 185, 129, 0.3)",
      github: "https://github.com/yourusername/ai-chatbot",
      live: "https://ai-chatbot-demo.vercel.app",
      featured: true
    },
    {
      id: "computer-vision-app",
      title: "Computer Vision Dashboard",
      description: "Real-time object detection and image analysis platform using TensorFlow.js and OpenCV. Processes video streams and provides detailed analytics.",
      technologies: ["TensorFlow.js", "OpenCV", "Python", "React", "WebRTC"],
      category: "Computer Vision",
      icon: Cpu,
      color: "from-blue-400 via-indigo-400 to-purple-400",
      glowColor: "rgba(59, 130, 246, 0.3)",
      github: "https://github.com/yourusername/cv-dashboard",
      live: "https://cv-dashboard.vercel.app",
      featured: true
    },
    {
      id: "ai-content-generator",
      title: "AI Content Generator",
      description: "Multi-purpose content generation tool that creates articles, social media posts, and marketing copy using advanced NLP models.",
      technologies: ["Hugging Face", "Transformers", "FastAPI", "Next.js", "Redis"],
      category: "NLP",
      icon: Zap,
      color: "from-orange-400 via-amber-400 to-yellow-400",
      glowColor: "rgba(251, 146, 60, 0.3)",
      github: "https://github.com/yourusername/ai-content-gen",
      live: "https://content-generator.vercel.app",
      featured: true
    },
    {
      id: "ml-model-deployment",
      title: "ML Model Deployment Platform",
      description: "End-to-end platform for deploying and monitoring machine learning models with automatic scaling and A/B testing capabilities.",
      technologies: ["Docker", "Kubernetes", "MLflow", "Prometheus", "Grafana"],
      category: "MLOps",
      icon: Database,
      color: "from-purple-400 via-pink-400 to-rose-400",
      glowColor: "rgba(147, 51, 234, 0.3)",
      github: "https://github.com/yourusername/ml-deployment",
      live: "https://ml-platform.vercel.app",
      featured: false
    },
    {
      id: "ai-recommendation-engine",
      title: "AI Recommendation Engine",
      description: "Personalized recommendation system using collaborative filtering and deep learning for e-commerce and content platforms.",
      technologies: ["PyTorch", "Scikit-learn", "FastAPI", "PostgreSQL", "Redis"],
      category: "Recommendation Systems",
      icon: Brain,
      color: "from-green-400 via-emerald-400 to-teal-400",
      glowColor: "rgba(34, 197, 94, 0.3)",
      github: "https://github.com/yourusername/recommendation-engine",
      live: "https://recommendations.vercel.app",
      featured: false
    },
    {
      id: "ai-code-assistant",
      title: "AI Code Assistant",
      description: "Intelligent code completion and refactoring tool powered by large language models, with support for multiple programming languages.",
      technologies: ["OpenAI Codex", "LangChain", "TypeScript", "VSCode Extension", "WebSocket"],
      category: "Developer Tools",
      icon: Code,
      color: "from-slate-300 via-gray-300 to-zinc-300",
      glowColor: "rgba(148, 163, 184, 0.3)",
      github: "https://github.com/yourusername/ai-code-assistant",
      live: "https://code-assistant.vercel.app",
      featured: false
    }
  ];

  return (
    <section id="projects" className={`py-24 premium-bg relative overflow-hidden ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-l from-white/2 to-transparent rounded-full blur-3xl animate-premium-float"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-r from-white/1 to-transparent rounded-full blur-3xl animate-premium-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-white/60" />
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Portfolio</span>
            <Sparkles className="w-6 h-6 text-white/60" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-premium-shimmer">
              AI Projects & Solutions
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Explore my portfolio of AI-powered applications, from conversational agents to computer vision systems. 
            Each project demonstrates cutting-edge AI technologies and practical problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div ref={ref} className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-premium-glow mb-12 text-center"
          >
            Featured Projects
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {aiProjects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: project.glowColor }}
                ></div>
                
                <div className="relative glass-ultra border-premium-glow rounded-2xl overflow-hidden hover-premium-strong transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-56 bg-gradient-to-br from-black/50 to-black/30 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="w-20 h-20 text-premium-glow" />
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white shadow-premium-glow`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-premium-glow transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-white/70 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 glass border-premium rounded-lg text-sm text-white/80 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-white/70 hover:text-premium-glow transition-colors duration-300 group/link"
                      >
                        <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                        <span className="font-medium">View Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-white/70 hover:text-premium-glow transition-colors duration-300 group/link"
                      >
                        <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-premium-glow mb-12 text-center">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: project.glowColor }}
                ></div>
                
                <div className="relative glass border-premium rounded-xl overflow-hidden hover-premium transition-all duration-500">
                  {/* Project Header */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-premium-glow`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-premium-glow transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-white/70 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 glass border-premium rounded-lg text-xs text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 glass border-premium rounded-lg text-xs text-white/60">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-white/70 hover:text-premium-glow transition-colors duration-300 text-sm group/link"
                      >
                        <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span className="font-medium">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-white/70 hover:text-premium-glow transition-colors duration-300 text-sm group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span className="font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="glass-ultra border-premium-glow rounded-2xl p-12 max-w-4xl mx-auto">
            <Sparkles className="w-12 h-12 text-premium-glow mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-premium-glow mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate on cutting-edge AI projects that push the boundaries of what's possible.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium px-10 py-4 rounded-xl font-bold text-lg hover-premium-strong"
            >
              Let's Start Building
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
