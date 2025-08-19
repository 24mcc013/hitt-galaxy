
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
      title: "E-Commerce Platform",
      slug: "ecommerce-platform",
      description: "A full-stack e-commerce solution with modern payment integration and inventory management.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full Stack"
    },
    {
      title: "AI Chat Application", 
      slug: "ai-chat-app",
      description: "Real-time chat application powered by AI with smart conversation features.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "OpenAI", "WebSocket", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "AI/ML"
    },
    {
      title: "Data Visualization Tool",
      slug: "data-viz-tool", 
      description: "Interactive dashboard for complex data analysis and visualization.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Data Science"
    },
    {
      title: "Mobile Banking App",
      slug: "mobile-banking",
      description: "Secure mobile banking application with biometric authentication.",
      image: "/placeholder.svg", 
      technologies: ["React Native", "Firebase", "Plaid API", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Mobile"
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
