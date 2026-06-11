import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/5 relative overflow-hidden">
      {/* Dynamic diagonal accent glow */}
      <div className="absolute top-1/2 left-1/2 w-[70%] h-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-xs font-semibold text-cyan-400 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROJECTS ACCELERATOR</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white uppercase leading-[0.9]">
          Ready to Save Time, <br className="hidden sm:inline"/>
          Launch Faster, or <br className="hidden sm:inline"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
            AUTOMATE YOUR BUSINESS?
          </span>
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto font-sans font-normal">
          Whether you need a high-converting landing page, MVP platform, conversational AI assistant, CRM email automation, or highly scalable server setups, I can build and deploy it step by step.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-750 flex items-center justify-center transition-all cursor-pointer"
          >
            Send a Project Request
          </button>
        </div>
      </div>
    </section>
  );
}
