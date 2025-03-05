
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      
      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        offsetTop: document.getElementById(section.id)?.offsetTop || 0
      }));
      
      // Find current section
      const currentSection = sectionElements.findLast((section) => 
        position >= section.offsetTop - 200
      );
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-8",
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-b" 
          : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-primary font-semibold">Shaheer Zeb</span>
        </motion.div>
        
        <motion.ul 
          className="hidden md:flex space-x-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {sections.map((section, index) => (
            <motion.li 
              key={section.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <button 
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative px-1 py-2 text-sm link-hover transition-colors",
                  activeSection === section.id 
                    ? "text-primary font-medium" 
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </motion.ul>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
