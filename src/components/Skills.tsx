
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Skills = () => {
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

  const skillCategories = [
    {
      name: "Backend Technologies",
      skills: [
        "Node.js", "Express.js", "Nest.js", "MongoDB", "MySQL", "PostgreSQL", 
        "Firebase", "Redis", "GraphQL", "Hasura", "Apache Kafka", "gRPC",
        "Prometheus", "Grafana", "Stripe", "PayPal", "Elasticsearch", "Kibana"
      ]
    },
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD Pipelines"]
    },
    {
      name: "Software Engineering",
      skills: [
        "Microservices", "RESTful APIs", "Event-Driven Architecture", 
        "Performance Optimization", "Data Protection", "Security Compliance",
        "OOP", "Data Structures & Algorithms", "Low-Latency Applications"
      ]
    },
    {
      name: "Professional Skills",
      skills: [
        "Team Leadership", "Mentoring", "Solutions-Oriented", "System Scalability",
        "Cross-Team Collaboration", "Clean Code", "Documentation", "Agile Methodology"
      ]
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
            Technical Expertise
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
            Skills & Proficiencies
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
