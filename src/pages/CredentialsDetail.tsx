import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Building, Award, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const CredentialsDetail = () => {
  const { slug } = useParams();
  
  // Get credential data based on slug
  const getCredentialData = (slug: string) => {
    const credentials = {
      "gcp-ace": {
        title: "Google Cloud Certified Associate Cloud Engineer",
        institution: "Google Cloud",
        type: "Certification",
        date: "Valid till 12 Jun, 2027",
        summary: "Professional certification demonstrating expertise in Google Cloud Platform services and architecture.",
        description: "This certification validates expertise in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform. The exam covers GCP compute services, storage solutions, networking, security, and operations management. It demonstrates the ability to use Google Cloud Console and command-line interface to perform common platform-based tasks.",
        credentialId: "GCP-ACE-2024-CB001",
        verificationUrl: "https://cloud.google.com/certification/verify",
        skills: [
          "Google Cloud Platform",
          "Compute Engine", 
          "Kubernetes Engine",
          "Cloud Storage",
          "Cloud SQL",
          "IAM",
          "VPC Networking",
          "Cloud Monitoring"
        ],
        keyAchievements: [
          "Demonstrated proficiency in deploying and managing GCP resources",
          "Expertise in cloud security and identity access management",
          "Knowledge of cost optimization and performance monitoring",
          "Understanding of hybrid and multi-cloud architectures"
        ],
        relatedProjects: [
          {
            title: "Centralized Health Monitoring Platform",
            description: "Building a comprehensive monitoring solution using GCP services for infrastructure and security monitoring",
            link: "/works/health-monitoring"
          }
        ],
        validUntil: "12 Jun, 2027",
        continuingEducation: [
          "Google Cloud Next 2024 - Advanced Security Workshop",
          "Kubernetes Security Best Practices",
          "GCP Professional Cloud Architect Preparation"
        ]
      },
      "iso27001-lead-auditor": {
        title: "CQI and IRCA Certified ISO/IEC 27001:2013 Lead Auditor Training Course",
        institution: "CQI and IRCA",
        type: "Certification",
        date: "Valid till 02 Aug, 2027",
        summary: "Professional certification for conducting ISO/IEC 27001:2013 information security management system audits.",
        description: "This certification provides comprehensive training on ISO/IEC 27001:2013 standard requirements and lead auditor skills. It covers information security management system (ISMS) principles, risk assessment methodologies, audit planning and execution, and compliance verification. The certification enables conducting third-party audits and ensuring organizational compliance with international security standards.",
        credentialId: "IRCA-ISO27001-LA-2024-CB002",
        verificationUrl: "https://www.cqi.org/verify-auditor",
        skills: [
          "ISO/IEC 27001:2013",
          "Information Security Management",
          "Audit Planning",
          "Risk Assessment",
          "Compliance Management",
          "Security Controls",
          "Audit Reporting",
          "ISMS Implementation"
        ],
        keyAchievements: [
          "Qualified to lead ISO 27001 certification audits as a principal auditor",
          "Expert knowledge of information security management systems implementation",
          "Proficiency in risk-based auditing methodologies and techniques",
          "Understanding of international security compliance frameworks"
        ],
        relatedProjects: [
          {
            title: "Threat Detection Through AI Research",
            description: "Research work focusing on AI-based security solutions and threat detection mechanisms",
            link: "/research/threat-detection-ai"
          },
          {
            title: "Secure V2V Communication Framework",
            description: "Research on PUF and edge-assisted secure communication for intelligent transportation systems",
            link: "/research/secure-v2v-communication"
          }
        ],
        validUntil: "02 Aug, 2027",
        continuingEducation: [
          "ISO 27001:2022 Transition Training",
          "Cybersecurity Risk Management Advanced Course",
          "Information Security Governance and Management"
        ]
      }
    };
    
    return credentials[slug as keyof typeof credentials];
  };

  const credential = getCredentialData(slug || '');

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
          {credential ? (
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
          ) : (
            <div className="text-center">
              <h1 className="hero-title mb-6">Credential Not Found</h1>
              <p className="hero-subtitle">The requested credential could not be found.</p>
            </div>
          )}

          {/* Content */}
          {credential && (
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
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default CredentialsDetail;