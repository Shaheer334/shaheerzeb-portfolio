
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Experience = () => {
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
        staggerChildren: 0.1,
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

  // Get the experience data structures from the translation file
  const tripshepherdPoints = Array.isArray(t('experience.roles.tripshepherd.points')) 
    ? t('experience.roles.tripshepherd.points') 
    : [t('experience.roles.tripshepherd.points')];
    
  const qmhPoints = Array.isArray(t('experience.roles.qmh.points')) 
    ? t('experience.roles.qmh.points') 
    : [t('experience.roles.qmh.points')];
    
  const aksaPoints = Array.isArray(t('experience.roles.aksa.points')) 
    ? t('experience.roles.aksa.points') 
    : [t('experience.roles.aksa.points')];

  const experiences = [
    {
      company: t('experience.roles.tripshepherd.company'),
      position: t('experience.roles.tripshepherd.title'),
      period: t('experience.roles.tripshepherd.period'),
      type: t('experience.roles.tripshepherd.type'),
      highlights: tripshepherdPoints
    },
    {
      company: t('experience.roles.qmh.company'),
      position: t('experience.roles.qmh.title'),
      period: t('experience.roles.qmh.period'),
      type: t('experience.roles.qmh.type'),
      highlights: qmhPoints
    },
    {
      company: t('experience.roles.aksa.company'),
      position: t('experience.roles.aksa.title'),
      period: t('experience.roles.aksa.period'),
      type: t('experience.roles.aksa.type'),
      highlights: aksaPoints
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-8 bg-secondary/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-primary text-sm font-medium px-3 py-1 rounded-full bg-primary/10 inline-block mb-4">
            {t('experience.title')}
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
            {t('experience.subtitle')}
          </motion.h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-10"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <span className="text-primary font-semibold text-lg">{exp.company}</span>
                    <h3 className="text-xl font-bold mt-1">{exp.position}</h3>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="text-muted-foreground">{exp.period}</span>
                    <div className="inline-flex items-center mt-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                      {exp.type}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3">{t('experience.contributions')}</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
