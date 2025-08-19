
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const WorkDetail = () => {
  const { slug } = useParams();
  
  // Projects data
  const projects = {
    "phishguard-phishing-detector": {
      title: "PhishGuard - Phishing Detector",
      description: "Full-stack web application that detects potentially malicious or phishing URLs with confidence scoring and detailed analysis.",
      longDescription: "PhishGuard is a comprehensive phishing detection application that helps users identify potentially dangerous URLs before clicking on them. The application uses machine learning algorithms to analyze URL patterns, domain characteristics, and content features to provide accurate phishing detection with confidence scoring. Built with a modern React frontend and Flask backend, it offers real-time analysis, detailed explanations, and a comprehensive dashboard for tracking detection history.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Flask", "Python", "Scikit-learn", "SQLite", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chitt-Bhavsar/PhishGard-Phishing-Detector",
      category: "Security",
      features: [
        "Real-time URL analysis and phishing detection",
        "Confidence scoring for each analysis result",
        "Detailed explanation of detection reasoning",
        "Dashboard with statistics and visualizations",
        "Recent scans history tracking",
        "Machine learning-based classification",
        "Responsive design for all devices",
        "SQLite database for data persistence"
      ],
      challenges: [
        {
          title: "Machine Learning Integration",
          description: "Integrated scikit-learn machine learning models with the Flask backend to provide accurate phishing detection while maintaining fast response times."
        },
        {
          title: "Real-time Analysis",
          description: "Developed efficient URL feature extraction and analysis pipeline to provide instant feedback to users without compromising accuracy."
        },
        {
          title: "User Experience",
          description: "Created an intuitive interface that clearly communicates security risks to users while providing educational explanations of the detection process."
        }
      ],
      results: [
        "85%+ accuracy in phishing detection",
        "Sub-second response times",
        "Comprehensive security analysis",
        "User-friendly interface design"
      ]
    },
    "threat-detection-ai": {
      title: "Threat Detection Through AI",
      description: "Cybersecurity threat detection system using machine learning algorithms on the CIC-IDS2017 dataset with feature selection and evaluation.",
      longDescription: "This comprehensive cybersecurity research project implements machine learning algorithms for threat detection using the CIC-IDS2017 dataset. The system processes network traffic data through multiple stages including preprocessing, attack classification, feature selection, and machine learning evaluation. It supports detection of 12 different attack types and evaluates seven different ML algorithms to determine optimal detection strategies for various threat scenarios.",
      image: "/placeholder.svg",
      technologies: ["Python", "Machine Learning", "Jupyter", "CIC-IDS2017", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chitt-Bhavsar/Threat-Detection-Through-Artificial-Intelligence",
      category: "AI/ML",
      features: [
        "Multi-stage data preprocessing pipeline",
        "Support for 12 different attack types",
        "Feature selection with weight analysis",
        "Seven machine learning algorithm evaluation",
        "Comprehensive results visualization",
        "Box and whisker plot generation",
        "Attack-specific file generation",
        "Performance metrics analysis"
      ],
      challenges: [
        {
          title: "Large Dataset Processing",
          description: "Efficiently processed the comprehensive CIC-IDS2017 dataset containing millions of network traffic records while maintaining system performance."
        },
        {
          title: "Feature Engineering",
          description: "Implemented sophisticated feature selection algorithms to identify the most relevant features for each attack type, improving detection accuracy."
        },
        {
          title: "Multi-Algorithm Evaluation",
          description: "Designed a robust evaluation framework to compare seven different machine learning algorithms across multiple attack scenarios."
        }
      ],
      results: [
        "12 attack types successfully classified",
        "7 ML algorithms comprehensively evaluated",
        "Optimized feature selection achieved",
        "Detailed performance visualizations generated"
      ]
    },
    "jobssync-setup": {
      title: "JobsSync Setup",
      description: "Comprehensive CI/CD pipeline setup with Jenkins, Docker, Maven, and AWS CLI for automated deployment workflows.",
      longDescription: "JobsSync Setup provides a complete infrastructure automation solution for modern DevOps workflows. This project includes detailed setup procedures for Jenkins CI/CD server, Docker containerization, Maven build management, and AWS CLI integration. It covers both Jenkins server configuration and deployment server setup, providing a complete end-to-end automation pipeline for Java applications with Docker containerization and cloud deployment capabilities.",
      image: "/placeholder.svg",
      technologies: ["Jenkins", "Docker", "Maven", "AWS CLI", "Java", "Ubuntu", "Shell Scripting", "CI/CD"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chitt-Bhavsar/JobsSync-Setup",
      category: "DevOps",
      features: [
        "Complete Jenkins server setup and configuration",
        "Docker installation and container management",
        "Maven build automation setup",
        "AWS CLI integration for cloud deployment",
        "Deployment server configuration",
        "Automated installation scripts",
        "System dependency management",
        "Service configuration and enablement"
      ],
      challenges: [
        {
          title: "Service Integration",
          description: "Coordinated multiple services (Jenkins, Docker, Maven, AWS CLI) to work seamlessly together while maintaining security and performance."
        },
        {
          title: "Environment Consistency",
          description: "Ensured consistent deployment environments across different servers and cloud platforms through standardized setup procedures."
        },
        {
          title: "Automation Pipeline",
          description: "Created reliable automation workflows that handle code compilation, testing, containerization, and deployment with minimal manual intervention."
        }
      ],
      results: [
        "Fully automated CI/CD pipeline",
        "Zero-downtime deployment capability",
        "Multi-environment support",
        "Scalable infrastructure setup"
      ]
    },
    "live-sharing-clipboard": {
      title: "Live Sharing Clipboard",
      description: "Real-time clipboard sharing application built with modern web technologies for seamless cross-device content sharing.",
      longDescription: "Live Sharing Clipboard is a modern web application that enables real-time clipboard sharing across multiple devices and platforms. Built with TypeScript and modern web technologies, it provides a seamless way to share text, links, and other clipboard content instantly between connected devices. The application focuses on simplicity, security, and real-time synchronization to enhance productivity for users working across multiple devices.",
      image: "/placeholder.svg",
      technologies: ["TypeScript", "React", "Real-time Sync", "WebSocket", "Modern Web APIs", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/Chitt-Bhavsar/Live-Sharing-Clipboard",
      category: "Productivity",
      features: [
        "Real-time clipboard synchronization",
        "Cross-device compatibility",
        "Secure content sharing",
        "Modern TypeScript implementation",
        "Responsive web design",
        "Instant content updates",
        "User-friendly interface",
        "Browser clipboard API integration"
      ],
      challenges: [
        {
          title: "Real-time Synchronization",
          description: "Implemented efficient real-time synchronization mechanisms to ensure instant clipboard updates across all connected devices."
        },
        {
          title: "Cross-Platform Compatibility",
          description: "Designed the application to work seamlessly across different operating systems and browser environments."
        },
        {
          title: "Security Implementation",
          description: "Ensured secure transmission and handling of clipboard data while maintaining user privacy and data protection."
        }
      ],
      results: [
        "Instant cross-device synchronization",
        "Secure data transmission",
        "Universal browser compatibility",
        "Enhanced productivity workflow"
      ]
    },
    "health-monitoring-vapt": {
      title: "Centralized Health Monitoring + VA/PT",
      description: "Self-hosted platform for comprehensive health monitoring, vulnerability assessment, and penetration testing with daily reporting and Grafana dashboards.",
      longDescription: "This comprehensive security and monitoring platform integrates health monitoring, vulnerability assessment, and penetration testing into a unified system. Built with modern DevOps practices, it provides automated security scanning, real-time monitoring, and detailed reporting capabilities. The platform uses industry-standard tools like Prometheus, Grafana, OpenVAS, and OWASP ZAP to deliver enterprise-grade security monitoring with customizable dashboards and automated daily reports.",
      image: "/placeholder.svg",
      technologies: ["Prometheus", "Grafana", "OpenVAS", "OWASP ZAP", "FastAPI", "PostgreSQL", "Docker", "Celery", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Security",
      features: [
        "Comprehensive health and performance monitoring",
        "Automated vulnerability assessment scanning",
        "Safe penetration testing capabilities",
        "Custom Grafana dashboard visualization",
        "Daily HTML/PDF report generation",
        "Multi-scanner integration (OpenVAS, ZAP, Nuclei)",
        "Real-time alerting and notifications",
        "Scalable Docker-based deployment",
        "RESTful API for integration",
        "Asset and findings management"
      ],
      challenges: [
        {
          title: "Multi-Tool Integration",
          description: "Orchestrated complex integration between monitoring tools (Prometheus, Grafana), security scanners (OpenVAS, OWASP ZAP), and custom reporting systems while maintaining data consistency."
        },
        {
          title: "Scalable Architecture",
          description: "Designed a scalable architecture using Docker containers and microservices that can handle multiple concurrent scans and monitoring tasks across diverse infrastructure."
        },
        {
          title: "Automated Reporting",
          description: "Developed comprehensive reporting pipeline that aggregates security findings, health metrics, and performance data into actionable daily reports with executive summaries."
        }
      ],
      results: [
        "Unified security and health monitoring",
        "Automated daily security reports",
        "Real-time threat detection",
        "Comprehensive vulnerability tracking",
        "Scalable monitoring infrastructure"
      ]
    }
  };

  const project = projects[slug as keyof typeof projects] || projects["phishguard-phishing-detector"];

  return (
    <div className="min-h-screen relative">
      <SimpleStarField />
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="hover:text-primary">
            <Link to="/works" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Works
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">
              {project.category}
            </Badge>
            <h1 className="hero-title mb-6">{project.title}</h1>
            <p className="hero-subtitle mb-8">{project.description}</p>
            
            <div className="flex gap-4 mb-8">
              <Button className="btn-cosmic" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stellar">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stellar">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-twinkle" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stellar">Technical Challenges</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="card-nebula p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stellar">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="card-nebula p-6 text-center">
                    <p className="text-lg font-medium text-primary">{result}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default WorkDetail;
