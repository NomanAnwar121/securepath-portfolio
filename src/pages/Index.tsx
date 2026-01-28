import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Certifications from "@/components/Certifications";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation, MatrixRain } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    // Add cyber background class to body
    document.body.classList.add('cyber-bg');
    
    // Force a reflow to ensure all elements are rendered before observing
    const forceReflow = () => {
      document.body.offsetHeight;
    };
    
    // Small delay to ensure all components are mounted
    const timeoutId = setTimeout(forceReflow, 100);
    
    return () => {
      document.body.classList.remove('cyber-bg');
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MatrixRain />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Tools />
        <Certifications />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
