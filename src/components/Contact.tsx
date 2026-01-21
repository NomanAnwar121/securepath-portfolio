import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:nomananwar550@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Show toast notification
    toast({
      title: "Opening Email Client",
      description: "We are getting your mail and will contact you soon.",
      duration: 3000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/NomanAnwar121",
      username: "@NomanAnwar121",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/m-noman-anwar-1388b9334/",
      username: "/in/m-noman-anwar",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:nomananwar550@gmail.com",
      username: "nomananwar550@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="terminal-text text-primary text-sm tracking-wider uppercase mb-2 block">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Open to discussing cybersecurity opportunities, collaborative 
            projects, or security consulting engagements.
          </p>

          {/* Social Links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-cyber p-6 flex flex-col items-center gap-3 hover:border-primary/50 transition-all duration-300"
              >
                <link.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{link.username}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card-cyber p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-muted-foreground/20 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-muted-foreground/20 focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                This will open your default email client to send the message to nomananwar550@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
