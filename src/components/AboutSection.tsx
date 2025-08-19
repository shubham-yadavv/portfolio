"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cpu, Zap, Code, Database, Cloud, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/personal';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { about, stats } = personalInfo;

  const expertiseAreas = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep expertise in Large Language Models, Computer Vision, and Neural Networks",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Backend Development",
      description: "Building scalable APIs and microservices with modern technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Creating seamless user experiences with React, Next.js, and TypeScript",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing robust data pipelines and infrastructure solutions",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploying and managing applications on modern cloud platforms",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "AI Tools & Platforms",
      description: "Integrating cutting-edge AI tools and platforms for optimal solutions",
      color: "from-yellow-500 to-orange-500"
    }
  ];

      return (
      <section id="about" className={`py-20 bg-black premium-bg ${className}`} style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-premium-glow">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Passionate about artificial intelligence and building the future with cutting-edge technology
            </p>
          </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {about.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-white/80 leading-relaxed text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {Object.entries(stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{value}</div>
                  <div className="text-white/60 capitalize">{key}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group btn-premium px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Areas of Expertise</h3>
            <div className="grid gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group glass border-premium rounded-lg p-4 hover:border-premium-strong transition-all duration-300 hover-premium"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${area.color} group-hover:scale-110 transition-transform duration-300`}>
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {area.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Brain className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-white mb-4">My AI Philosophy</h3>
            <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
              &ldquo;I believe that artificial intelligence should augment human capabilities, not replace them. 
              My approach focuses on creating AI solutions that are ethical, transparent, and genuinely useful 
              in solving real-world problems. Every AI system I build is designed with human-centered principles 
              and responsible AI practices.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
