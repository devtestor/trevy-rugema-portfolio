import React from "react";
import { PACKAGES } from "../lib/data";
import { Check, Sparkles, AlertCircle } from "lucide-react";

export default function Packages() {
  const handleSelectPackage = (packageName: string) => {
    // Populate the form's service dropdown or scroll to contact
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Auto-populate form input if visible
      const serviceSelect = document.getElementById("service-needed-select") as HTMLSelectElement;
      if (serviceSelect) {
        // Find best match for option
        if (packageName.includes("Website")) serviceSelect.value = "Landing Page / Lead Capture System";
        else if (packageName.includes("Lead")) serviceSelect.value = "Landing Page / Lead Capture System";
        else if (packageName.includes("Automation")) serviceSelect.value = "AI Workflow Automation";
        else if (packageName.includes("MVP")) serviceSelect.value = "MVP / SaaS Development";
        else if (packageName.includes("DevOps")) serviceSelect.value = "DevOps / Cloud Deployment";
        
        // Dispatch event so state updates
        serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/5 relative" id="packages">
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-xs font-semibold text-cyan-400 font-mono">
            <span>READY TO ENGAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]">
            Featured Solutions
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Choose a high-performing execution package tailored for your business needs, or contact me for a custom consult.
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, idx) => {
            const isAIWorkflow = pkg.id === "pkg-ai-automation";
            const isMvp = pkg.id === "pkg-mvp-saas";
            
            return (
              <div
                key={pkg.id}
                className={`group relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isAIWorkflow 
                    ? "bg-[#14141d]/90 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-950/25 -translate-y-2 scale-[1.02]"
                    : "bg-[#0F0F12] border border-white/5 hover:border-white/15"
                }`}
                id={`package-offer-${pkg.id}`}
              >
                {/* Visual Highlight elements for the featured/favorite card */}
                {isAIWorkflow && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-l from-cyan-500 to-blue-600 text-slate-950 text-[10px] font-mono font-bold px-4 py-1 uppercase rounded-bl-xl tracking-wider flex items-center gap-1 shadow">
                      <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-slate-950 animate-spin" style={{ animationDuration: '6s' }} />
                      RECOMMENDED
                    </div>
                  </div>
                )}

                {/* Main Offer Body */}
                <div className="space-y-6">
                  <div>
                    <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                      PACKAGE #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl font-black text-white font-sans tracking-tight">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Best for description */}
                  <p className="text-sm text-slate-400 leading-relaxed font-sans font-normal">
                    {pkg.bestFor}
                  </p>

                  {/* Price Tag styling: very bold typography concept */}
                  <div className="py-2 border-y border-white/5">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase font-black tracking-widest">
                      INVESTMENT STRUCTURE
                    </span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-sans tracking-tight block mt-1">
                      {pkg.priceTag}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 pt-2">
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold mb-1">
                      WHAT IS INCLUDED:
                    </span>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <span className="text-sm text-slate-300 font-sans font-normal">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form CTAs */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button
                    onClick={() => handleSelectPackage(pkg.name)}
                    className={`w-full py-4 rounded-xl font-bold text-sm tracking-tight transition-all duration-300 border-b-4 cursor-pointer flex items-center justify-center gap-2 ${
                      isAIWorkflow
                        ? "bg-cyan-600 border-cyan-800 text-white hover:bg-cyan-500"
                        : "bg-slate-900 border-slate-950 text-slate-200 hover:bg-slate-800/80 hover:text-white"
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                  </button>
                  <p className="text-center text-[10px] text-slate-500 block mt-3 font-mono">
                    *Requires 50% deposit. Delivery dates guaranteed.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
