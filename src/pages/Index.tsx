import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import StarField from "@/components/StarField";
import SimpleStarField from "@/components/SimpleStarField";
import InteractiveGalaxy from "@/components/InteractiveGalaxy";
import heroImage from "@/assets/chitt-headshot.jpg";

const Index = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Chitt-Bhavsar/", 
      label: "GitHub",
      username: "@Chitt-Bhavsar"
    },
    { 
      icon: Linkedin, 
      href: "https://in.linkedin.com/in/chitt-bhavsar", 
      label: "LinkedIn",
      username: "/in/chitt-bhavsar"
    },
    { 
      icon: Mail, 
      href: "mailto:chittbhavsar1511@gmail.com", 
      label: "Email",
      username: "chittbhavsar1511@gmail.com"
    },
  ];

  return (
    <div className="relative">
      <SimpleStarField />
      <Navigation />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
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
              className="hero-subtitle mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I craft digital experiences that bridge the gap between innovative design 
              and cutting-edge technology. Passionate about building scalable applications 
              that make a difference.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                className="btn-cosmic text-lg px-8 py-6"
                onClick={() => {
                  const nextSection = document.querySelector('section:nth-of-type(2)');
                  nextSection?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Explore My Universe
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
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
            className="flex justify-center order-1 lg:order-2 mt-8 lg:mt-16"
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
            Scroll to learn more
          </p>
          <ArrowDown className="h-5 w-5 text-primary mx-auto animate-bounce" />
        </motion.div>
      </motion.section>

      {/* Additional Content Section */}
      <section className="min-h-screen flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-stellar">
              Welcome to My Digital Universe
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Explore my portfolio of projects, research papers, and credentials. 
              Each represents a journey through the cosmos of technology and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card-nebula p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">Projects</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Full-stack applications and innovative solutions
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/works">View Projects</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-nebula p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-secondary">Research</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Published papers and technical explorations
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/research">Read Papers</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="card-nebula p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-accent">Credentials</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Certifications and professional achievements
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/credentials">View Credentials</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="card-nebula p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">Positions</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Leadership roles and responsibilities
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/positions">View Positions</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="card-nebula p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-secondary">Contact</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Get in touch for collaborations
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/contact">Contact Me</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
