import { ShieldCheck, Server, Code } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Security-First Mindset",
      description: "Proactive approach to identifying vulnerabilities before they become threats.",
    },
    {
      icon: Server,
      title: "Infrastructure Expertise",
      description: "Deep understanding of Linux systems, networking, and cloud security.",
    },
    {
      icon: Code,
      title: "DevSecOps Integration",
      description: "Embedding security practices throughout the development lifecycle.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <span className="terminal-text text-primary text-sm tracking-wider uppercase mb-2 block scroll-animate">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 scroll-animate" data-delay="200">
              Building Secure Digital Foundations
            </h2>
          </div>

          {/* About Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-16">
            <p className="scroll-animate-left" data-delay="400">
              I am an Intermediate Cybersecurity Engineer with hands-on experience in 
              penetration testing, vulnerability assessment, and security operations. 
              My background combines technical expertise in Linux system administration 
              with a strong foundation in modern cloud and containerization technologies.
            </p>
            <p className="scroll-animate-right" data-delay="600">
              With a Diploma in Cybersecurity from EduQual UK (RQF Level 6), I bring 
              a structured understanding of security frameworks, incident response 
              methodologies, and compliance requirements. My current focus lies at the 
              intersection of cybersecurity and DevSecOps—integrating security controls 
              into CI/CD pipelines and cloud infrastructure.
            </p>
            <p className="scroll-animate-left" data-delay="800">
              I approach security as a continuous process, not a destination. From 
              conducting web application security assessments aligned with OWASP 
              standards to hardening Linux servers and architecting secure AWS 
              environments, I am committed to building resilient systems that 
              withstand evolving threats.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-cyber p-6 transition-all duration-300 hover:border-primary/50 btn-heavy scroll-animate-scale"
                data-delay={1000 + index * 200}
              >
                <item.icon className="w-10 h-10 text-primary mb-4 relative z-10" />
                <h3 className="terminal-text text-lg font-semibold text-foreground mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
