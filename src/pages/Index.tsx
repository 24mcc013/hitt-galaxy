import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import StarField from "@/components/StarField";
import InteractiveGalaxy from "@/components/InteractiveGalaxy";
import heroImage from "@/assets/chitt-headshot.jpg";

const Index = () => {
  const [showGalaxy, setShowGalaxy] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Show galaxy when user scrolls past hero section
      if (scrollPosition > window.innerHeight * 0.6) {
        setShowGalaxy(true);
      } else {
        setShowGalaxy(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/chittbhavsar", 
      label: "GitHub",
      username: "@chittbhavsar"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/chittbhavsar", 
      label: "LinkedIn",
      username: "/in/chittbhavsar"
    },
    { 
      icon: Mail, 
      href: "mailto:chitt@example.com", 
      label: "Email",
      username: "chitt@example.com"
    },
  ];

  return (
    <div className="relative">
      <StarField />
      <Navigation />
      
      {/* Act I: Hero Section */}
      <AnimatePresence>
        {!showGalaxy && (
          <motion.section
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              y: -100,
              scale: 0.8
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
          >
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-left"
              >
                <motion.h1 
                  className="hero-title mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Hi, I'm Chitt Bhavsar.
                  <br />
                  <span className="text-stellar">A Creative Full-Stack Developer.</span>
                </motion.h1>
                
                <motion.p 
                  className="hero-subtitle mb-8 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  I craft digital experiences that bridge the gap between innovative design 
                  and cutting-edge technology. Passionate about building scalable applications 
                  that make a difference.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Button 
                    className="btn-cosmic text-lg px-8 py-6"
                    onClick={() => {
                      window.scrollTo({ 
                        top: window.innerHeight, 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Explore My Universe
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                        title={social.username}
                      >
                        <social.icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </motion.div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-nebula rounded-full blur-3xl opacity-30 animate-pulse" />
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
                    <img
                      src={heroImage}
                      alt="Chitt Bhavsar - Creative Full-Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            >
              <p className="text-muted-foreground text-sm mb-2">
                Scroll to explore my galaxy
              </p>
              <ArrowDown className="h-5 w-5 text-primary mx-auto animate-bounce" />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Act II: Interactive Galaxy */}
      <AnimatePresence>
        {showGalaxy && (
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed inset-0 z-20"
          >
            <InteractiveGalaxy />
          </motion.section>
        )}
      </AnimatePresence>

      {/* Spacer for scroll trigger */}
      <div className="h-screen" />
    </div>
  );
};

export default Index;
