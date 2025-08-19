"use client";

import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Code, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/personal';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  const { name, title, description } = personalInfo;

  const floatingIcons = [
    { icon: Brain, delay: 0, x: 20, y: -20 },
    { icon: Cpu, delay: 0.5, x: -30, y: 10 },
    { icon: Zap, delay: 1, x: 25, y: 30 },
    { icon: Code, delay: 1.5, x: -20, y: -30 },
    { icon: Sparkles, delay: 2, x: 35, y: -10 },
  ];

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-black ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 premium-bg"></div>
        <div className="absolute inset-0 premium-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/5 rounded-full"
              animate={{
                x: [0, Math.random() * 1000],
                y: [0, Math.random() * 800],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 25,
                repeat: Infinity,
                delay: Math.random() * 15,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Premium Floating Elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white/5"
          animate={{
            x: [0, item.x * 0.3, 0],
            y: [0, item.y * 0.3, 0],
            rotate: [0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + index * 10}%`,
          }}
        >
          <item.icon size={20} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 glass border-premium rounded-full px-6 py-3 mb-8"
        >
          <Brain className="w-5 h-5 text-white" />
          <span className="text-white font-medium">AI Engineer</span>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-premium-glow">
            {name}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-premium mb-8"
        >
          {title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group btn-premium px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group btn-premium-outline px-8 py-4 rounded-lg font-semibold text-lg"
          >
            Download Resume
          </motion.button>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <p className="text-white/60 mb-6">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'TypeScript', 'Python', 'TensorFlow', 'OpenAI', 'LangChain', 'Three.js'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="glass border-premium rounded-lg px-4 py-2 text-white/80 hover:text-white hover:border-premium-strong transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center glass"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
