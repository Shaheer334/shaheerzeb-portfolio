
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative px-6 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full pt-20 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <motion.span 
              className="text-primary inline-flex items-center text-sm font-medium px-3 py-1 rounded-full bg-primary/10 w-fit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Backend Developer
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Shaheer Zeb Khan
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Crafting scalable backend solutions with expertise in JavaScript, TypeScript, Python, and cloud services.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-primary/20"
              >
                Get in Touch
              </a>
              <a 
                href="#experience" 
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                View Experience
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30"></div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass p-8 rounded-2xl w-[80%] shadow-xl">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <pre className="text-xs md:text-sm font-mono text-foreground/80 overflow-hidden">
                    <span className="text-primary">const</span> <span className="text-blue-500">developer</span> = {'{'}<br/>
                    {'  '}name: <span className="text-green-500">"Shaheer Zeb Khan"</span>,<br/>
                    {'  '}role: <span className="text-green-500">"Senior Backend Developer"</span>,<br/>
                    {'  '}experience: <span className="text-orange-500">4</span>+,<br/>
                    {'  '}skills: [<span className="text-green-500">"Node.js"</span>, <span className="text-green-500">"TypeScript"</span>, <span className="text-green-500">"Python"</span>, <span className="text-green-500">"AWS"</span>, <span className="text-green-500">"GCP"</span>],<br/>
                    {'  '}passion: <span className="text-green-500">"Building scalable solutions"</span><br/>
                    {'}'}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8 text-primary/70" />
        </motion.div>
      </motion.div>
      
      {/* Background elements */}
      <div className="absolute top-20 right-20 h-64 w-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 h-64 w-64 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
