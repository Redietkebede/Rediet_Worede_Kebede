import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Experience } from "@/app/components/Experience";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";

export default function Home() {
  return (
    <div className="bg-background text-text-primary min-h-screen">
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
