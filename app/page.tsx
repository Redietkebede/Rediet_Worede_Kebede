import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Experience } from "@/app/components/Experience";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";
import { Services } from "@/app/components/Services";

export default function Home() {
  return (
    <div className="bg-background text-text-primary min-h-screen">
      <Hero />
      <Projects />
      <Services />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
