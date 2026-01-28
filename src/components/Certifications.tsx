import { GraduationCap, BookOpen, Award } from "lucide-react";

const Certifications = () => {
  const education = [
    {
      title: "Diploma in Cybersecurity",
      institution: "EduQual UK (RQF Level 6)",
      description: "Comprehensive program covering security operations, risk management, and ethical hacking methodologies.",
    },
    {
      title: "Cybersecurity Program",
      institution: "Alnafi International College",
      description: "Intensive practical training in penetration testing, network security, and security tools.",
    },
  ];

  const certifications = [
    {
      title: "CISSP",
      status: "Foundational Knowledge",
      description: "Studied core domains including Security Operations, Asset Security, and Security Architecture.",
    },
  ];

  const currentLearning = [
    "Kubernetes Security & CKS Preparation",
    "AWS Security Specialty Path",
    "Advanced Web Application Security",
    "Threat Hunting & Detection Engineering",
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="terminal-text text-primary text-sm tracking-wider uppercase mb-2 block scroll-animate">
              Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground scroll-animate" data-delay="200">
              Education & Certifications
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-6 scroll-animate-left" data-delay="400">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="terminal-text text-xl font-semibold text-foreground">
                  Education
                </h3>
              </div>
              {education.map((item, index) => (
                <div key={index} className="card-cyber p-6 btn-heavy">
                  <h4 className="font-semibold text-foreground mb-1 relative z-10">{item.title}</h4>
                  <p className="text-primary text-sm mb-2 relative z-10">{item.institution}</p>
                  <p className="text-muted-foreground text-sm relative z-10">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications & Learning */}
            <div className="space-y-8 scroll-animate-right" data-delay="600">
              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="terminal-text text-xl font-semibold text-foreground">
                    Certifications
                  </h3>
                </div>
                {certifications.map((cert, index) => (
                  <div key={index} className="card-cyber p-6 btn-heavy">
                    <div className="flex items-center justify-between mb-2 relative z-10">
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm relative z-10">{cert.description}</p>
                  </div>
                ))}
              </div>

              {/* Currently Learning */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h3 className="terminal-text text-xl font-semibold text-foreground">
                    Currently Learning
                  </h3>
                </div>
                <div className="card-cyber p-6 btn-heavy">
                  <ul className="space-y-3 relative z-10">
                    {currentLearning.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
