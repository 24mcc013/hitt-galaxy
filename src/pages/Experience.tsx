import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building, GraduationCap, Shield, Cloud, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const experiences = [
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  }
];

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

// Sort experiences by period (most recent first)
const sortedExperiences = experiences.sort((a, b) => {
  // Extract year from period string
  const getYear = (period: string) => {
    const parts = period.split(' - ');
    const endPart = parts[1] || parts[0];
    if (endPart === 'Present') return 9999; // Put current experiences first
    const match = endPart.match(/\d{4}/);
    return match ? parseInt(match[0]) : 0;
  };
  
  return getYear(b.period) - getYear(a.period);
});

const Experience = () => {
  return (
    <div className="min-h-screen relative">
      <SimpleStarField />
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Professional Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my professional journey, internships, and work experiences 
              across cybersecurity, cloud technologies, and educational sectors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 md:gap-8"
          >
            {sortedExperiences.map((experience, index) => {
              const IconComponent = getIcon(experience.type);
              
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/experience/${experience.id}`}>
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                                {experience.title}
                              </CardTitle>
                              <CardDescription className="text-lg font-medium text-foreground mb-2">
                                {experience.company}
                              </CardDescription>
                              <div className="flex flex-wrap gap-2 mb-3">
                                <Badge variant="outline" className="text-xs">
                                  {experience.period}
                                </Badge>
                                <Badge variant={getTypeColor(experience.type)} className="text-xs">
                                  <IconComponent className="w-3 h-3 mr-1" />
                                  {experience.type}
                                </Badge>
                                <Badge variant={getStatusColor(experience.status)} className="text-xs">
                                  {experience.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {experience.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.slice(0, 6).map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {experience.skills.length > 6 && (
                            <Badge variant="outline" className="text-xs">
                              +{experience.skills.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Experience;