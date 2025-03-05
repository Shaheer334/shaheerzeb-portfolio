
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      company: "TripShepherd",
      position: "Senior Backend Developer",
      period: "May 2024 - Present",
      type: "Hybrid",
      highlights: [
        "Developed cloud functions on Google Cloud with high availability and fault tolerance",
        "Designed database schemas with event-driven architectures for scalable solutions",
        "Integrated AI-driven APIs (Google Vision) and built RESTful APIs with Node.js, Express.js, Nest.js",
        "Reduced API latency by 45ms and decreased server costs by over 44%",
        "Implemented security and data protection practices",
        "Used Agile methodology for development and Jira for project management"
      ]
    },
    {
      company: "QMH Technologies",
      position: "Lead Backend Developer",
      period: "June 2022 - April 2024",
      type: "Hybrid",
      highlights: [
        "Led a team of five developers designing scalable applications with microservices",
        "Integrated payment processing with Stripe and PayPal",
        "Managed AWS infrastructure with CI/CD pipelines, Docker, and Kubernetes",
        "Enhanced security with user authentication and authorization systems",
        "Streamlined database solutions with MongoDB, PostgreSQL, Redis, and MySQL",
        "Used Kafka for data streaming, boosting efficiency by 40%",
        "Optimized service communication using gRPC",
        "Improved system monitoring with Prometheus, Grafana, and Elasticsearch"
      ]
    },
    {
      company: "AKSA SDS",
      position: "Backend Developer",
      period: "September 2020 - May 2022",
      type: "Onsite",
      highlights: [
        "Developed microservices architecture for high-performance applications",
        "Implemented server-side templating and CSS preprocessors",
        "Improved backend performance by 15% through asynchronous programming",
        "Enhanced security with JWT 2.0 and Cloudflare Workers"
      ]
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
            Work Experience
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
            Professional Journey
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
                  <h4 className="font-medium mb-3">Key Contributions:</h4>
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
