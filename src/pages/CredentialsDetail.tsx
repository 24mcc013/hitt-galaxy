import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Building, Award, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const CredentialsDetail = () => {
  const { slug } = useParams();
  
  // Mock data - in a real app, this would come from a CMS or API
  const credential = {
    title: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    type: "Certification",
    date: "2023",
    summary: "Professional-level certification demonstrating expertise in AWS cloud architecture.",
    description: "The AWS Certified Solutions Architect - Professional certification validates advanced technical skills and experience in designing distributed applications and systems on the AWS platform. This certification demonstrates expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
    credentialId: "AWS-CSA-2023-CB001",
    verificationUrl: "https://aws.amazon.com/verification/AWS-CSA-2023-CB001",
    skills: [
      "Cloud Architecture Design",
      "AWS Services Implementation", 
      "Security and Compliance",
      "Cost Optimization",
      "Performance Optimization",
      "Disaster Recovery Planning",
      "Migration Strategies",
      "Monitoring and Logging"
    ],
    keyAchievements: [
      "Passed with 92% score on first attempt",
      "Demonstrated expertise in 15+ AWS services",
      "Designed solutions for enterprise-scale applications",
      "Validated knowledge of security best practices"
    ],
    relatedProjects: [
      {
        title: "E-Commerce Platform",
        description: "Deployed scalable e-commerce solution using AWS services",
        link: "/works/ecommerce-platform"
      },
      {
        title: "Data Analytics Pipeline", 
        description: "Built real-time data processing pipeline on AWS",
        link: "/works/data-pipeline"
      }
    ],
    validUntil: "2026",
    continuingEducation: [
      "AWS re:Invent 2023 Conference",
      "AWS Advanced Networking Workshop",
      "Cloud Security Best Practices Course"
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Work": return "default";
      case "Education": return "secondary"; 
      case "Certification": return "outline";
      default: return "outline";
    }
  };

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
            <Link to="/credentials" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Timeline
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
            <div className="flex items-center gap-2 mb-4">
              <Badge variant={getTypeColor(credential.type)}>
                {credential.type}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {credential.date}
              </div>
            </div>
            
            <h1 className="hero-title mb-6">{credential.title}</h1>
            
            <div className="flex items-center gap-1 text-lg text-muted-foreground mb-6">
              <Building className="h-4 w-4" />
              {credential.institution}
            </div>

            <p className="hero-subtitle mb-8">{credential.summary}</p>
            
            <div className="flex gap-4 mb-8">
              {credential.verificationUrl && (
                <Button className="btn-cosmic" asChild>
                  <a
                    href={credential.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Award className="h-4 w-4" />
                    Verify Credential
                  </a>
                </Button>
              )}
            </div>

            {credential.credentialId && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span className="font-medium">Credential ID:</span>
                <code className="bg-muted/30 px-2 py-1 rounded">
                  {credential.credentialId}
                </code>
              </div>
            )}

            {credential.validUntil && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">Valid Until:</span>
                <span>{credential.validUntil}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stellar">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {credential.description}
              </p>
            </motion.section>

            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stellar">Key Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {credential.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-twinkle" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stellar">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {credential.keyAchievements.map((achievement, index) => (
                  <div key={index} className="card-nebula p-6">
                    <p className="text-center font-medium text-primary">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Related Projects */}
            {credential.relatedProjects && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-stellar">Related Projects</h2>
                <div className="space-y-4">
                  {credential.relatedProjects.map((project, index) => (
                    <div key={index} className="card-nebula p-6">
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {project.description}
                      </p>
                      <Button variant="ghost" asChild className="text-primary p-0 h-auto">
                        <Link to={project.link} className="flex items-center gap-1">
                          View Project
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Continuing Education */}
            {credential.continuingEducation && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-stellar">Continuing Education</h2>
                <div className="space-y-3">
                  {credential.continuingEducation.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-twinkle" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CredentialsDetail;