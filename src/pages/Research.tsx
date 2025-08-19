import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import StarField from "@/components/StarField";

const Research = () => {
  const papers = [
    {
      title: "Machine Learning Applications in Modern Web Development",
      slug: "ml-web-dev",
      abstract: "Exploring the integration of machine learning algorithms in frontend and backend web development processes.",
      publication: "Journal of Web Technologies",
      year: 2024,
      category: "Machine Learning",
      pdfUrl: "https://example.com/paper1.pdf",
      status: "Published"
    },
    {
      title: "Blockchain Security Protocols for Distributed Applications", 
      slug: "blockchain-security",
      abstract: "A comprehensive analysis of security protocols in blockchain technology and their implementation in decentralized applications.",
      publication: "International Conference on Blockchain",
      year: 2023,
      category: "Blockchain",
      pdfUrl: "https://example.com/paper2.pdf",
      status: "Published"
    },
    {
      title: "Cloud Computing Trends and Future Architectures",
      slug: "cloud-trends",
      abstract: "An in-depth study of emerging cloud computing patterns and their impact on scalable application architecture.",
      publication: "Cloud Computing Quarterly",
      year: 2023,
      category: "Cloud Computing",
      pdfUrl: "https://example.com/paper3.pdf",
      status: "Under Review"
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
      <StarField />
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