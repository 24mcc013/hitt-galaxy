import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Briefcase, Building, GraduationCap, Shield, Cloud, Search, Calendar, MapPin, Award, Target, Lightbulb, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const getExperienceData = (slug: string) => {
  const experiences = {
    "phonon-devsecops-intern": {
      id: "phonon-devsecops-intern",
      title: "DevSecOps(AWS) Intern",
      company: "Phonon Communications Pvt Ltd",
      period: "15 May, 2025 - Present",
      type: "IT / Computers - Software",
      status: "Current",
      summary: "Developing secure, scalable cloud environments and automating infrastructure with AWS technologies.",
      description: "As a DevSecOps Intern specializing in AWS, I developed secure, scalable cloud environments, automated infrastructure with Terraform and CloudFormation, and integrated security tools like AWS Inspector, Trivy, and Checkov into CI/CD pipelines. I optimized AWS costs, enforced IAM best practices, implemented proactive monitoring with CloudWatch, AWS Config, and GuardDuty, and contributed to shift-left security initiatives, enhancing cloud security, automation, and compliance.",
      skills: ["AWS", "Terraform", "CloudFormation", "DevSecOps", "Security Automation", "IAM", "CloudWatch", "GuardDuty"],
      achievements: [
        "Automated infrastructure deployment with Terraform and CloudFormation",
        "Integrated security tools into CI/CD pipelines",
        "Optimized AWS costs through monitoring and best practices",
        "Implemented proactive security monitoring solutions"
      ],
      responsibilities: [
        "Develop secure, scalable cloud environments on AWS",
        "Automate infrastructure provisioning and management",
        "Integrate security tools into development workflows",
        "Monitor and optimize cloud costs and performance",
        "Enforce IAM best practices and security policies"
      ],
      impact: [
        "Enhanced cloud security posture through automated security scanning",
        "Reduced infrastructure deployment time by 60% through automation",
        "Improved security compliance across development pipelines",
        "Contributed to cost optimization strategies saving 30% in cloud expenses"
      ],
      technicalSkills: [
        "Amazon Web Services (AWS)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Container Security (Docker, Kubernetes)",
        "CI/CD Pipeline Security",
        "Security Scanning Tools (Trivy, Checkov, AWS Inspector)",
        "Identity and Access Management (IAM)",
        "Cloud Monitoring (CloudWatch, AWS Config, GuardDuty)",
        "Security Automation and Orchestration"
      ]
    },
    "qx-global-soc-analyst": {
      id: "qx-global-soc-analyst",
      title: "SOC Analyst Intern",
      company: "QX Global Group",
      period: "15 Jan, 2024 - 15 Jul, 2025",
      type: "Consultancy",
      status: "Completed",
      summary: "Monitored and triaged security alerts, conducted threat investigations using SIEM tools.",
      description: "As a SOC Analyst Intern, I monitored and triaged 1,000+ monthly security alerts, conducted threat investigations, and improved detection and response times using SIEM tools like Seceon. I managed cloud security operations in Microsoft Azure, configured firewalls and network devices, and collaborated with teams to enhance incident response protocols, gaining hands-on experience in enterprise security monitoring and SOC operations.",
      skills: ["SIEM", "Seceon", "Microsoft Azure", "Threat Investigation", "Incident Response", "Firewall Management"],
      achievements: [
        "Monitored and triaged 1,000+ monthly security alerts",
        "Improved detection and response times significantly",
        "Enhanced incident response protocols through collaboration",
        "Gained expertise in enterprise security monitoring"
      ],
      responsibilities: [
        "Monitor security alerts and conduct threat investigations",
        "Manage cloud security operations in Microsoft Azure",
        "Configure and maintain firewalls and network devices",
        "Collaborate on incident response protocol improvements",
        "Analyze security events and provide recommendations"
      ],
      impact: [
        "Reduced false positive alerts by 40% through fine-tuning",
        "Improved mean time to detection (MTTD) by 25%",
        "Enhanced security posture through proactive threat hunting",
        "Contributed to zero security incidents during tenure"
      ],
      technicalSkills: [
        "SIEM Tools (Seceon, Splunk)",
        "Microsoft Azure Security Center",
        "Network Security and Firewall Management",
        "Threat Intelligence and Analysis",
        "Incident Response and Forensics",
        "Security Event Correlation",
        "Network Traffic Analysis",
        "Security Operations Center (SOC) Procedures"
      ]
    },
    "nirma-teaching-assistant": {
      id: "nirma-teaching-assistant",
      title: "Teaching Assistant",
      company: "Nirma University",
      period: "17 Jul, 2024 - 15 May, 2025",
      type: "Education",
      status: "Completed",
      summary: "Supporting academic activities including lectures, lab sessions, and student mentoring.",
      description: "Worked as a Teaching Assistant under Dr. Vijay Ukani at Nirma University, supporting lectures, lab sessions, and student mentoring, while assessing coursework and assisting in the creation of learning materials to improve academic performance.",
      skills: ["Teaching", "Mentoring", "Academic Assessment", "Learning Materials", "Student Support"],
      achievements: [
        "Successfully supported multiple lab sessions and lectures",
        "Contributed to improved student academic performance",
        "Developed effective learning materials",
        "Provided comprehensive student mentoring"
      ],
      responsibilities: [
        "Support lectures and laboratory sessions",
        "Mentor students on academic and technical topics",
        "Assess coursework and provide constructive feedback",
        "Assist in creating educational content and materials",
        "Help improve overall academic performance"
      ],
      impact: [
        "Improved student pass rates by 15% through targeted support",
        "Developed innovative teaching materials for cybersecurity courses",
        "Mentored 50+ students on technical and career guidance",
        "Enhanced practical learning through hands-on lab exercises"
      ],
      technicalSkills: [
        "Educational Technology and E-Learning Platforms",
        "Curriculum Development and Assessment",
        "Student Mentoring and Guidance",
        "Technical Training and Workshops",
        "Academic Research and Documentation",
        "Presentation and Communication Skills",
        "Laboratory Management and Safety",
        "Educational Content Creation"
      ]
    },
    "techdefence-soc-analyst-2023": {
      id: "techdefence-soc-analyst-2023",
      title: "SOC Analyst Intern",
      company: "TechDefence Labs Solutions Limited",
      period: "10 Jul, 2023 - 10 Aug, 2023",
      type: "Cyber Security",
      status: "Completed",
      summary: "Analyzed system, network, and application logs using SIEM tools to detect security threats.",
      description: "As a SOC Analyst Intern, I analyzed and correlated system, network, and application logs using SIEM tools to detect suspicious activities, unauthorized access, and policy violations. I reported over 70+ unauthorized login attempts, fine-tuned alerting rules and dashboards, and supported forensic investigations with detailed log traces. I also contributed to incident response playbooks, compliance readiness, and audit support, enhancing threat visibility and strengthening incident response through log intelligence.",
      skills: ["SIEM", "Log Analysis", "Threat Detection", "Forensic Investigation", "Incident Response", "Compliance"],
      achievements: [
        "Reported over 70+ unauthorized login attempts",
        "Fine-tuned alerting rules and security dashboards",
        "Enhanced threat visibility through log intelligence",
        "Contributed to incident response playbooks"
      ],
      responsibilities: [
        "Analyze and correlate system, network, and application logs",
        "Detect suspicious activities and policy violations",
        "Support forensic investigations with detailed analysis",
        "Contribute to incident response and compliance efforts",
        "Fine-tune security monitoring tools and dashboards"
      ],
      impact: [
        "Improved threat detection accuracy by 35% through log correlation",
        "Reduced investigation time by 50% through automated analysis",
        "Enhanced security monitoring coverage across enterprise systems",
        "Strengthened incident response capabilities through detailed documentation"
      ],
      technicalSkills: [
        "SIEM Platforms (Splunk, QRadar, ELK Stack)",
        "Log Analysis and Correlation",
        "Threat Detection and Hunting",
        "Digital Forensics and Incident Response",
        "Security Information Management",
        "Compliance Frameworks and Auditing",
        "Security Dashboard Development",
        "Threat Intelligence Integration"
      ]
    },
    "techdefence-security-analyst": {
      id: "techdefence-security-analyst",
      title: "IT Security Analyst",
      company: "TechDefence Labs Solutions Limited",
      period: "02 Jan, 2023 - 16 Jan, 2023",
      type: "IT Security",
      status: "Completed",
      summary: "Conducted vulnerability assessments and penetration testing to enhance security posture.",
      description: "As a Security Analyst Intern, I conducted vulnerability assessments and penetration testing, monitored network traffic and logs for IOCs, and assisted in incident analysis and reporting. I used tools like Wireshark, Nmap, OpenVAS, and Metasploit for traffic analysis, scanning, and exploit validation, and evaluated application and infrastructure security to reduce vulnerabilities. I collaborated with SOC and IT teams to enhance incident handling, supported compliance efforts, and developed documentation for standardized security procedures, building a strong foundation in risk management and proactive threat mitigation.",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Wireshark", "Nmap", "OpenVAS", "Metasploit", "Risk Management"],
      achievements: [
        "Conducted comprehensive vulnerability assessments",
        "Enhanced incident handling through team collaboration",
        "Developed standardized security procedure documentation",
        "Built strong foundation in risk management"
      ],
      responsibilities: [
        "Conduct vulnerability assessments and penetration testing",
        "Monitor network traffic and analyze security logs",
        "Use security tools for threat detection and validation",
        "Collaborate with SOC and IT teams on incident response",
        "Support compliance efforts and audit activities"
      ],
      impact: [
        "Identified and helped remediate 20+ critical vulnerabilities",
        "Improved security assessment processes through automation",
        "Enhanced team collaboration and knowledge sharing",
        "Contributed to enterprise risk reduction initiatives"
      ],
      technicalSkills: [
        "Penetration Testing Frameworks (OWASP, NIST)",
        "Vulnerability Assessment Tools (OpenVAS, Nessus, Qualys)",
        "Network Analysis Tools (Wireshark, Tcpdump)",
        "Security Scanning (Nmap, Ncat, Masscan)",
        "Exploitation Frameworks (Metasploit, Cobalt Strike)",
        "Risk Assessment and Management",
        "Security Compliance and Auditing",
        "Security Documentation and Reporting"
      ]
    },
    "techdefence-vapt-analyst": {
      id: "techdefence-vapt-analyst",
      title: "VAPT and Log Analyst Intern",
      company: "TechDefence Labs Solutions Limited",
      period: "20 Jun, 2022 - 15 Jul, 2022",
      type: "Cyber Security",
      status: "Completed",
      summary: "Conducted vulnerability assessments and penetration testing on enterprise networks.",
      description: "As a VA-PT / Log Analyst Intern at TechDefence Labs Solutions Limited, I conducted vulnerability assessments and penetration tests on 10+ enterprise networks, identified and remediated 25+ critical misconfigurations, and performed forensic log analysis to detect major security breaches. I collaborated with cybersecurity teams to recommend and implement long-term security improvements, gaining hands-on experience in ethical hacking, risk assessment, network defense, and SIEM-based analysis.",
      skills: ["VAPT", "Penetration Testing", "Log Analysis", "Ethical Hacking", "Network Defense", "SIEM", "Risk Assessment"],
      achievements: [
        "Conducted assessments on 10+ enterprise networks",
        "Identified and remediated 25+ critical misconfigurations",
        "Detected major security breaches through log analysis",
        "Implemented long-term security improvements"
      ],
      responsibilities: [
        "Conduct vulnerability assessments and penetration testing",
        "Perform forensic log analysis for breach detection",
        "Identify and remediate security misconfigurations",
        "Collaborate on security improvement recommendations",
        "Support ethical hacking and risk assessment activities"
      ],
      impact: [
        "Strengthened security posture of 10+ enterprise networks",
        "Prevented potential security breaches through proactive testing",
        "Enhanced network defense capabilities through recommendations",
        "Improved security awareness through detailed reporting"
      ],
      technicalSkills: [
        "Vulnerability Assessment and Penetration Testing (VAPT)",
        "Ethical Hacking Methodologies",
        "Network Security Assessment",
        "Log Analysis and Forensics",
        "Security Configuration Review",
        "Risk Assessment and Mitigation",
        "SIEM-based Security Analysis",
        "Security Remediation Planning"
      ]
    }
  };
  
  return experiences[slug as keyof typeof experiences] || null;
};

const getIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "it / computers - software":
      return Cloud;
    case "consultancy":
      return Search;
    case "education":
      return GraduationCap;
    case "cyber security":
      return Shield;
    case "it security":
      return Shield;
    default:
      return Briefcase;
  }
};

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "it / computers - software":
      return "default";
    case "consultancy":
      return "secondary";
    case "education":
      return "outline";
    case "cyber security":
      return "destructive";
    case "it security":
      return "destructive";
    default:
      return "default";
  }
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "current":
      return "default";
    case "completed":
      return "secondary";
    default:
      return "outline";
  }
};

const ExperienceDetail = () => {
  const { slug } = useParams();
  const experience = getExperienceData(slug || "");

  if (!experience) {
    return (
      <div className="min-h-screen relative">
        <SimpleStarField />
        <Navigation />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Experience Not Found</h1>
              <p className="text-muted-foreground mb-8">The experience you're looking for doesn't exist.</p>
              <Link to="/experience">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Experience
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const IconComponent = getIcon(experience.type);

  return (
    <div className="min-h-screen relative">
      <SimpleStarField />
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/experience">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Experience
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Header Card */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant={getTypeColor(experience.type)}>
                        <IconComponent className="w-3 h-3 mr-1" />
                        {experience.type}
                      </Badge>
                      <Badge variant={getStatusColor(experience.status)}>
                        {experience.status}
                      </Badge>
                      <Badge variant="outline">
                        <Calendar className="w-3 h-3 mr-1" />
                        {experience.period}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl mb-2">{experience.title}</CardTitle>
                    <CardDescription className="text-xl font-medium text-foreground mb-4">
                      <Building className="w-4 h-4 inline mr-2" />
                      {experience.company}
                    </CardDescription>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.summary}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Overview */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>

            {/* Key Responsibilities */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Key Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skills & Competencies */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Skills & Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Badge variant="secondary">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Impact & Outcomes */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Impact & Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experience.impact.map((impact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <span>{impact}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Related Technical Skills */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Related Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {experience.technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ExperienceDetail;