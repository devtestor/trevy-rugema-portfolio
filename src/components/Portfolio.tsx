import React, { useState } from "react";
import { PROJECTS } from "../lib/data";
import { ArrowUpRight, Code2, Award, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [filterTech, setFilterTech] = useState<string | null>(null);

  // Collect all unique technologies for a simple filter
  const allTechnologies = Array.from(
    new Set(PROJECTS.flatMap((p) => p.technologies))
  );

  const filteredProjects = filterTech
    ? PROJECTS.filter((proj) => proj.technologies.includes(filterTech))
    : PROJECTS;

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/5 relative" id="portfolio">
      <div className="absolute top-[30%] left-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Bold Typography layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/30 text-xs font-semibold text-indigo-400 font-mono">
              <span>CASE STUDIES & EXECUTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
              PROVEN METRICS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400">
                & RECENT BUILDS
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans font-normal">
              A detailed look at actual digital systems and AI networks deployed for current startups, real estate networks, and service agencies.
            </p>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5">
          <span className="text-xs uppercase font-mono font-bold text-slate-500 mr-2">
            Filter System:
          </span>
          <button
            onClick={() => setFilterTech(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              filterTech === null
                ? "bg-cyan-950 text-cyan-400 border border-cyan-800/50"
                : "bg-slate-900/40 text-slate-400 border border-transparent hover:text-white"
            }`}
          >
            Show All ({PROJECTS.length})
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilterTech(tech)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                filterTech === tech
                  ? "bg-cyan-950 text-cyan-400 border border-cyan-800/50"
                  : "bg-slate-900/40 text-slate-400 border border-transparent hover:text-white"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid Layout of project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-[#121215]/80 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:bg-[#16161D]"
              id={`portfolio-project-${project.id}`}
            >
              <div className="space-y-4">
                {/* Visual number / tags row */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>METRIC RECORD #{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-[10px] bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded text-slate-400">
                    STABLE_PROD
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors tracking-tight font-sans">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                  {project.description}
                </p>

                {/* Badges for languages / techs used */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* OUTCOME FOCUS BOX - Critical for Client Acquisition! */}
              <div className="mt-6 pt-5 border-t border-white/5 space-y-4">
                <div className="bg-emerald-950/25 p-4 rounded-2xl border border-emerald-900/20">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-mono uppercase font-black text-emerald-400 tracking-widest">
                      BUSINESS OUTCOME & RESULT
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal font-sans italic">
                    "{project.result}"
                  </p>
                </div>

                {/* Discuss similarity CTA link */}
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 group-hover:text-cyan-400 transition-colors pointer-events-none">
                    Discuss similar platform <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
