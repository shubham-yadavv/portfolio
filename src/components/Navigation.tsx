"use client";

import { scrollToSection } from '@/lib/utils';
import { useScrollPosition, useActiveSection } from '@/lib/hooks';
import { Sparkles } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const isScrolled = useScrollPosition();
  const activeSection = useActiveSection();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong shadow-premium-strong" : "bg-transparent"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-premium-glow" />
            <div className="text-2xl font-bold text-premium-shimmer">
              Portfolio
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`capitalize transition-all duration-300 hover:text-premium-glow relative group ${
                  activeSection === item.id ? "text-premium-glow" : "text-white/70"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white/50 to-white/30 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.id ? "w-full" : ""
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white/70 hover:text-premium-glow transition-colors duration-300 p-2 rounded-lg hover:bg-white/5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
