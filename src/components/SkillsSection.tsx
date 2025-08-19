"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cpu, Code, Database, Cloud, Zap, Sparkles } from 'lucide-react';

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-emerald-400 via-cyan-400 to-blue-400",
      glowColor: "rgba(16, 185, 129, 0.3)",
      skills: [
        { name: "OpenAI GPT", level: 90 },
        { name: "LangChain", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP", level: 80 },
      ]
    },
    {
      title: "Backend & APIs",
      icon: Cpu,
      color: "from-slate-300 via-gray-300 to-zinc-300",
      glowColor: "rgba(148, 163, 184, 0.3)",
      skills: [
        { name: "Python", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 80 },
      ]
    },
    {
      title: "Frontend & UI",
      icon: Code,
      color: "from-blue-400 via-indigo-400 to-purple-400",
      glowColor: "rgba(59, 130, 246, 0.3)",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Three.js", level: 70 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 80 },
      ]
    },
    {
      title: "Data & Infrastructure",
      icon: Database,
      color: "from-purple-400 via-pink-400 to-rose-400",
      glowColor: "rgba(147, 51, 234, 0.3)",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "AWS", level: 80 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-400 via-amber-400 to-yellow-400",
      glowColor: "rgba(251, 146, 60, 0.3)",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Terraform", level: 70 },
        { name: "Monitoring", level: 75 },
        { name: "Security", level: 80 },
      ]
    },
    {
      title: "AI Tools & Platforms",
      icon: Zap,
      color: "from-green-400 via-emerald-400 to-teal-400",
      glowColor: "rgba(34, 197, 94, 0.3)",
      skills: [
        { name: "Hugging Face", level: 85 },
        { name: "Weights & Biases", level: 75 },
        { name: "MLflow", level: 70 },
        { name: "Streamlit", level: 80 },
        { name: "Gradio", level: 75 },
        { name: "AutoML", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className={`py-24 premium-bg relative overflow-hidden ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-white/3 to-transparent rounded-full blur-3xl animate-premium-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-white/2 to-transparent rounded-full blur-3xl animate-premium-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-white/1 to-transparent rounded-full blur-3xl animate-premium-float" style={{ animationDelay: '4s' }}></div>
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
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Expertise</span>
            <Sparkles className="w-6 h-6 text-white/60" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-premium-shimmer">
              Technical Mastery
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            My expertise spans across artificial intelligence, full-stack development, and modern cloud technologies. 
            I specialize in building intelligent applications that leverage cutting-edge AI capabilities.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: category.glowColor }}
              ></div>
              
              <div className="relative glass-ultra border-premium-glow rounded-2xl p-8 hover-premium-strong transition-all duration-500">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300 shadow-premium-glow`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-premium-glow transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm font-medium tracking-wide">{skill.name}</span>
                        <span className="text-premium-glow text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="progress-premium rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} progress-fill-premium relative overflow-hidden`}
                        >
                          {/* Shimmer effect on progress bar */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-premium-glow mb-10">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'GitHub', 'Jira', 'Postman', 'VS Code', 'PyCharm', 
              'Jupyter', 'Colab', 'Vercel', 'Netlify', 'Nginx', 'Linux',
              'Bash', 'PowerShell', 'JSON', 'YAML', 'Markdown', 'LaTeX'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.03 }}
                className="glass border-premium rounded-xl px-6 py-3 text-white/80 hover:text-white hover:border-premium-strong hover-premium transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-3 text-white/40">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/40"></div>
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wider">Continuously Learning</span>
            <Sparkles className="w-4 h-4" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
