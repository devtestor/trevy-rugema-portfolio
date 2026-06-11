import React from "react";
import { TECH_STACK } from "../lib/data";
import {
  Code2,
  Database,
  LayoutDashboard,
  Server,
  BrainCircuit,
  Cpu
} from "lucide-react";

// Robust icon mapper for safe static compilation
const getCategoryIcon = (name: string) => {
  switch (name) {
    case "Code2":
      return <Code2 className="w-5 h-5 text-cyan-400" />;
    case "Database":
      return <Database className="w-5 h-5 text-emerald-400" />;
    case "LayoutDashboard":
      return <LayoutDashboard className="w-5 h-5 text-violet-400" />;
    case "Server":
      return <Server className="w-5 h-5 text-indigo-400" />;
    case "BrainCircuit":
      return <BrainCircuit className="w-5 h-5 text-blue-400" />;
    default:
      return <Cpu className="w-5 h-5 text-cyan-400" />;
  }
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-[#0A0A0B] border-t border-white/5 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-[15%] left-[5%] w-[35%] h-[35%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-xs font-semibold text-cyan-400 font-mono">
            <span>CORE TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-white">
            Tools & Technologies I Build With
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A pragmatic, production-tested stack spanning Python backends, modern
            JavaScript frontends, automated cloud deployment, and AI integration.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((category) => (
            <div
              key={category.id}
              id={`tech-card-${category.id}`}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#121215] p-6 transition-all duration-300 hover:border-slate-800 hover:-translate-y-1 shadow-md hover:shadow-cyan-950/20"
            >
              {/* Card visual accent glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:border-slate-700/60 transition-colors">
                  {getCategoryIcon(category.iconName)}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-black">
                  {category.label}
                </span>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-slate-300 bg-slate-900/70 border border-slate-800 px-2.5 py-1 rounded-md group-hover:border-cyan-800/40 group-hover:text-cyan-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
