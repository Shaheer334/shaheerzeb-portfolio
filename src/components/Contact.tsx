
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-b from-transparent to-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-primary text-sm font-medium px-3 py-1 rounded-full bg-primary/10 inline-block mb-4">
            Get In Touch
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
            Contact Me
          </motion.h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-muted-foreground">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
            </p>
            
            <div className="space-y-4 mt-8">
              <a 
                href="mailto:shaheerzeb1@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-card/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">shaheerzeb1@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+923000920039" 
                className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-card/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">(+92) 300-0920039</p>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    placeholder="Your message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-primary/20 disabled:opacity-70 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
