"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/personal';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = "" }) => {
  const { contact } = personalInfo;
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      color: "from-emerald-400 via-cyan-400 to-blue-400",
      glowColor: "rgba(16, 185, 129, 0.3)"
    }
  ];

  const socialLinks = [
    { icon: Github, href: contact.github, label: "GitHub", color: "from-slate-300 via-gray-300 to-zinc-300" },
    { icon: Linkedin, href: contact.linkedin, label: "LinkedIn", color: "from-blue-400 via-indigo-400 to-purple-400" },
    { icon: Twitter, href: contact.twitter, label: "Twitter", color: "from-cyan-400 via-blue-400 to-indigo-400" }
  ];

  return (
    <section id="contact" className={`py-24 premium-bg relative overflow-hidden ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-r from-white/2 to-transparent rounded-full blur-3xl animate-premium-float"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-gradient-to-l from-white/1 to-transparent rounded-full blur-3xl animate-premium-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-white/60" />
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Contact</span>
            <Sparkles className="w-6 h-6 text-white/60" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-premium-shimmer">
              Get In Touch
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's build something amazing together.
          </p>
        </motion.div>
        
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-premium-glow">Let's Connect</h3>
            
            {/* Contact Items */}
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: item.glowColor }}
                  ></div>
                  
                  <div className="relative glass border-premium-glow rounded-xl p-6 hover-premium transition-all duration-500">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-premium-glow`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">{item.label}</p>
                        <p className="text-white/70">{item.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={social.label}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="group relative"
                    title={social.label}
                  >
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    ></div>
                    
                    <div className="relative glass border-premium-glow rounded-xl p-4 hover-premium transition-all duration-500">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${social.color} group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Glow effect for form */}
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/5 to-transparent"></div>
            
            <form onSubmit={handleSubmit} className="relative glass-ultra border-premium-glow rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-white font-medium mb-3">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 glass border-premium rounded-xl focus:border-premium-strong focus:outline-none transition-all duration-300 text-white placeholder-white/50"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-3">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 glass border-premium rounded-xl focus:border-premium-strong focus:outline-none transition-all duration-300 text-white placeholder-white/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-3">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-4 glass border-premium rounded-xl focus:border-premium-strong focus:outline-none transition-all duration-300 resize-none text-white placeholder-white/50"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 btn-premium rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover-premium-strong"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
