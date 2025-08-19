
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import StarField from "@/components/StarField";

const ResearchDetail = () => {
  const { slug } = useParams();
  
  // Mock data - in a real app, this would come from a CMS or API
  const paper = {
    title: "Machine Learning Applications in Modern Web Development",
    abstract: "This paper explores the integration of machine learning algorithms in frontend and backend web development processes, examining practical applications and implementation strategies.",
    fullAbstract: "Machine learning has revolutionized many industries, and web development is no exception. This comprehensive study examines how ML algorithms can be seamlessly integrated into modern web development workflows, from intelligent code completion and automated testing to personalized user experiences and predictive analytics. We analyze various implementation strategies, performance implications, and practical applications across different web technologies.",
    publication: "Journal of Web Technologies",
    year: 2024,
    category: "Machine Learning", 
    pdfUrl: "https://example.com/paper1.pdf",
    status: "Published",
    authors: ["Chitt Bhavsar", "Dr. Jane Smith", "Prof. John Doe"],
    keywords: ["Machine Learning", "Web Development", "AI", "Frontend", "Backend", "Automation"],
    sections: [
      {
        title: "Introduction",
        content: "The intersection of machine learning and web development represents a paradigm shift in how we approach software engineering. Traditional web development practices are being enhanced with intelligent systems that can learn, adapt, and optimize user experiences in real-time."
      },
      {
        title: "Methodology", 
        content: "Our research methodology involved a comprehensive analysis of existing ML frameworks, their integration capabilities with popular web technologies, and performance benchmarking across different deployment scenarios. We conducted case studies with five major web applications to validate our findings."
      },
      {
        title: "Key Findings",
        content: "Our analysis revealed significant improvements in development efficiency (40% reduction in debugging time), user experience optimization (25% increase in engagement), and automated decision-making capabilities. The integration of ML models in web applications showed promising results across all tested scenarios."
      },
      {
        title: "Conclusion",
        content: "Machine learning integration in web development is not just a trend but a fundamental shift towards more intelligent, adaptive applications. The benefits far outweigh the implementation challenges, making it a crucial skill for modern web developers."
      }
    ],
    citations: 47,
    doi: "10.1000/example.2024.123"
  };

  return (
    <div className="min-h-screen relative">
      <StarField />
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
