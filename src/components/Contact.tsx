import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "Contact from Portfolio",
        message: formData.message,
        to_email: "nomananwar550@gmail.com", // Your email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
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
          <span className="terminal-text text-primary text-sm tracking-wider uppercase mb-2 block scroll-animate">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 scroll-animate" data-delay="200">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto scroll-animate" data-delay="400">
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
                className={`group card-cyber p-6 flex flex-col items-center gap-3 hover:border-primary/50 transition-all duration-300 btn-heavy scroll-animate-scale`}
                data-delay={600 + index * 100}
              >
                <link.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                <div className="relative z-10">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{link.username}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto scroll-animate" data-delay="900">
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
                      className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-all duration-300"
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
                      className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-all duration-300"
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
                    className="bg-background/50 border-muted-foreground/20 focus:border-primary transition-all duration-300"
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
                    className="bg-background/50 border-muted-foreground/20 focus:border-primary resize-none transition-all duration-300"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full btn-heavy bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{isLoading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Your message will be sent directly to nomananwar550@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
