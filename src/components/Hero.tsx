import { Shield, Terminal, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="terminal-text text-sm text-muted-foreground">
              <span className="text-primary">$</span> whoami
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">M Noman</span>{" "}
            <span className="text-gradient">Anwar</span>
          </h1>

          {/* Professional Headline */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-primary" />
            <p className="text-xl md:text-2xl terminal-text text-secondary-foreground">
              Cybersecurity Engineer | DevSecOps Practitioner
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Securing digital infrastructure through proactive defense, 
            penetration testing, and security-first development practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
