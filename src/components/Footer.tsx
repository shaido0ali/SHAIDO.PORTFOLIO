const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-brand-background py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Branding & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white tracking-tighter">
            SHAIDO<span className="text-brand-primary">.PORTFOLIO</span>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            © {currentYear} All rights reserved.
          </p>
        </div>

        

      </div>
    </footer>
  );
};

export default Footer;