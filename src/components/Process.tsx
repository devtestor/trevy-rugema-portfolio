import React from "react";
import { PROCESS_STEPS } from "../lib/data";
import { HelpCircle, CheckCircle } from "lucide-react";

export default function Process() {
  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/5 relative" id="process">
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/30 text-xs font-semibold text-indigo-400 font-mono">
            <span>METHODICAL WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
            My Step-By-Step Process
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            I don't just dump code and leave. I plan, build, deploy, validate, and support your systems meticulously so they run perfectly.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical center indicator line for large monitors */}
          <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-800/70 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.step} 
                  className={`grid lg:grid-cols-12 items-center gap-8 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                  id={`process-step-${step.step}`}
                >
                  {/* Left layout container */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:text-right" : "lg:col-start-8 lg:order-last text-left"}`}>
                    <div className={`space-y-3 ${isEven ? "lg:items-end" : "text-left"}`}>
                      {/* Bold Typography numeric bullet for mobile & layout */}
                      <span className="inline-block text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 font-mono">
                        {String(step.step).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl font-black text-white font-sans tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Centered Node Bullet on large viewports */}
                  <div className="lg:col-span-2 hidden lg:flex justify-center relative">
                    <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center font-bold text-sm text-cyan-400 shadow-md">
                      {step.step}
                    </div>
                  </div>

                  {/* Right filler spacer column for aesthetics */}
                  <div className="lg:col-span-5 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
