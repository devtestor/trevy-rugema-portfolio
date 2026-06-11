import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-900 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-all">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold font-sans tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Trevy Rugema
              </span>
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                AI & Software Engineer
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 text-white hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 transition-all cursor-pointer"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-md group-hover:bg-opacity-0 flex items-center gap-1">
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none p-2 rounded-md hover:bg-slate-900"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-900 px-4 pt-2 pb-6 space-y-3 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("solutions")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60"
          >
            Process
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 font-medium"
          >
            Contact
          </button>
          <div className="pt-4 border-t border-slate-900 px-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-base font-semibold shadow-md shadow-cyan-500/10 hover:from-cyan-400 hover:to-blue-500"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
