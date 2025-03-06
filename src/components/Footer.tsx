
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t, language } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isRtl = language === 'ar' || language === 'ur';
  
  return (
    <footer className="py-12 px-6 md:px-8 bg-card border-t">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-center ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-6 md:mb-0 ${isRtl ? 'text-right' : 'text-left'}`}
          >
            <span className="text-xl font-semibold">{t('name')}</span>
            <p className="text-muted-foreground mt-1">Senior Backend Developer</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-5"
          >
            <a 
              href="https://github.com/shaheerzebekhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shaheer-zeb-khan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:shaheerzeb1@gmail.com"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center ${isRtl ? 'md:flex-row-reverse' : ''}`}
        >
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} {t('name')}. {t('footer.rights')}
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className={`flex flex-wrap gap-6 justify-center ${isRtl ? 'flex-row-reverse' : ''}`}>
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.experience')}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.skills')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
