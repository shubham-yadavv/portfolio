"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/personal';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();
  const { name } = personalInfo;

  return (
    <footer className={`py-12 premium-bg border-t border-premium relative overflow-hidden ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-t from-white/1 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-t from-white/0.5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-premium-glow" />
            <span className="text-premium-glow font-semibold text-lg">{name}</span>
            <Sparkles className="w-5 h-5 text-premium-glow" />
          </div>
          
          <p className="text-white/60 text-sm">
            © {currentYear} {name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
