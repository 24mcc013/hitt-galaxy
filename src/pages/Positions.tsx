import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, ExternalLink, Users, Award, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const Positions = () => {
  const positions = [
    {
      title: "Student Placement Coordinator (SPC), M.Tech Cyber Security",
      slug: "spc-mtech-cybersecurity",
      organization: "Nirma University",
      period: "January 2025 - Present",
      type: "Coordinator",
      status: "Current",
      summary: "Acting as liaison with Training & Placement Cell, coordinating placement activities and managing student recruitment processes.",
      description: "Serving as the Student Placement Coordinator for the M.Tech Cyber Security program at Nirma University since January 2025, I act as a liaison with the Training & Placement Cell, coordinate placement activities, prepare students for recruitment processes, manage student data, and support internship and final placement drives, enhancing my leadership, communication, and organizational skills while gaining insights into corporate hiring.",
      skills: ["Leadership", "Communication", "Event Management", "Student Coordination", "Corporate Relations"],
      achievements: ["Enhanced placement coordination efficiency", "Improved student-industry interface"],
      responsibilities: [
        "Liaison with Training & Placement Cell",
        "Coordinate placement activities and drives", 
        "Prepare students for recruitment processes",
        "Manage comprehensive student data",
        "Support internship and final placement initiatives"
      ]
    },
    {
      title: "Advisory Board Member, Silver Oak University IEEE Student Branch",
      slug: "advisory-board-ieee-sou",
      organization: "Silver Oak University IEEE Student Branch",
      period: "January 2024 - December 2024",
      type: "Advisory",
      status: "Completed",
      summary: "Provided strategic guidance and mentoring to student leaders while fostering collaborations and long-term growth.",
      description: "Served as an Advisory Board Member for the Silver Oak University IEEE Student Branch (Jan–Dec 2024), providing strategic guidance, mentoring student leaders, reviewing event proposals and budgets, fostering collaborations, and promoting the branch's long-term growth and alignment with IEEE goals.",
      skills: ["Strategic Planning", "Mentoring", "Budget Review", "Collaboration", "IEEE Standards"],
      achievements: ["Successfully guided branch strategic initiatives", "Enhanced student leadership development"],
      responsibilities: [
        "Provide strategic guidance to student branch",
        "Mentor student leaders and officers",
        "Review event proposals and budget allocations",
        "Foster industry and academic collaborations",
        "Promote long-term growth aligned with IEEE goals"
      ]
    },
    {
      title: "Treasurer, Computer Society – IEEE SOU SBC",
      slug: "treasurer-ieee-computer-society",
      organization: "Silver Oak University IEEE Student Branch",
      period: "January 2023 - December 2023",
      type: "Executive",
      status: "Completed",
      summary: "Managed finances and budget coordination for IEEE Computer Society events and activities.",
      description: "Served as Treasurer of the IEEE SOU SBC Computer Society, Silver Oak University IEEE Student Branch (Jan–Dec 2023), managing finances, budgeting events, coordinating with sponsors, maintaining transparent records, and supporting the organization of technical workshops and seminars within budget constraints.",
      skills: ["Financial Management", "Budget Planning", "Sponsor Coordination", "Record Keeping", "Event Organization"],
      achievements: ["Maintained transparent financial records", "Successfully managed event budgets within constraints"],
      responsibilities: [
        "Manage Computer Society finances and treasury",
        "Create and monitor budgets for events and activities",
        "Coordinate with sponsors and funding sources",
        "Maintain transparent financial records",
        "Support technical workshops and seminars organization"
      ]
    },
    {
      title: "Social Media Manager, Silver Oak University IEEE Student Branch",
      slug: "social-media-manager-ieee",
      organization: "Silver Oak University IEEE Student Branch",
      period: "August 2022 - March 2024",
      type: "Management",
      status: "Completed",
      summary: "Managed social media presence and public communications, creating promotional content and increasing engagement.",
      description: "Managed social media and public communications for IEEE SOU SB (Aug 2022 – Mar 2024), creating promotional content, increasing online engagement, and collaborating with teams to ensure timely updates on events and achievements.",
      skills: ["Social Media Management", "Content Creation", "Digital Marketing", "Team Collaboration", "Public Relations"],
      achievements: ["Increased online engagement significantly", "Enhanced brand visibility through strategic content"],
      responsibilities: [
        "Manage social media accounts and online presence",
        "Create engaging promotional content and posts",
        "Increase follower engagement and reach",
        "Collaborate with teams for event promotion",
        "Ensure timely updates on achievements and activities"
      ]
    },
    {
      title: "Chairperson, Management Committee – Silver Oak University IEEE Student Branch",
      slug: "chairperson-ieee-management",
      organization: "Silver Oak University IEEE Student Branch",
      period: "January 2022 - December 2022",
      type: "Leadership",
      status: "Completed",
      summary: "Led overall operations and coordination of IEEE Student Branch activities and flagship events.",
      description: "Served as Chairperson of the IEEE SOU SB Management Committee (Jan–Dec 2022), overseeing operations, coordinating sub-committees, ensuring IEEE standards, and successfully managing flagship events to enhance participation and outreach.",
      skills: ["Leadership", "Operations Management", "Committee Coordination", "IEEE Standards", "Event Management"],
      achievements: ["Successfully managed flagship events", "Enhanced participation and outreach", "Maintained IEEE standards compliance"],
      responsibilities: [
        "Oversee overall branch operations and activities",
        "Coordinate various sub-committees and teams",
        "Ensure compliance with IEEE standards and guidelines",
        "Manage flagship events and programs",
        "Enhance student participation and community outreach"
      ]
    },
    {
      title: "Student Coordinator, Red Hat Academy – Silver Oak University",
      slug: "coordinator-redhat-academy",
      organization: "Silver Oak University",
      period: "January 2022 - December 2022",
      type: "Coordinator",
      status: "Completed",
      summary: "Organized Linux certification workshops and facilitated technical training programs.",
      description: "Student Coordinator for Red Hat Academy (Jan–Dec 2022), organizing Linux certification workshops and labs, facilitating course registrations, and collaborating with faculty to deliver training on Linux system administration and automation.",
      skills: ["Workshop Organization", "Linux Administration", "Student Coordination", "Faculty Collaboration", "Technical Training"],
      achievements: ["Successfully organized multiple Linux certification workshops", "Enhanced student technical skills in system administration"],
      responsibilities: [
        "Organize Linux certification workshops and practical labs",
        "Facilitate student course registrations and enrollment",
        "Collaborate with faculty for curriculum delivery",
        "Coordinate technical training sessions",
        "Support Linux system administration and automation learning"
      ]
    },
    {
      title: "Student Coordinator, CyberSec Club – Silver Oak University",
      slug: "coordinator-cybersec-club",
      organization: "Silver Oak University",
      period: "June 2022 - March 2024",
      type: "Coordinator",
      status: "Completed",
      summary: "Organized cybersecurity events, CTF contests, and awareness drives to promote ethical hacking and cyber hygiene.",
      description: "Student Coordinator at CyberSec Club (Jun 2022 – Mar 2024), organizing cybersecurity events, CTF contests, and awareness drives, while promoting ethical hacking, cyber hygiene, and practical learning through initiatives and bootcamps.",
      skills: ["Cybersecurity", "Event Organization", "CTF Management", "Ethical Hacking", "Awareness Campaigns"],
      achievements: ["Organized successful CTF contests", "Enhanced cybersecurity awareness among students", "Promoted ethical hacking practices"],
      responsibilities: [
        "Organize cybersecurity events and competitions",
        "Manage Capture The Flag (CTF) contests",
        "Conduct cybersecurity awareness drives",
        "Promote ethical hacking and cyber hygiene",
        "Coordinate practical learning bootcamps and workshops"
      ]
    },
    {
      title: "Member, Google Developer Student Club (GDSC)",
      slug: "member-gdsc-sou",
      organization: "Silver Oak University",
      period: "2022 - 2024",
      type: "Member",
      status: "Completed",
      summary: "Active member contributing to Google Developer Student Club activities and community building.",
      description: "Active member of Google Developer Student Club (GDSC) at Silver Oak University, participating in developer community activities, workshops, and contributing to various technology initiatives and projects.",
      skills: ["Community Building", "Technology Development", "Workshop Participation", "Project Collaboration"],
      achievements: ["Contributed to community technology initiatives", "Participated in various developer workshops"],
      responsibilities: [
        "Participate in GDSC community activities",
        "Contribute to technology workshops and events",
        "Support community building initiatives",
        "Collaborate on development projects"
      ]
    },
    {
      title: "Member, AWS Cloud Club",
      slug: "member-aws-cloud-club",
      organization: "Silver Oak University",
      period: "2022 - 2024",
      type: "Member",
      status: "Completed",
      summary: "Active member of AWS Cloud Club, participating in cloud computing workshops and certification activities.",
      description: "Member of AWS Cloud Club at Silver Oak University, engaging in cloud computing workshops, certification preparation, and contributing to cloud technology learning initiatives within the university community.",
      skills: ["Cloud Computing", "AWS Services", "Workshop Participation", "Certification Preparation"],
      achievements: ["Enhanced cloud computing knowledge", "Participated in AWS certification workshops"],
      responsibilities: [
        "Participate in AWS cloud computing workshops",
        "Contribute to cloud technology learning initiatives",
        "Support AWS certification preparation activities",
        "Engage in community cloud projects"
      ]
    }
  ];

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

  // Sort by year (most recent first)
  const sortedPositions = [...positions].sort((a, b) => {
    const yearA = parseInt(a.period.split(" ").pop() || "0");
    const yearB = parseInt(b.period.split(" ").pop() || "0");
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
          <h1 className="hero-title mb-6">Position in Responsibility</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            A journey through my leadership roles, coordination responsibilities, and contributions to various organizations. 
            Each position reflects my commitment to service, leadership, and community building.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedPositions.map((position, index) => {
            const Icon = getIcon(position.type);
            
            return (
              <motion.div
                key={position.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-nebula h-full group cursor-pointer">
                  <Link to={`/positions/${position.slug}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <Badge variant={getTypeColor(position.type)}>
                            {position.type}
                          </Badge>
                        </div>
                        <Badge variant={getStatusColor(position.status)} className="text-xs">
                          {position.status}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {position.title}
                      </CardTitle>
                      
                      <CardDescription className="flex items-center gap-1 text-muted-foreground mb-2">
                        <Building className="h-3 w-3" />
                        {position.organization}
                      </CardDescription>
                      
                      <CardDescription className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                        <Calendar className="h-3 w-3" />
                        {position.period}
                      </CardDescription>
                      
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {position.summary}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {position.skills.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {position.skills.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{position.skills.length - 2}
                            </Badge>
                          )}
                        </div>
                        <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
};

export default Positions;