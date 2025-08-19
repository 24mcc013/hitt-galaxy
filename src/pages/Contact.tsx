import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import SimpleStarField from "@/components/SimpleStarField";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    toast({
      title: "Message Sent!",
      description: "Your message has been successfully sent. We'll get back to you soon.",
    });

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  const contactInfo = [
    {
      label: "Email",
      value: "chittbhavsar1511@gmail.com",
      icon: Mail,
      href: "mailto:chittbhavsar1511@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 - 7016705055",
      icon: Phone,
      href: "tel:+917016705055",
    },
    {
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      icon: MapPin,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Chitt-Bhavsar/",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://in.linkedin.com/in/chitt-bhavsar",
      label: "LinkedIn",
    },
  ];

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
          <h1 className="hero-title mb-6">Get In Touch</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            Feel free to reach out for collaborations, project inquiries, or just a friendly hello.
            I'm always open to new opportunities and connecting with fellow innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="card-nebula">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below to get in touch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="btn-cosmic w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="card-nebula">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Connect with me through the following channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <item.icon className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-nebula">
              <CardHeader>
                <CardTitle className="text-2xl">Social Media</CardTitle>
                <CardDescription>
                  Follow me on social media for updates and insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <social.icon className="h-4 w-4" />
                      <span>{social.label}</span>
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
