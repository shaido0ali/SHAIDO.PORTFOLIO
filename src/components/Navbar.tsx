import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-brand-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          DEV<span className="text-brand-primary">.PORTFOLIO</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
        </div>

        <button className="rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-all">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;