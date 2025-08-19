
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Users, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const Research = () => {
  const papers = [
    {
      title: "PUF and Edge-Assisted Secure V2V Communication Framework for ITS Underlying 6G Networks",
      slug: "puf-edge-v2v-6g",
      abstract: "Hardware-Assisted Lightweight Authentication for Embedded and IoT Systems. This paper proposes a low-cost authentication platform for embedded and IoT systems using SRAM PUFs to create unique device fingerprints for secure key generation or authentication without external storage or heavy computation.",
      publication: "6G Networks and ITS Conference",
      year: 2024,
      category: "Security",
      pdfUrl: "#",
      status: "Published",
      authors: 3,
      keySkills: ["Secure Device Authentication", "Embedded Systems", "IoT Security", "Lightweight Cryptography", "Communication Protocols"]
    },
    {
      title: "Quantum Communication for Secure UAV Networks: A Solution for Latency, Energy, and Security", 
      slug: "quantum-uav-networks",
      abstract: "This research proposes a secure UAV communication framework using Quantum Key Distribution (QKD) with BB84 and E91 protocols to provide unbreakable encryption and real-time eavesdropping detection. A mathematical model optimizes latency, power usage, and security.",
      publication: "Quantum Communication Journal",
      year: 2024,
      category: "Quantum Computing",
      pdfUrl: "#",
      status: "Published",
      authors: 4,
      keySkills: ["Quantum Communication", "Quantum Key Distribution", "UAV Security", "BB84 Protocol", "E91 Protocol", "Latency Optimization", "Energy Efficiency", "Cybersecurity", "Quantum Cryptography"]
    },
    {
      title: "Quantum Communication for Securing Military Networks",
      slug: "quantum-military-networks",
      abstract: "This research proposes a hybrid quantum-classical model to enhance military communication security by integrating Quantum Key Distribution (BB84) with classical encryption (AES-256). A prototype demonstrates secure key exchange, encrypted messaging, key logging, and real-time verification.",
      publication: "Military Security Communications",
      year: 2024,
      category: "Quantum Computing",
      pdfUrl: "#",
      status: "Published",
      authors: 1,
      keySkills: ["Quantum Key Distribution (QKD)", "BB84 Protocol", "Military Network Security", "Hybrid Cryptography", "Post-Quantum Cryptography", "Secure Communication", "Quantum Cryptography", "System Architecture Design"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "default";
      case "Under Review": return "secondary";
      case "In Progress": return "outline";
      default: return "outline";
    }
  };

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
          <h1 className="hero-title mb-6">The Archive</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            A collection of research papers and publications exploring the frontiers 
            of technology and innovation in software development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {papers.map((paper, index) => (
            <motion.div
              key={paper.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-nebula group cursor-pointer">
                <Link to={`/research/${paper.slug}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2">
                        <Badge variant={getStatusColor(paper.status)}>
                          {paper.status}
                        </Badge>
                        <Badge variant="outline">
                          {paper.category}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {paper.year}
                      </span>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                      {paper.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-2">
                      <span className="font-medium">{paper.publication}</span>
                    </CardDescription>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {paper.abstract}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={paper.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <FileText className="h-3 w-3" />
                          PDF
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary"
                      >
                        Read More
                        <ExternalLink className="h-3 w-3 ml-1" />
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

export default Research;
