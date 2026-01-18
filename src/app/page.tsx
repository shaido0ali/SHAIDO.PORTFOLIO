import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact"; // New import
import { PROJECTS } from "@/constants/projects";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-32">
      <Hero />
      <TechStack />
      
      <section id="projects" className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-white">Featured Work</h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-brand-primary" />
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      <Contact /> {/* Added Contact section here */}
    </div>
  );
}