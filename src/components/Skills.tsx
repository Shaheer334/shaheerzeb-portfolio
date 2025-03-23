
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const { t } = useTranslation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Get the skills data and ensure they are arrays
  const backendSkills = Array.isArray(t('skills.backend')) 
    ? t('skills.backend') 
    : [t('skills.backend')];
    
  const languageSkills = Array.isArray(t('skills.languages')) 
    ? t('skills.languages') 
    : [t('skills.languages')];
    
  const cloudSkills = Array.isArray(t('skills.cloud')) 
    ? t('skills.cloud') 
    : [t('skills.cloud')];
    
  const engineeringSkills = Array.isArray(t('skills.engineering')) 
    ? t('skills.engineering') 
    : [t('skills.engineering')];
    
  const professionalSkills = Array.isArray(t('skills.professional')) 
    ? t('skills.professional') 
    : [t('skills.professional')];

  const skillCategories = [
    {
      name: t('skills.categories.backend'),
      skills: backendSkills
    },
    {
      name: t('skills.categories.languages'),
      skills: languageSkills
    },
    {
      name: t('skills.categories.cloud'),
      skills: cloudSkills
    },
    {
      name: t('skills.categories.engineering'),
      skills: engineeringSkills
    },
    {
      name: t('skills.categories.professional'),
      skills: professionalSkills
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-8 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-primary text-sm font-medium px-3 py-1 rounded-full bg-primary/10 inline-block mb-4">
            {t('skills.title')}
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
            {t('skills.subtitle')}
          </motion.h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl shadow-lg p-6 md:p-8 h-full transition-transform duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.name}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { 
                        scale: 1, 
                        opacity: 1,
                        transition: { 
                          delay: 0.03 * i,
                          type: 'spring',
                          stiffness: 100,
                          damping: 10
                        } 
                      }
                    }}
                    className="px-3 py-1 bg-secondary rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-96 w-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Skills;
