import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Experience } from "@/app/components/Experience";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-text-primary">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
