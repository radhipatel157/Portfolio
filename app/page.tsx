import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="pb-20">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}