import React from "react";
import { TESTIMONIALS } from "../lib/data";
import { MessageSquare, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/5 relative" id="testimonials">
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/30 text-xs font-semibold text-violet-400 font-mono">
            <span>CLIENT ASSURANCE VERDICT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
            What Partners Say
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Practical systems engineered with speed, security, and immediate operational results.
          </p>
        </div>

        {/* Testimonials grid layout */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group bg-[#0F0F12] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/10 hover:bg-[#16161D] transition-all"
              id={`testimonial-bubble-${t.id}`}
            >
              <div className="space-y-6">
                {/* Visual Quote Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800/60 flex items-center justify-center text-cyan-400">
                  <Quote className="w-5 h-5 opacity-60" />
                </div>

                {/* Body Quote Text */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans italic font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-8 pt-5 border-t border-white/5">
                <span className="block text-sm font-bold text-white font-sans tracking-tight">
                  {t.author}
                </span>
                <span className="block text-xs text-slate-500 font-mono font-medium mt-0.5">
                  {t.role}, <span className="text-cyan-400 font-bold">{t.company}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
