import React from "react";
import { Terminal, Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const servicesLinks = [
    { name: "Web Application Dev", id: "services" },
    { name: "AI Automation", id: "services" },
    { name: "Agentic AI", id: "services" },
    { name: "Chatbots & Assistants", id: "services" },
    { name: "CRM & Email Setup", id: "services" },
    { name: "Cybersecurity Development", id: "services" }
  ];

  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 pt-16 pb-12 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Trevy Rugema
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
              AI Automation & Software Systems Engineer. I build custom digital engines that save valuable manual hours and directly enhance conversion output.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:trevyrugema@gmail.com" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Site Nav */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-black">
              Navigation Link Index
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("solutions")}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("process")}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  About Information
                </button>
              </li>
              <li>
                <a 
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-450 hover:text-cyan-400 transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Services Nav */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-black">
              Engineered Offerings
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Meta Info */}
          <div className="space-y-3 bg-[#121215] p-5 rounded-2xl border border-white/5">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#93c5fd] font-bold">
              SYSTEM CONSOLE STATUS HIGHLIGHT
            </h4>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div className="flex justify-between">
                <span>Node Status:</span>
                <span className="text-emerald-400">STABLE</span>
              </div>
              <div className="flex justify-between">
                <span>Protocols:</span>
                <span className="text-violet-400">HTTPS_JWT</span>
              </div>
              <div className="flex justify-between">
                <span>Inquiries 2026:</span>
                <span className="text-cyan-400">READY</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Trevy Rugema. All systems and engineering rights reserved.
          </p>
          <div className="flex items-center gap-1.5 mt-4 sm:mt-0">
            <span>STABLE_BUILD</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600">v1.0.4-2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
