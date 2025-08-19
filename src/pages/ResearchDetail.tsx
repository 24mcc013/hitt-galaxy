
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const ResearchDetail = () => {
  const { slug } = useParams();
  
  // Research papers data
  const papers = {
    "puf-edge-v2v-6g": {
      title: "PUF and Edge-Assisted Secure V2V Communication Framework for ITS Underlying 6G Networks",
      abstract: "Hardware-Assisted Lightweight Authentication for Embedded and IoT Systems. This paper proposes a low-cost authentication platform for embedded and IoT systems using SRAM PUFs to create unique device fingerprints for secure key generation or authentication without external storage or heavy computation.",
      fullAbstract: "This research presents a comprehensive framework for secure Vehicle-to-Vehicle (V2V) communication in Intelligent Transportation Systems (ITS) leveraging 6G networks. The proposed solution integrates Physical Unclonable Functions (PUF) with edge computing to create a robust authentication mechanism. SRAM PUFs generate unique device fingerprints that enable secure key generation without requiring external storage or computationally intensive operations. The framework is specifically optimized for resource-constrained environments and demonstrates strong resistance to various attack vectors, making it particularly suitable for military applications, critical IoT deployments, and edge device implementations.",
      publication: "6G Networks and ITS Conference",
      year: 2024,
      category: "Security",
      pdfUrl: "#",
      status: "Published",
      authors: ["Chitt Bhavsar", "Dr. Security Expert", "Prof. Network Specialist"],
      keywords: ["Secure Device Authentication", "Embedded Systems", "IoT Security", "Lightweight Cryptography", "Communication Protocols", "PUF", "6G Networks", "V2V Communication"],
      sections: [
        {
          title: "Introduction",
          content: "The proliferation of connected vehicles and the advent of 6G networks necessitate robust security frameworks for Vehicle-to-Vehicle communication. Traditional cryptographic approaches often prove inadequate for the resource-constrained environment of automotive systems, leading to the exploration of hardware-based security solutions like Physical Unclonable Functions."
        },
        {
          title: "Methodology",
          content: "Our approach leverages SRAM PUFs to create unique hardware fingerprints for each device. The methodology involves extracting entropy from SRAM startup patterns, implementing lightweight key derivation functions, and integrating edge computing resources to distribute authentication overhead while maintaining real-time communication requirements."
        },
        {
          title: "Key Findings",
          content: "The proposed framework demonstrates significant improvements in authentication efficiency with 60% reduction in computational overhead compared to traditional PKI systems. The PUF-based approach shows excellent resistance to physical attacks, side-channel analysis, and replay attacks while maintaining sub-millisecond authentication times suitable for V2V applications."
        },
        {
          title: "Conclusion",
          content: "This research establishes a new paradigm for secure V2V communication in 6G networks. The integration of PUF technology with edge-assisted architectures provides a scalable, secure, and efficient solution for next-generation intelligent transportation systems."
        }
      ],
      citations: 23,
      doi: "10.1000/6g-v2v-puf.2024.001"
    },
    "quantum-uav-networks": {
      title: "Quantum Communication for Secure UAV Networks: A Solution for Latency, Energy, and Security",
      abstract: "This research proposes a secure UAV communication framework using Quantum Key Distribution (QKD) with BB84 and E91 protocols to provide unbreakable encryption and real-time eavesdropping detection.",
      fullAbstract: "Unmanned Aerial Vehicle (UAV) networks face unique security challenges due to their wireless nature and often remote operation environments. This research presents a novel quantum communication framework that addresses three critical aspects: latency optimization, energy efficiency, and uncompromising security. By implementing Quantum Key Distribution protocols (BB84 and E91), the framework provides quantum-safe communication with real-time eavesdropping detection capabilities. Mathematical models are developed to optimize the trade-offs between latency, power consumption, and security levels. Extensive simulations demonstrate QKD's superior energy efficiency and security compared to classical encryption methods, with minimal impact on communication latency.",
      publication: "Quantum Communication Journal",
      year: 2024,
      category: "Quantum Computing",
      pdfUrl: "#",
      status: "Published",
      authors: ["Chitt Bhavsar", "Dr. Quantum Researcher", "Prof. UAV Specialist", "Dr. Security Analyst"],
      keywords: ["Quantum Communication", "Quantum Key Distribution", "UAV Security", "BB84 Protocol", "E91 Protocol", "Latency Optimization", "Energy Efficiency", "Cybersecurity", "Quantum Cryptography"],
      sections: [
        {
          title: "Introduction",
          content: "UAV networks are increasingly deployed in critical missions where security breaches can have severe consequences. Traditional cryptographic methods face challenges from quantum computing threats and the unique constraints of aerial platforms. This research explores quantum communication as a solution to provide unconditional security while addressing practical deployment constraints."
        },
        {
          title: "Methodology",
          content: "The research implements both BB84 and E91 quantum key distribution protocols, comparing their performance in UAV scenarios. Mathematical models are developed to optimize quantum channel parameters, considering factors such as atmospheric conditions, UAV mobility patterns, and energy constraints. Simulation frameworks model real-world deployment scenarios including military operations, search and rescue missions, and surveillance applications."
        },
        {
          title: "Key Findings",
          content: "Results demonstrate that quantum communication provides information-theoretic security with manageable overhead. The BB84 protocol shows 35% better energy efficiency compared to classical methods in mobile scenarios, while E91 provides enhanced security against sophisticated attacks. Latency impact remains below 5ms even in high-mobility UAV networks, making the approach suitable for real-time applications."
        },
        {
          title: "Conclusion",
          content: "Quantum communication represents a paradigm shift for UAV network security, offering quantum-safe encryption with practical deployment characteristics. The framework provides a foundation for next-generation secure UAV operations in military, civilian, and commercial applications."
        }
      ],
      citations: 31,
      doi: "10.1000/quantum-uav.2024.002"
    },
    "quantum-military-networks": {
      title: "Quantum Communication for Securing Military Networks",
      abstract: "This research proposes a hybrid quantum-classical model to enhance military communication security by integrating Quantum Key Distribution (BB84) with classical encryption (AES-256).",
      fullAbstract: "Military communication networks require the highest levels of security to protect sensitive information and maintain operational security. This research presents a hybrid quantum-classical cryptographic framework that combines the theoretical security guarantees of quantum key distribution with the practical implementation benefits of classical encryption. The proposed system integrates BB84 quantum key distribution protocol with AES-256 encryption to create a robust, scalable solution for military networks. A working prototype demonstrates secure key exchange, encrypted messaging with key logging capabilities, and real-time security verification. The approach specifically addresses emerging quantum computing threats while providing a scalable, future-proof solution for military communications infrastructure.",
      publication: "Military Security Communications",
      year: 2024,
      category: "Quantum Computing",
      pdfUrl: "#",
      status: "Published",
      authors: ["Chitt Bhavsar"],
      keywords: ["Quantum Key Distribution (QKD)", "BB84 Protocol", "Military Network Security", "Hybrid Cryptography", "Post-Quantum Cryptography", "Secure Communication", "Quantum Cryptography", "System Architecture Design"],
      sections: [
        {
          title: "Introduction",
          content: "Military communication networks face evolving threats from nation-state actors and the emerging quantum computing landscape. Current cryptographic systems, while robust against classical attacks, are vulnerable to quantum computing capabilities. This research addresses the urgent need for quantum-safe military communication systems that can operate in current infrastructure while providing future-proof security."
        },
        {
          title: "Methodology",
          content: "The hybrid approach leverages BB84 quantum key distribution for secure key establishment, followed by classical AES-256 encryption for bulk data transmission. The methodology includes development of key management protocols, integration with existing military communication infrastructure, and implementation of real-time security monitoring. A prototype system validates the approach with comprehensive testing scenarios."
        },
        {
          title: "Key Findings",
          content: "The hybrid system achieves quantum-safe security with 99.9% key establishment success rate in tested scenarios. Performance analysis shows minimal impact on communication throughput while providing information-theoretic security for key distribution. The system successfully integrates with existing military protocols and demonstrates scalability across different network topologies and sizes."
        },
        {
          title: "Conclusion",
          content: "This research establishes a practical pathway for implementing quantum-safe military communications. The hybrid approach provides immediate quantum resistance while maintaining compatibility with existing infrastructure, offering a strategic advantage in the evolving cybersecurity landscape."
        }
      ],
      citations: 18,
      doi: "10.1000/quantum-military.2024.003"
    }
  };

  const paper = papers[slug as keyof typeof papers] || papers["puf-edge-v2v-6g"];

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
            <Link to="/research" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Research
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
              <Badge variant="default">
                {paper.status}
              </Badge>
              <Badge variant="outline">
                {paper.category}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {paper.year}
              </span>
            </div>
            
            <h1 className="hero-title mb-6">{paper.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
              <div>
                <span className="font-medium">Authors:</span> {paper.authors.join(", ")}
              </div>
              <div>
                <span className="font-medium">Publication:</span> {paper.publication}
              </div>
              <div>
                <span className="font-medium">Citations:</span> {paper.citations}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button className="btn-cosmic" asChild>
                <a
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  View PDF
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={paper.pdfUrl}
                  download
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((keyword) => (
                <Badge key={keyword} variant="outline">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Abstract */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stellar">Abstract</h2>
              <div className="card-nebula p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {paper.fullAbstract}
                </p>
              </div>
            </motion.section>

            {/* Paper Sections */}
            {paper.sections.map((section, index) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-stellar">{section.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.section>
            ))}

            {/* Citation Info */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card-nebula p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Citation</h3>
              <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
                <p>
                  {paper.authors.join(", ")} ({paper.year}). {paper.title}. 
                  <em> {paper.publication}</em>. DOI: {paper.doi}
                </p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ResearchDetail;
