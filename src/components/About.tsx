
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin, Mail, Linkedin, Github } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  
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

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-8 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-5 gap-10"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <span className="text-primary text-sm font-medium px-3 py-1 rounded-full bg-primary/10 inline-block mb-6">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Backend Engineer with <span className="text-primary">4+ years</span> of experience
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I specialize in backend and microservices development, building low-latency, high-availability applications with a focus on performance optimization and security compliance.
              </p>
              <p>
                With expertise in JavaScript, TypeScript, Python, and cloud services (AWS, GCP), I design scalable systems using event-driven architecture and asynchronous programming.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Islamabad, Pakistan</span>
              </div>
              <a href="mailto:shaheerzeb1@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <span>shaheerzeb1@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/shaheer-zeb-khan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
                <span>linkedin.com/in/shaheer-zeb-khan</span>
              </a>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <span>github.com/shaheerzebekhan</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-3">
            <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Career Highlights</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Professional Excellence</h4>
                    <p className="text-muted-foreground mt-1">
                      Led backend teams, designed scalable microservices, and reduced API latency by 45ms while decreasing server costs by over 44%.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-muted-foreground mt-1">
                      Master of Science in Information Technology from Quaid-i-Azam University with focus on Data Structures & Algorithms, OOP, Network Security, and Databases.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Certifications & Leadership</h4>
                    <p className="text-muted-foreground mt-1">
                      Diploma in Information Technology, Machine Learning certification from Andrew Ng. Former Director of Event Management Community Service Society and President of IIT Society at QAU.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-64 w-64 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;
