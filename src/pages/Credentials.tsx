
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
      title: "Google Cloud Certified Associate Cloud Engineer",
      slug: "gcp-ace",
      institution: "Google Cloud",
      type: "Certification",
      date: "Valid till 12 Jun, 2027",
      summary: "Professional certification demonstrating expertise in Google Cloud Platform services and architecture.",
      description: "Comprehensive certification covering GCP compute, storage, networking, security, and operations. Demonstrates ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.",
      credentialId: "GCP-ACE-2024-CB001",
      validityPeriod: "Valid till 12 Jun, 2027",
      verificationUrl: "https://cloud.google.com/certification/verify",
      skills: ["Google Cloud Platform", "Compute Engine", "Kubernetes", "Cloud Storage", "IAM", "Networking", "Monitoring", "DevOps"],
      achievements: [
        "Demonstrated proficiency in deploying and managing GCP resources",
        "Expertise in cloud security and identity management",
        "Knowledge of cost optimization and performance monitoring",
        "Understanding of hybrid and multi-cloud architectures"
      ]
    },
    {
      title: "CQI and IRCA Certified ISO/IEC 27001:2013 Lead Auditor Training Course",
      slug: "iso27001-lead-auditor",
      institution: "CQI and IRCA",
      type: "Certification",
      date: "Valid till 02 Aug, 2027",
      summary: "Professional certification for conducting ISO/IEC 27001:2013 information security management system audits.",
      description: "Comprehensive training and certification covering ISO/IEC 27001:2013 standard requirements, audit principles, and lead auditor skills. Enables conducting third-party audits of information security management systems and ensuring compliance with international security standards.",
      credentialId: "IRCA-ISO27001-LA-2024-CB002",
      validityPeriod: "Valid till 02 Aug, 2027",
      verificationUrl: "https://www.cqi.org/verify-auditor",
      skills: ["ISO/IEC 27001:2013", "Information Security Management", "Audit Planning", "Risk Assessment", "Compliance Management", "Security Controls", "Audit Reporting", "ISMS Implementation"],
      achievements: [
        "Qualified to lead ISO 27001 certification audits",
        "Expert knowledge of information security management systems",
        "Proficiency in risk-based auditing methodologies",
        "Understanding of international security compliance frameworks"
      ]
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
                          
                          {credential.skills && (
                            <CardContent>
                              <div className="flex flex-wrap gap-2">
                                {credential.skills.slice(0, 5).map((skill) => (
                                  <Badge key={skill} variant="outline" className="text-xs">
                                    {skill}
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
