import { Menu } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
    <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-serif font-bold text-primary">
        sunnah<span className="text-secondary">.now</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a
          className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors"
          href="#vision"
        >
          Our Drive
        </a>
        <a
          className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors"
          href="#api"
        >
          Documentation
        </a>
        <a
          className="text-sm font-medium border-secondary hover:text-secondary transition-colors"
          href="#waitlist"
        >
          Early Access
        </a>
      </div>
      <button className="md:hidden text-primary">
        <Menu size={24} />
      </button>
    </div>
  </nav>
);

export default Navbar;
