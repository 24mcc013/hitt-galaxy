
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const Works = () => {
  const projects = [
    {
      title: "PhishGuard - Phishing Detector",
      slug: "phishguard-phishing-detector",
      description: "Full-stack web application that detects potentially malicious or phishing URLs with confidence scoring and detailed analysis.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Flask", "Python", "Scikit-learn", "SQLite"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chitt-Bhavsar/PhishGard-Phishing-Detector",
      category: "Security"
    },
    {
      title: "Threat Detection Through AI", 
      slug: "threat-detection-ai",
      description: "Cybersecurity threat detection system using machine learning algorithms on the CIC-IDS2017 dataset with feature selection and evaluation.",
      image: "/placeholder.svg",
      technologies: ["Python", "Machine Learning", "Jupyter", "CIC-IDS2017", "Feature Selection"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chitt-Bhavsar/Threat-Detection-Through-Artificial-Intelligence",
      category: "AI/ML"
    },
    {
      title: "JobsSync Setup",
      slug: "jobssync-setup", 
      description: "Comprehensive CI/CD pipeline setup with Jenkins, Docker, Maven, and AWS CLI for automated deployment workflows.",
      image: "/placeholder.svg",
      technologies: ["Jenkins", "Docker", "Maven", "AWS CLI", "Java", "DevOps"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chitt-Bhavsar/JobsSync-Setup",
      category: "DevOps"
    },
    {
      title: "Live Sharing Clipboard",
      slug: "live-sharing-clipboard",
      description: "Real-time clipboard sharing application built with modern web technologies for seamless cross-device content sharing.",
      image: "/placeholder.svg", 
      technologies: ["TypeScript", "React", "Real-time Sync", "Web Technologies"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chitt-Bhavsar/Live-Sharing-Clipboard",
      category: "Productivity"
    },
    {
      title: "Centralized Health Monitoring + VA/PT",
      slug: "health-monitoring-vapt",
      description: "Self-hosted platform for comprehensive health monitoring, vulnerability assessment, and penetration testing with daily reporting and Grafana dashboards.",
      image: "/placeholder.svg", 
      technologies: ["Prometheus", "Grafana", "OpenVAS", "OWASP ZAP", "FastAPI", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Security"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <SimpleStarField />
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6">The Observatory</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            Explore my collection of projects, from full-stack applications to experimental prototypes.
            Each one represents a journey of learning and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-nebula h-full group cursor-pointer">
                <Link to={`/works/${project.slug}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Live
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Github className="h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Works;
