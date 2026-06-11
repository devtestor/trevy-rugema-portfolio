import React from "react";
import { ArrowRight, Sparkles, Activity, ShieldCheck, Cpu, Database, Server, RefreshCw } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background radial gradient mesh to give a premium dark tech vibe */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[130px]" />
      
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Headline & Call To Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline/Position Highlight */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>AI Automation & Systems Engineering</span>
            </div>

            {/* Clear, conversion-optimized Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-white leading-tight">
              I Build Software,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                Automations & AI Systems
              </span>{" "}
              That Help Businesses Grow
            </h1>

            {/* Subheadline (Positioning statement) */}
            <p className="text-lg text-slate-300 leading-relaxed font-sans font-normal max-w-2xl">
              I help startups, small businesses, and entrepreneurs build web platforms, automate workflows, deploy reliable systems, and integrate AI tools that save time and increase revenue.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToServices}
                className="px-8 py-4 rounded-xl font-bold text-sm bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 flex items-center justify-center gap-1 transition-all cursor-pointer"
              >
                View My Services
              </button>
            </div>

            {/* Trust highlights container */}
            <div className="pt-6 border-t border-slate-900">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-semibold mb-4">
                Core Specialization & Focus
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Activity className="w-4 h-4 text-cyan-500" />
                  <span>Custom Web Apps</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  <span>AI Automation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Server className="w-4 h-4 text-indigo-500" />
                  <span>DevOps & Deployment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Database className="w-4 h-4 text-violet-500" />
                  <span>API Integrations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Secure Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Futuristic Abstract Dashboard Visual representing Trevy's capabilities */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 rounded-2xl blur-xl" />
            
            {/* Futuristic Dashboard Card Container */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950 p-6 shadow-2xl">
              {/* Header block with mock status lights */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute" />
                  <span className="font-mono text-xs font-semibold text-slate-300">
                    TREVY_SYSTEMS_ACTIVE
                  </span>
                </div>
                <div className="font-mono text-[10px] text-slate-500 flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded">
                  <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                  Node: Europe-West-2
                </div>
              </div>

              {/* Mock Dashboard Area */}
              <div className="space-y-4">
                {/* Visual 1: Live API Integration status */}
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-900 hover:border-slate-800 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5 font-mono">
                      <RefreshCw className="w-3.5 h-3.5 text-cyan-500 animate-spin" style={{ animationDuration: '4s' }} />
                      INTEGRATION_BUS_SYNCHRONIZER
                    </span>
                    <span className="text-[10px] bg-cyan-950/40 text-cyan-400 px-2 py-0.5 rounded font-mono border border-cyan-800/30">
                      SYNCING_LIVE
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-300 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">&gt;_ Incoming webhook:</span>
                      <span className="text-emerald-400">Stripe Event #92831</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">&gt;_ AI Agent parser:</span>
                      <span className="text-violet-400">Categorized [Enterprise Plan]</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">&gt;_ Actions triggered:</span>
                      <span className="text-cyan-400">WhatsApp Alert & Google Sheets Logging</span>
                    </div>
                  </div>
                </div>

                {/* Visual 2: AI Agent Decisioning Simulator */}
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-900 hover:border-slate-800 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-violet-500" />
                      AGENTIC_AI_RESEARCHER
                    </span>
                    <span className="text-[10px] bg-violet-950/40 text-violet-400 px-2 py-0.5 rounded font-mono border border-violet-800/30">
                      THINKING
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-500 to-cyan-500 h-1.5 rounded-full w-4/5 animate-pulse" />
                    </div>
                    <div className="text-xs font-mono text-slate-400 space-y-1.5 bg-slate-950 p-2.5 rounded border border-slate-900/50">
                      <p className="text-[11px] text-slate-300 leading-normal">
                        "Evaluating product requirements for SaaS portal MVP, configuring secure JWT authentication tokens and PostgreSQL database schema mappings."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual 3: Tech Cloud Server Metrics */}
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-900 hover:border-slate-800 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-slate-400 font-mono flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-indigo-500" />
                      DOCKER_CONTAINER_FLEET
                    </span>
                    <span className="text-xs text-slate-300 font-mono">3 / 3 HEALTHY</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="bg-slate-950 p-2 rounded text-center border border-slate-900 hover:border-cyan-500/20 transition-colors">
                      <span className="block text-[9px] text-slate-500 font-mono">API NODE</span>
                      <span className="text-emerald-400 font-mono text-xs font-semibold">99.98%</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded text-center border border-slate-900 hover:border-cyan-500/20 transition-colors">
                      <span className="block text-[9px] text-slate-500 font-mono">DB POOL</span>
                      <span className="text-cyan-400 font-mono text-xs font-semibold">4ms ping</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded text-center border border-slate-900 hover:border-cyan-500/20 transition-colors">
                      <span className="block text-[9px] text-slate-500 font-mono">REVENUE DB</span>
                      <span className="text-violet-400 font-mono text-xs font-semibold">SECURE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra visual decoration lines to look ultra-professional */}
              <div className="mt-4 pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>COMPILED_BY: TREVY_RUGEMA</span>
                <span>SYSTEM_REV: v2.4.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
