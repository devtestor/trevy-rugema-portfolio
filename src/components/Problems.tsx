import React from "react";
import { PROBLEMS_SOLVED } from "../lib/data";
import { HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function Problems() {
  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/5 relative overflow-hidden" id="problems">
      {/* Background radial highlight */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-800/30 text-xs font-semibold text-rose-400 font-mono">
              <span>CRITICAL BOTTLENECK REMEDIE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
              Problems I Solve <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-cyan-400">
                For Your Business
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans font-normal">
              Disconnected tools, slow applications, or manual fatigue? I convert structural bottlenecks into automated, elegant software assets.
            </p>
          </div>
        </div>

        {/* Problems/Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROBLEMS_SOLVED.map((item, idx) => (
            <div
              key={item.id}
              className="group p-6 bg-[#0F0F12] border border-white/5 rounded-2xl transition-all duration-300 hover:border-white/10 hover:bg-[#16161D] flex flex-col justify-between"
              id={`problem-solve-${item.id}`}
            >
              <div className="space-y-4">
                {/* Header row with step */}
                <div className="flex justify-between items-center text-[10px] font-mono font-semibold text-slate-500">
                  <span>INEFFICIENCY #{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-rose-400 font-mono tracking-widest bg-rose-950/30 px-2 py-0.5 rounded border border-rose-900/40">
                    PROBLEM
                  </span>
                </div>

                {/* The Problem statement */}
                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-rose-950/30 border border-rose-950 text-rose-400 mt-1 shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 font-sans tracking-tight">
                    {item.problem}
                  </h3>
                </div>

                {/* Arrow visual spacer */}
                <div className="py-2 flex items-center gap-2">
                  <div className="h-px bg-rose-950/80 flex-1" />
                  <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <div className="h-px bg-cyan-950/80 flex-1" />
                </div>

                {/* The Solution */}
                <div className="flex gap-3 items-start bg-cyan-950/15 p-4 rounded-xl border border-cyan-900/20">
                  <div className="p-1 rounded bg-cyan-950/40 text-cyan-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-cyan-400 uppercase tracking-widest font-mono font-bold mb-1">
                      TREVY'S SOLUTION
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
