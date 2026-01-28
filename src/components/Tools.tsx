const Tools = () => {
  const toolCategories = [
    {
      category: "Security Testing",
      tools: [
        "Burp Suite",
        "Nmap",
        "Nessus",
        "Metasploit",
        "SQLMap",
        "Nikto",
        "Wireshark",
      ],
    },
    {
      category: "Operating Systems",
      tools: [
        "Kali Linux",
        "RHEL",
        "Ubuntu Server",
        "Windows Server",
        "Parrot OS",
      ],
    },
    {
      category: "Cloud & DevOps",
      tools: [
        "AWS Console",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Git",
        "GitHub Actions",
      ],
    },
    {
      category: "Development",
      tools: [
        "VS Code",
        "Python",
        "Bash",
        "PowerShell",
        "Postman",
        "Jupyter Notebook",
      ],
    },
  ];

  return (
    <section id="tools" className="py-24 bg-secondary/30 relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="terminal-text text-primary text-sm tracking-wider uppercase mb-2 block scroll-animate">
              Arsenal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground scroll-animate" data-delay="200">
              Tools & Technologies
            </h2>
          </div>

          {/* Tools Grid */}
          <div className="space-y-8">
            {toolCategories.map((category, index) => (
              <div 
                key={index} 
                className={`card-cyber p-6 btn-heavy ${
                  index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'
                }`}
                data-delay={400 + index * 200}
              >
                <h3 className="terminal-text text-lg font-semibold text-primary mb-4 relative z-10">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground hover:border-primary/50 hover:animate-cyber-glitch transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${toolIndex * 50}ms` }}
                    >
                      {tool}
                    </div>
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

export default Tools;
