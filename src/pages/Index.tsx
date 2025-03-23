
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { useTranslation } from '@/hooks/useTranslation';

const Index = () => {
  const { language } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        
        // Check if section is in viewport
        if (sectionTop < window.innerHeight - 100 && sectionTop > -sectionHeight + 100) {
          section.classList.add('visible');
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set the font class based on language
  const fontClass = language === 'ar' || language === 'ur' ? 'font-arabic' : 'font-sans';
  // Set direction based on language
  const direction = language === 'ar' || language === 'ur' ? 'rtl' : 'ltr';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`min-h-screen ${fontClass}`}
        dir={direction}
      >
        <Header />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          {/* Contact component removed */}
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
