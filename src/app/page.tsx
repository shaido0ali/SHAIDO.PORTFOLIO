import Hero from "@/components/Hero";
// Note: We'll build the ProjectCard and Grid in the next step
// import ProjectCard from "@/components/ProjectCard"; 

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      
      {/* Featured Projects Section Preview */}
      <section id="projects" className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-brand-primary" />
        </div>
        
        {/* We will map our projects here next */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
           <div className="h-64 rounded-2xl border border-dashed border-white/20 flex items-center justify-center text-slate-500">
             Project Card Placeholder
           </div>
        </div>
      </section>
    </div>
  );
}