import Image from 'next/image'; // Import this
import { Project } from "@/constants/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-brand-surface/50 transition-all hover:border-brand-primary/50">
      
      {/* Optimized Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Dark overlay that fades out on hover */}
        <div className="absolute inset-0 bg-brand-background/20 transition-opacity group-hover:opacity-0" />
      </div>
      <div className="flex flex-col p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-md bg-brand-primary/10 px-2 py-1 text-xs font-medium text-brand-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a 
            href={project.link} 
            target="_blank" 
            className="text-sm font-semibold text-white hover:underline"
          >
            Live Demo →
          </a>
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              className="text-sm font-semibold text-slate-400 hover:text-white"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;