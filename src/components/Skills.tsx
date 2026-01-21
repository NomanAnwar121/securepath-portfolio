const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      skills: [
        "Penetration Testing (Web & Network)",
        "Vulnerability Assessment",
        "SOC Operations",
        "Incident Response",
        "Security Auditing",
      ],
    },
    {
      title: "Systems & Networking",
      skills: [
        "Linux Administration (RHEL, Ubuntu)",
        "TCP/IP & DNS",
        "Firewall Configuration",
        "Network Security",
        "Server Hardening",
        "Shell Scripting",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS (EC2, IAM, S3, Security)",
        "Docker",
        "Kubernetes (Learning)",
        "Infrastructure as Code",
        "CI/CD Security",
        "Container Security",
      ],
    },
    {
      title: "Development",
      skills: [
        "Python",
        "HTML/CSS/JavaScript",
        "Security Automation",
        "API Security",
        "Secure Coding Practices",
        "Git Version Control",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="terminal-text text-primary text-sm tracking-wider uppercase mb-2 block">
              Technical Proficiency
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills & Expertise
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card-cyber p-6">
                <h3 className="terminal-text text-xl font-semibold text-primary mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
