import { SKILLS } from "@/constants/skills";

const TechStack = () => {
  const categories = ["Frontend", "Backend", "Tools", "Design"] as const;

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Technical Arsenal</h2>
        <div className="mt-4 h-1 w-20 rounded-full bg-brand-secondary" />
        <p className="mt-4 max-w-2xl text-slate-400">
          The modern web technologies I use to bring high-performance applications to life.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-secondary tracking-wider uppercase">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.filter((skill) => skill.category === category).map((skill) => (
                <div
                  key={skill.name}
                  className="px-4 py-2 rounded-lg border border-white/5 bg-white/5 text-slate-300 text-sm font-medium transition-all hover:border-brand-primary/30 hover:bg-brand-primary/5 hover:text-white"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;