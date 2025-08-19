import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import StarField from "@/components/StarField";

const WorkDetail = () => {
  const { slug } = useParams();
  
  // Mock data - in a real app, this would come from a CMS or API
  const project = {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built with modern technologies",
    longDescription: "This full-stack e-commerce platform represents a complete solution for online retail businesses. Built with scalability and performance in mind, it features a modern React frontend, robust Node.js backend, and PostgreSQL database with Redis caching for optimal performance.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Full Stack",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order management system",
      "Admin dashboard for inventory management",
      "Real-time inventory updates",
      "Email notifications",
      "Responsive design for all devices"
    ],
    challenges: [
      {
        title: "Scalable Architecture",
        description: "Designed a microservices architecture that can handle high traffic loads and scale horizontally."
      },
      {
        title: "Payment Security",
        description: "Implemented secure payment processing with PCI compliance and fraud detection."
      },
      {
        title: "Real-time Updates",
        description: "Built real-time inventory management system using WebSockets and Redis pub/sub."
      }
    ],
    results: [
      "99.9% uptime with load balancing",
      "Sub-200ms response times",
      "Handles 10,000+ concurrent users",
      "Reduced checkout abandonment by 35%"
    ]
  };

  return (
    <div className="min-h-screen relative">
      <StarField />
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