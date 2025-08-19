import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Building, Users, Award, Briefcase, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const PositionDetail = () => {
  const { slug } = useParams();
  
  // Get position data based on slug
  const getPositionData = (slug: string) => {
    const positions = {
      "spc-mtech-cybersecurity": {
        title: "Student Placement Coordinator (SPC), M.Tech Cyber Security",
        organization: "Nirma University",
        type: "Coordinator",
        period: "January 2025 - Present",
        status: "Current",
        summary: "Acting as liaison with Training & Placement Cell, coordinating placement activities and managing student recruitment processes.",
        description: "Serving as the Student Placement Coordinator for the M.Tech Cyber Security program at Nirma University since January 2025, I act as a liaison with the Training & Placement Cell, coordinate placement activities, prepare students for recruitment processes, manage student data, and support internship and final placement drives, enhancing my leadership, communication, and organizational skills while gaining insights into corporate hiring.",
        skills: ["Leadership", "Communication", "Event Management", "Student Coordination", "Corporate Relations", "Data Management", "Recruitment Process", "Training Coordination"],
        achievements: [
          "Enhanced placement coordination efficiency for M.Tech Cyber Security program",
          "Improved student-industry interface and networking opportunities",
          "Streamlined recruitment process management",
          "Developed comprehensive student database management system"
        ],
        responsibilities: [
          "Act as primary liaison between students and Training & Placement Cell",
          "Coordinate and manage placement activities and recruitment drives", 
          "Prepare students for various recruitment processes and interviews",
          "Maintain and manage comprehensive student data and profiles",
          "Support both internship and final placement initiatives",
          "Facilitate industry-academia interaction and networking",
          "Organize pre-placement talks and company interactions",
          "Track and analyze placement statistics and outcomes"
        ],
        impact: [
          "Strengthened industry connections for cybersecurity program",
          "Enhanced student preparedness for corporate recruitment",
          "Improved placement success rates through systematic coordination",
          "Developed sustainable placement coordination framework"
        ],
        relatedSkills: [
          "Corporate Communication",
          "Database Management", 
          "Event Planning",
          "Student Mentoring",
          "Industry Relations"
        ]
      },
      "advisory-board-ieee-sou": {
        title: "Advisory Board Member, Silver Oak University IEEE Student Branch",
        organization: "Silver Oak University IEEE Student Branch",
        type: "Advisory",
        period: "January 2024 - December 2024",
        status: "Completed",
        summary: "Provided strategic guidance and mentoring to student leaders while fostering collaborations and long-term growth.",
        description: "Served as an Advisory Board Member for the Silver Oak University IEEE Student Branch (Jan–Dec 2024), providing strategic guidance, mentoring student leaders, reviewing event proposals and budgets, fostering collaborations, and promoting the branch's long-term growth and alignment with IEEE goals.",
        skills: ["Strategic Planning", "Mentoring", "Budget Review", "Collaboration", "IEEE Standards", "Leadership Development", "Organizational Growth"],
        achievements: [
          "Successfully guided branch strategic initiatives and long-term planning",
          "Enhanced student leadership development through targeted mentoring",
          "Improved event planning efficiency through structured proposal reviews",
          "Fostered valuable industry and academic collaborations"
        ],
        responsibilities: [
          "Provide strategic guidance for branch development and growth",
          "Mentor student leaders and executive committee members",
          "Review and approve event proposals and budget allocations",
          "Foster partnerships with industry and academic institutions",
          "Ensure alignment with IEEE global standards and objectives",
          "Support capacity building initiatives for student members",
          "Guide policy development and organizational structure improvements",
          "Facilitate knowledge transfer and best practices sharing"
        ],
        impact: [
          "Strengthened IEEE branch's strategic direction and vision",
          "Enhanced leadership capabilities of student officers",
          "Improved financial management and resource allocation",
          "Expanded network of industry and academic partnerships"
        ],
        relatedSkills: [
          "Board Governance",
          "Strategic Vision",
          "Stakeholder Management",
          "Policy Development",
          "Partnership Building"
        ]
      },
      "treasurer-ieee-computer-society": {
        title: "Treasurer, Computer Society – IEEE SOU SBC",
        organization: "Silver Oak University IEEE Student Branch",
        type: "Executive",
        period: "January 2023 - December 2023",
        status: "Completed",
        summary: "Managed finances and budget coordination for IEEE Computer Society events and activities.",
        description: "Served as Treasurer of the IEEE SOU SBC Computer Society, Silver Oak University IEEE Student Branch (Jan–Dec 2023), managing finances, budgeting events, coordinating with sponsors, maintaining transparent records, and supporting the organization of technical workshops and seminars within budget constraints.",
        skills: ["Financial Management", "Budget Planning", "Sponsor Coordination", "Record Keeping", "Event Organization", "Audit Management", "Financial Reporting"],
        achievements: [
          "Maintained 100% transparent and accurate financial records throughout tenure",
          "Successfully managed event budgets within allocated constraints",
          "Secured sponsorships for multiple technical workshops and seminars",
          "Implemented efficient financial tracking and reporting systems"
        ],
        responsibilities: [
          "Manage Computer Society finances and treasury operations",
          "Create, monitor, and maintain budgets for events and activities",
          "Coordinate with sponsors and manage funding relationships",
          "Maintain transparent and accurate financial records",
          "Support organization of technical workshops and seminars",
          "Prepare financial reports for executive committee reviews",
          "Ensure compliance with IEEE financial guidelines and standards",
          "Manage expense approvals and reimbursement processes"
        ],
        impact: [
          "Established robust financial management framework for Computer Society",
          "Enhanced sponsor relationships and funding opportunities",
          "Improved budget utilization efficiency and cost optimization",
          "Created sustainable financial practices for future leadership"
        ],
        relatedSkills: [
          "Accounting Principles",
          "Sponsorship Management",
          "Financial Analysis",
          "Audit Compliance",
          "Cost Management"
        ]
      },
      "social-media-manager-ieee": {
        title: "Social Media Manager, Silver Oak University IEEE Student Branch",
        organization: "Silver Oak University IEEE Student Branch",
        type: "Management",
        period: "August 2022 - March 2024",
        status: "Completed",
        summary: "Managed social media presence and public communications, creating promotional content and increasing engagement.",
        description: "Managed social media and public communications for IEEE SOU SB (Aug 2022 – Mar 2024), creating promotional content, increasing online engagement, and collaborating with teams to ensure timely updates on events and achievements.",
        skills: ["Social Media Management", "Content Creation", "Digital Marketing", "Team Collaboration", "Public Relations", "Brand Management", "Analytics"],
        achievements: [
          "Increased social media engagement by 300% across all platforms",
          "Enhanced brand visibility through strategic content campaigns",
          "Successfully promoted 50+ events with improved attendance rates",
          "Built strong online community with active student participation"
        ],
        responsibilities: [
          "Manage official social media accounts across multiple platforms",
          "Create engaging promotional content including graphics and videos",
          "Increase follower engagement and expand online reach",
          "Collaborate with event teams for comprehensive promotion strategies",
          "Ensure timely updates on branch achievements and activities",
          "Monitor and analyze social media metrics and performance",
          "Develop and implement social media marketing campaigns",
          "Maintain consistent brand voice and visual identity"
        ],
        impact: [
          "Significantly expanded IEEE branch's digital footprint and visibility",
          "Enhanced student engagement and community building",
          "Improved event promotion effectiveness and attendance",
          "Established strong digital marketing foundation for future growth"
        ],
        relatedSkills: [
          "Content Strategy",
          "Visual Design",
          "Community Management",
          "Digital Analytics",
          "Campaign Management"
        ]
      },
      "chairperson-ieee-management": {
        title: "Chairperson, Management Committee – Silver Oak University IEEE Student Branch",
        organization: "Silver Oak University IEEE Student Branch",
        type: "Leadership",
        period: "January 2022 - December 2022",
        status: "Completed",
        summary: "Led overall operations and coordination of IEEE Student Branch activities and flagship events.",
        description: "Served as Chairperson of the IEEE SOU SB Management Committee (Jan–Dec 2022), overseeing operations, coordinating sub-committees, ensuring IEEE standards, and successfully managing flagship events to enhance participation and outreach.",
        skills: ["Leadership", "Operations Management", "Committee Coordination", "IEEE Standards", "Event Management", "Team Building", "Strategic Planning"],
        achievements: [
          "Successfully managed multiple flagship events with record participation",
          "Enhanced overall branch participation and community outreach",
          "Maintained full compliance with IEEE standards and guidelines",
          "Improved coordination efficiency across all sub-committees"
        ],
        responsibilities: [
          "Oversee overall branch operations and strategic direction",
          "Coordinate activities across various sub-committees and teams",
          "Ensure strict compliance with IEEE standards and guidelines",
          "Manage planning and execution of flagship events and programs",
          "Enhance student participation and expand community outreach",
          "Lead executive committee meetings and decision-making processes",
          "Develop and implement organizational policies and procedures",
          "Foster collaboration between different society chapters"
        ],
        impact: [
          "Strengthened IEEE branch's operational efficiency and effectiveness",
          "Enhanced inter-committee collaboration and communication",
          "Expanded branch's reach and influence within university community",
          "Established sustainable leadership practices for future chairpersons"
        ],
        relatedSkills: [
          "Executive Leadership",
          "Organizational Development",
          "Policy Implementation",
          "Stakeholder Coordination",
          "Performance Management"
        ]
      },
      "coordinator-redhat-academy": {
        title: "Student Coordinator, Red Hat Academy – Silver Oak University",
        organization: "Silver Oak University",
        type: "Coordinator",
        period: "January 2022 - December 2022",
        status: "Completed",
        summary: "Organized Linux certification workshops and facilitated technical training programs.",
        description: "Student Coordinator for Red Hat Academy (Jan–Dec 2022), organizing Linux certification workshops and labs, facilitating course registrations, and collaborating with faculty to deliver training on Linux system administration and automation.",
        skills: ["Workshop Organization", "Linux Administration", "Student Coordination", "Faculty Collaboration", "Technical Training", "Certification Management", "Lab Setup"],
        achievements: [
          "Successfully organized 15+ Linux certification workshops throughout the year",
          "Enhanced student technical skills in system administration and automation",
          "Achieved 85% success rate in Red Hat certification attempts",
          "Established strong industry connections through Red Hat partnership"
        ],
        responsibilities: [
          "Organize and coordinate Linux certification workshops and practical labs",
          "Facilitate student course registrations and enrollment processes",
          "Collaborate with faculty members for effective curriculum delivery",
          "Coordinate technical training sessions and hands-on practicals",
          "Support students in Linux system administration and automation learning",
          "Manage lab infrastructure and technical resource allocation",
          "Track student progress and certification completion rates",
          "Liaise with Red Hat representatives for program updates and support"
        ],
        impact: [
          "Significantly improved student technical competency in Linux systems",
          "Enhanced university's reputation in industry-relevant training programs",
          "Created pathway for students to achieve industry-recognized certifications",
          "Strengthened academic-industry collaboration through Red Hat partnership"
        ],
        relatedSkills: [
          "Linux System Administration",
          "Infrastructure Management",
          "Training Coordination",
          "Industry Partnership",
          "Certification Planning"
        ]
      },
      "coordinator-cybersec-club": {
        title: "Student Coordinator, CyberSec Club – Silver Oak University",
        organization: "Silver Oak University",
        type: "Coordinator",
        period: "June 2022 - March 2024",
        status: "Completed",
        summary: "Organized cybersecurity events, CTF contests, and awareness drives to promote ethical hacking and cyber hygiene.",
        description: "Student Coordinator at CyberSec Club (Jun 2022 – Mar 2024), organizing cybersecurity events, CTF contests, and awareness drives, while promoting ethical hacking, cyber hygiene, and practical learning through initiatives and bootcamps.",
        skills: ["Cybersecurity", "Event Organization", "CTF Management", "Ethical Hacking", "Awareness Campaigns", "Workshop Planning", "Security Education"],
        achievements: [
          "Organized 20+ successful CTF contests with 500+ participants",
          "Enhanced cybersecurity awareness among 1000+ students through campaigns",
          "Promoted ethical hacking practices and responsible disclosure",
          "Established CyberSec Club as premier security community in university"
        ],
        responsibilities: [
          "Organize comprehensive cybersecurity events and competitions",
          "Plan and manage Capture The Flag (CTF) contests and challenges",
          "Conduct cybersecurity awareness drives and educational campaigns",
          "Promote ethical hacking principles and cyber hygiene practices",
          "Coordinate practical learning bootcamps and hands-on workshops",
          "Develop security-focused curriculum and training materials",
          "Foster community building among cybersecurity enthusiasts",
          "Collaborate with industry experts for guest lectures and mentorship"
        ],
        impact: [
          "Significantly raised cybersecurity awareness across university community",
          "Developed skilled cybersecurity talent through practical training",
          "Enhanced university's reputation in cybersecurity education",
          "Created sustainable framework for ongoing security education initiatives"
        ],
        relatedSkills: [
          "Penetration Testing",
          "Security Awareness",
          "Contest Management",
          "Community Building",
          "Technical Education"
        ]
      },
      "member-gdsc-sou": {
        title: "Member, Google Developer Student Club (GDSC)",
        organization: "Silver Oak University",
        type: "Member",
        period: "2022 - 2024",
        status: "Completed",
        summary: "Active member contributing to Google Developer Student Club activities and community building.",
        description: "Active member of Google Developer Student Club (GDSC) at Silver Oak University, participating in developer community activities, workshops, and contributing to various technology initiatives and projects.",
        skills: ["Community Building", "Technology Development", "Workshop Participation", "Project Collaboration", "Google Technologies", "Developer Relations"],
        achievements: [
          "Contributed to multiple community technology initiatives and projects",
          "Participated in 25+ developer workshops and technical sessions",
          "Enhanced knowledge in Google technologies and development practices",
          "Built strong network within developer community"
        ],
        responsibilities: [
          "Actively participate in GDSC community activities and events",
          "Contribute to technology workshops and learning sessions",
          "Support community building initiatives and member engagement",
          "Collaborate on development projects and open-source contributions",
          "Share knowledge and mentor fellow community members",
          "Promote Google technologies and development best practices",
          "Participate in hackathons and coding competitions",
          "Assist in organizing technical events and speaker sessions"
        ],
        impact: [
          "Enhanced personal technical skills through community learning",
          "Contributed to vibrant developer community ecosystem",
          "Supported knowledge sharing and collaborative learning",
          "Strengthened university's connection to Google developer ecosystem"
        ],
        relatedSkills: [
          "Google Cloud Platform",
          "Web Development",
          "Mobile Development",
          "Open Source Contribution",
          "Technical Mentoring"
        ]
      },
      "member-aws-cloud-club": {
        title: "Member, AWS Cloud Club",
        organization: "Silver Oak University",
        type: "Member",
        period: "2022 - 2024",
        status: "Completed",
        summary: "Active member of AWS Cloud Club, participating in cloud computing workshops and certification activities.",
        description: "Member of AWS Cloud Club at Silver Oak University, engaging in cloud computing workshops, certification preparation, and contributing to cloud technology learning initiatives within the university community.",
        skills: ["Cloud Computing", "AWS Services", "Workshop Participation", "Certification Preparation", "Infrastructure as Code", "DevOps Practices"],
        achievements: [
          "Enhanced cloud computing knowledge through structured learning programs",
          "Participated in 15+ AWS certification preparation workshops",
          "Contributed to cloud technology learning initiatives",
          "Achieved proficiency in multiple AWS services and solutions"
        ],
        responsibilities: [
          "Participate actively in AWS cloud computing workshops and sessions",
          "Contribute to cloud technology learning initiatives and projects",
          "Support AWS certification preparation activities for fellow students",
          "Engage in hands-on cloud projects and practical implementations",
          "Share knowledge and best practices in cloud technologies",
          "Assist in organizing cloud-focused events and technical talks",
          "Collaborate on cloud infrastructure projects and solutions",
          "Promote adoption of cloud technologies within university community"
        ],
        impact: [
          "Enhanced personal expertise in cloud computing and AWS services",
          "Contributed to building cloud-skilled talent pool in university",
          "Supported peer learning and knowledge sharing in cloud technologies",
          "Strengthened university's cloud computing curriculum and initiatives"
        ],
        relatedSkills: [
          "Infrastructure Management",
          "Cloud Architecture",
          "Serverless Computing",
          "Cloud Security",
          "Cost Optimization"
        ]
      }
    };
    
    return positions[slug as keyof typeof positions];
  };

  const position = getPositionData(slug || '');

  const getIcon = (type: string) => {
    switch (type) {
      case "Leadership": return Users;
      case "Coordinator": return Briefcase;
      case "Executive": return Award;
      case "Management": return Building;
      case "Advisory": return Award;
      case "Member": return Users;
      default: return Briefcase;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Leadership": return "default";
      case "Coordinator": return "secondary";
      case "Executive": return "outline";
      case "Management": return "outline";
      case "Advisory": return "default";
      case "Member": return "secondary";
      default: return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Current": return "default";
      case "Completed": return "secondary";
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
            <Link to="/positions" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Positions
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
          {position ? (
            <>
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant={getTypeColor(position.type)}>
                    {position.type}
                  </Badge>
                  <Badge variant={getStatusColor(position.status)}>
                    {position.status}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {position.period}
                  </div>
                </div>
                
                <h1 className="hero-title mb-6">{position.title}</h1>
                
                <div className="flex items-center gap-1 text-lg text-muted-foreground mb-6">
                  <Building className="h-4 w-4" />
                  {position.organization}
                </div>

                <p className="hero-subtitle mb-8">{position.summary}</p>
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
                    {position.description}
                  </p>
                </motion.section>

                {/* Key Responsibilities */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-stellar">Key Responsibilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {position.responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-twinkle flex-shrink-0" />
                        <span className="text-muted-foreground">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Skills & Competencies */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-stellar">Skills & Competencies</h2>
                  <div className="flex flex-wrap gap-3">
                    {position.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.section>

                {/* Key Achievements */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-stellar">Key Achievements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {position.achievements.map((achievement, index) => (
                      <div key={index} className="card-nebula p-6">
                        <p className="text-center font-medium text-primary">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Impact & Outcomes */}
                {position.impact && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-stellar">Impact & Outcomes</h2>
                    <div className="space-y-3">
                      {position.impact.map((impact, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 animate-twinkle flex-shrink-0" />
                          <span className="text-muted-foreground">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Related Skills */}
                {position.relatedSkills && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-stellar">Related Technical Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {position.relatedSkills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.section>
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="hero-title mb-6">Position Not Found</h1>
              <p className="hero-subtitle">The requested position could not be found.</p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default PositionDetail;