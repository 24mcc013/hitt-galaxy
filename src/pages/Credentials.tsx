
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Award, GraduationCap, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const Credentials = () => {
  const credentials = [
    {
      title: "Senior Full-Stack Developer",
      slug: "senior-fullstack-dev",
      institution: "TechCorp Solutions",
      type: "Work",
      date: "2022 - Present",
      summary: "Leading development of scalable web applications and mentoring junior developers.",
      description: "Responsible for architecting and developing complex web applications using modern technologies.",
      technologies: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Master of Computer Science",
      slug: "masters-cs",
      institution: "Stanford University", 
      type: "Education",
      date: "2020 - 2022",
      summary: "Specialized in Machine Learning and Distributed Systems with a focus on web technologies.",
      description: "Advanced coursework in algorithms, machine learning, and system design.",
      gpa: "3.9/4.0"
    },
    {
      title: "AWS Certified Solutions Architect",
      slug: "aws-certified",
      institution: "Amazon Web Services",
      type: "Certification", 
      date: "2023",
      summary: "Professional-level certification demonstrating expertise in AWS cloud architecture.",
      description: "Comprehensive certification covering cloud architecture, security, and best practices.",
      credentialId: "AWS-CSA-2023-CB001"
    },
    {
      title: "Full-Stack Developer",
      slug: "fullstack-dev",
      institution: "StartupXYZ",
      type: "Work",
      date: "2020 - 2022", 
      summary: "Built and deployed multiple web applications from concept to production.",
      description: "End-to-end development of customer-facing applications and internal tools.",
      technologies: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
      title: "Google Cloud Professional Developer",
      slug: "gcp-professional",
      institution: "Google Cloud",
      type: "Certification",
      date: "2023",
      summary: "Professional certification in Google Cloud Platform development and deployment.",
      description: "Advanced certification covering cloud development, DevOps, and application deployment.",
      credentialId: "GCP-PD-2023-CB002"
    },
    {
      title: "Bachelor of Engineering in Computer Science",
      slug: "bachelor-cs",
      institution: "MIT",
      type: "Education", 
      date: "2016 - 2020",
      summary: "Comprehensive computer science education with focus on software engineering.",
      description: "Strong foundation in computer science fundamentals and software development.",
      gpa: "3.8/4.0"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "Work": return Briefcase;
      case "Education": return GraduationCap;
      case "Certification": return Award;
      default: return Award;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Work": return "default";
      case "Education": return "secondary";
      case "Certification": return "outline";
      default: return "outline";
    }
  };

  // Sort by year (most recent first)
  const sortedCredentials = [...credentials].sort((a, b) => {
    const yearA = parseInt(a.date.split(" - ")[0] || a.date);
    const yearB = parseInt(b.date.split(" - ")[0] || b.date);
    return yearB - yearA;
  });

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
          <h1 className="hero-title mb-6">The Timeline</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            A journey through my professional experience, education, and certifications.
            Each milestone represents growth, learning, and achievement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
            
            <div className="space-y-8">
              {sortedCredentials.map((credential, index) => {
                const Icon = getIcon(credential.type);
                
                return (
                  <motion.div
                    key={credential.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background animate-twinkle" />
                    
                    <div className="ml-20">
                      <Card className="card-nebula group cursor-pointer">
                        <Link to={`/credentials/${credential.slug}`}>
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4 text-primary" />
                                <Badge variant={getTypeColor(credential.type)}>
                                  {credential.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                {credential.date}
                              </div>
                            </div>
                            
                            <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                              {credential.title}
                            </CardTitle>
                            
                            <CardDescription className="flex items-center gap-1 text-muted-foreground mb-2">
                              <Building className="h-3 w-3" />
                              {credential.institution}
                            </CardDescription>
                            
                            <CardDescription className="text-muted-foreground leading-relaxed">
                              {credential.summary}
                            </CardDescription>
                          </CardHeader>
                          
                          {credential.technologies && (
                            <CardContent>
                              <div className="flex flex-wrap gap-2">
                                {credential.technologies.map((tech) => (
                                  <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          )}
                        </Link>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Credentials;
