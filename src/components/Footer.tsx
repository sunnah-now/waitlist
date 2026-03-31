const Footer = () => (
  <footer className="w-full border-t border-slate-200 bg-white">
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 max-w-7xl mx-auto gap-8">
      <div className="font-serif font-bold text-2xl text-primary">
        sunnah<span className="text-secondary">.now</span>
      </div>
      <div className="text-on-surface-variant/60 text-[10px] uppercase tracking-widest text-center font-bold">
        © {new Date().getFullYear()} sunnah.now. An Open-Data Curator Project.
      </div>
      <div className="flex gap-8">
        {/* TODO: Add vitepress.dev documentation for early access */}
        {/*<a className="text-on-surface-variant/60 text-[10px] uppercase tracking-widest hover:text-primary transition-colors font-bold" href="#">API Docs</a>*/}
        <a
          className="text-on-surface-variant/60 text-[10px] uppercase tracking-widest hover:text-primary transition-colors font-bold"
          href="https://github.com/sunnah-now"
        >
          GitHub
        </a>
        <a
          className="text-on-surface-variant/60 text-[10px] uppercase tracking-widest hover:text-primary transition-colors font-bold"
          href="mailto:info@sunnah.now"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
