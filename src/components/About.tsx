import React from "react";
import { WHY_WORK_WITH_ME } from "../lib/data";
import { Check, ShieldCheck, Terminal, Award } from "lucide-react";

export default function About() {
  const coreCompetencyList = [
    "Web applications (React, Next.js, Django, Node)",
    "AI automation & intelligent LLM agents",
    "Repeatable CRM workflow linkages",
    "Restful backend APIs & payment gateways",
    "DevOps VPS deployment & Docker configurations",
    "Secure software practices & user authentication"
  ];

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/5 relative overflow-hidden" id="about">
      {/* Visual background details */}
      <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Personal Bio & Background */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-xs font-semibold text-cyan-400 font-mono">
                <span>WHO RUNS THE OPERATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
                ABOUT TREVY RUGEMA
              </h2>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed font-sans font-normal">
              My name is <span className="text-white font-bold">Trevy Rugema</span>. I am a Software Systems Engineer focused on AI automation, web application development, DevOps, backend systems, and cybersecurity-aware software.
            </p>

            <p className="text-slate-400 leading-relaxed font-sans font-normal">
              I help business leaders, founders, and startups turn manual bottlenecks and disconnected platforms into unified, high-performing digital engines. By designing robust API pipelines and integrating custom AI workers, I protect operations from routine friction and maximize business efficiency.
            </p>

            {/* Core tech targets list */}
            <div className="space-y-3 pt-2">
              <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-500 font-black">
                CORE ARCHITECTURE STACK
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {coreCompetencyList.map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded bg-cyan-500 shrink-0" />
                    <span className="text-xs text-slate-300 font-mono italic">
                      {comp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Why Work With Me (Trust-building Section) */}
          <div className="lg:col-span-6">
            <div className="bg-[#121215] border border-white/5 rounded-3xl p-8 space-y-8 relative">
              
              {/* Box Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Why Serious Partners Work With Me
                  </h3>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold">
                    Client-first engagement guarantees
                  </span>
                </div>
              </div>

              {/* Grid of why work with me reasons */}
              <div className="space-y-4">
                {WHY_WORK_WITH_ME.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-cyan-950/60 border border-cyan-800/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 text-cyan-400" />
                    </div>
                    <p className="text-sm text-slate-300 font-sans font-normal leading-relaxed">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>

              {/* Small terminal design block for engineering theme feel */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-600 font-mono">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                  <span>SECURE_JWT_ENV = ACTIVE</span>
                </div>
                <span>v1.0.4 PROD</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
