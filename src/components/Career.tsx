import { Target, TrendingUp } from "lucide-react";

const Career = () => {
  const objectives = [
    "Advance into a mid-level Cybersecurity Engineer or Penetration Tester role",
    "Contribute to Security Operations Centers (SOC) with threat detection and incident response",
    "Bridge development and security through DevSecOps practices",
    "Obtain industry-recognized certifications (OSCP, AWS Security Specialty)",
  ];

  const targetRoles = [
    "Cybersecurity Engineer",
    "Junior SOC Analyst",
    "Penetration Tester",
    "DevSecOps Engineer",
  ];

  return (
    <section id="career" className="py-24 bg-secondary/30 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="terminal-text text-primary text-sm tracking-wider uppercase mb-2 block">
              // Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Career Objective
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Objectives */}
            <div className="card-cyber p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="terminal-text text-xl font-semibold text-foreground">
                  Professional Goals
                </h3>
              </div>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 text-sm">▹</span>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Roles */}
            <div className="card-cyber p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="terminal-text text-xl font-semibold text-foreground">
                  Target Positions
                </h3>
              </div>
              <div className="space-y-3">
                {targetRoles.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statement */}
          <div className="mt-12 card-cyber p-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I am seeking opportunities to apply my technical knowledge in 
              real-world security environments, contribute to organizational 
              security posture, and continue developing expertise in offensive 
              and defensive security disciplines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
