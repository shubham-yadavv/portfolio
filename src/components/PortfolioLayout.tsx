"use client";

import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

interface PortfolioLayoutProps {
  className?: string;
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ className = "" }) => {
  return (
    <div className={`min-h-screen bg-black text-white overflow-x-hidden ${className}`} style={{ backgroundColor: '#000000' }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PortfolioLayout;
