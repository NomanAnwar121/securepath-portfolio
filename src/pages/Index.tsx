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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
