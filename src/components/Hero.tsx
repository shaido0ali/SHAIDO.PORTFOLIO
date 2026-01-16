const Hero = () => {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-brand-primary/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-brand-secondary/10 blur-[120px]" />

      {/* Badge */}
      <div className="mb-6 inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm font-medium text-brand-primary">
        <span className="mr-2 flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
        Available for new projects
      </div>

      {/* Main Heading */}
      <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
        I build <span className="text-brand-primary">performant</span> interfaces for the modern web.
      </h1>

      {/* Subtext */}
      <p className="mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
        Hi, I m a Front-End Developer specializing in <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">TypeScript</span>. 
        I focus on clean code, accessibility, and great user experiences.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a 
          href="#projects" 
          className="rounded-xl bg-brand-primary px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 active:scale-95 shadow-lg shadow-brand-primary/25"
        >
          See My Work
        </a>
        <a 
          href="#contact" 
          className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;