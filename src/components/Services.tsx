import React from "react";
import { SERVICES } from "../lib/data";
import { 
  Globe, 
  Cpu, 
  BrainCircuit, 
  MessageSquareText, 
  MailCheck, 
  MousePointerClick, 
  Rocket, 
  Layers, 
  Server, 
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

// Robust icon mapper for safe static compilation
const getServiceIcon = (name: string) => {
  switch (name) {
    case "Globe":
      return <Globe className="w-6 h-6 text-cyan-400" />;
    case "Cpu":
      return <Cpu className="w-6 h-6 text-blue-400" />;
    case "BrainCircuit":
      return <BrainCircuit className="w-6 h-6 text-violet-400" />;
    case "MessageSquareText":
      return <MessageSquareText className="w-6 h-6 text-indigo-400" />;
    case "MailCheck":
      return <MailCheck className="w-6 h-6 text-emerald-400" />;
    case "MousePointerClick":
      return <MousePointerClick className="w-6 h-6 text-cyan-400" />;
    case "Rocket":
      return <Rocket className="w-6 h-6 text-emerald-400" />;
    case "Layers":
      return <Layers className="w-6 h-6 text-violet-400" />;
    case "Server":
      return <Server className="w-6 h-6 text-indigo-400" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-6 h-6 text-teal-400" />;
    default:
      return <Globe className="w-6 h-6 text-cyan-400" />;
  }
};

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute top-[20%] right-[5%] w-[35%] h-[35%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-xs font-semibold text-cyan-400 font-mono">
            <span>ENGINEERING SCHEMATICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-white">
            High-Impact Services Designed to Automate & Scale
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From modern web storefronts and automated pipelines to complex custom AI nodes, 
            I engineer reliable solutions to fuel your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-900/80 bg-slate-950 p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/30 hover:-translate-y-1 shadow-md hover:shadow-cyan-950/20"
              id={`service-card-${service.id}`}
            >
              {/* Card visual accent glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-700/60 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-sans tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom metadata - client benefit details */}
              <div className="mt-6 pt-5 border-t border-slate-900/60 space-y-3">
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-mono text-cyan-500 bg-cyan-950/40 px-1.5 py-0.5 rounded uppercase font-semibold mt-0.5">
                    Impact
                  </span>
                  <p className="text-xs text-slate-300 italic font-mono">
                    "{service.benefit}"
                  </p>
                </div>

                {/* Subtext CTA link */}
                <div className="flex justify-end pt-1">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Discuss project <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
