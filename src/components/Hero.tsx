"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Decorative Blobs with floating animation */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-brand-primary/20 blur-[120px]" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm font-medium text-brand-primary">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
          Available for new projects
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl"
      >
        Building <span className="text-brand-primary">Scalable</span> Systems at the Intersection of Design and Data
        
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 max-w-2xl text-lg text-slate-400 md:text-xl"
      >
        Hi, I m a Full-Stack Developer specializing in <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">TypeScript</span>.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {/* ... buttons ... */}
      </motion.div>
    </section>
  );
};
export default Hero;
