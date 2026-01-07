import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mnomananwar",
      username: "@mnomananwar",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mnomananwar",
      username: "/in/mnomananwar",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@mnomananwar.com",
      username: "contact@mnomananwar.com",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="terminal-text text-primary text-sm tracking-wider uppercase mb-2 block">
            // Connect
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

          {/* Resume CTA */}
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <FileText className="w-5 h-5" />
            Download Resume
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
