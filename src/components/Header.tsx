
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useTranslation();
  
  const sections = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') }
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
      
      // Find current section (without using findLast which caused the error)
      let currentSection = { id: 'home', offsetTop: 0 };
      
      for (const section of sectionElements) {
        if (position >= section.offsetTop - 200) {
          currentSection = section;
        }
      }
      
      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

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
          ? "bg-background/95 backdrop-blur-lg border-b shadow-sm" 
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
          <span className="text-primary font-semibold">{t('name')}</span>
        </motion.div>
        
        <div className="flex items-center gap-4">
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
                    "relative px-3 py-2 rounded-md text-sm transition-colors nav-hover",
                    activeSection === section.id 
                      ? "text-primary font-medium bg-primary/10" 
                      : "text-foreground/80 hover:text-foreground"
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
          
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            <div className="relative group">
              <button 
                className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Change language"
              >
                <Globe className="h-5 w-5" />
              </button>
              
              <div className="absolute right-0 mt-2 w-32 py-2 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <button 
                  onClick={() => changeLanguage('en')} 
                  className={cn(
                    "w-full px-4 py-2 text-left hover:bg-accent transition-colors rounded-sm",
                    language === 'en' ? 'text-primary font-medium' : ''
                  )}
                >
                  English
                </button>
                <button 
                  onClick={() => changeLanguage('ar')} 
                  className={cn(
                    "w-full px-4 py-2 text-left hover:bg-accent transition-colors rounded-sm",
                    language === 'ar' ? 'text-primary font-medium' : ''
                  )}
                >
                  العربية
                </button>
                <button 
                  onClick={() => changeLanguage('ur')} 
                  className={cn(
                    "w-full px-4 py-2 text-left hover:bg-accent transition-colors rounded-sm",
                    language === 'ur' ? 'text-primary font-medium' : ''
                  )}
                >
                  اردو
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
