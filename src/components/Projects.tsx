import { ExternalLink, Github, Shield, Server, Cloud, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Shield,
      title: "Web Application Penetration Testing Lab",
      description:
        "Conducted comprehensive security assessments on intentionally vulnerable web applications including DVWA, bWAPP, and OWASP WebGoat. Identified and documented critical vulnerabilities across SQL Injection, XSS, CSRF, and authentication bypass vectors.",
      technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "SQLMap", "Python"],
      outcomes: [
        "Documented 25+ vulnerability types with remediation strategies",
        "Created custom exploitation scripts for automated testing",
        "Developed security assessment methodology aligned with PTES",
      ],
    },
    {
      icon: Server,
      title: "Dockerized Vulnerable Application Lab",
      description:
        "Designed and deployed a containerized security testing environment featuring multiple vulnerable applications. Implemented network segmentation and monitoring to simulate real-world attack scenarios in an isolated environment.",
      technologies: ["Docker", "Docker Compose", "Wireshark", "Metasploit", "Kali Linux"],
      outcomes: [
        "Built multi-container lab with 5+ vulnerable services",
        "Implemented network isolation using Docker networking",
        "Created documentation for reproducible lab deployment",
      ],
    },
    {
      icon: Lock,
      title: "Linux Server Hardening Project",
      description:
        "Implemented comprehensive security hardening on RHEL and Ubuntu servers following CIS benchmarks. Configured secure SSH access, firewall rules, system auditing, and automated security patching workflows.",
      technologies: ["RHEL", "Ubuntu", "iptables", "SELinux", "Ansible", "Bash"],
      outcomes: [
        "Achieved 95%+ compliance with CIS Level 1 benchmarks",
        "Automated hardening scripts reducing manual effort by 80%",
        "Implemented centralized logging with fail2ban integration",
      ],
    },
    {
      icon: Cloud,
      title: "AWS Secure Architecture Design",
      description:
        "Architected a secure AWS infrastructure incorporating defense-in-depth principles. Implemented IAM policies with least privilege access, VPC security groups, CloudTrail logging, and automated security monitoring using AWS native services.",
      technologies: ["AWS EC2", "IAM", "S3", "VPC", "CloudTrail", "Security Hub"],
      outcomes: [
        "Designed multi-tier VPC with public/private subnets",
        "Implemented IAM roles and policies for service accounts",
        "Configured security monitoring and alerting pipelines",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="terminal-text text-primary text-sm tracking-wider uppercase mb-2 block">
              // Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-cyber p-8 transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="terminal-text text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs terminal-text bg-secondary text-primary border border-border rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Outcomes */}
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <li
                          key={outcomeIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">▹</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-3 flex-shrink-0">
                    <button className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
