import React from "react";
import { CLIENT_TYPES } from "../lib/data";
import { 
  Zap, 
  Store, 
  Home, 
  ShoppingBag, 
  Briefcase, 
  Award, 
  MapPin, 
  Coins, 
  Repeat, 
  Activity 
} from "lucide-react";

const getClientIcon = (name: string) => {
  switch (name) {
    case "Zap":
      return <Zap className="w-5 h-5 text-cyan-400" />;
    case "Store":
      return <Store className="w-5 h-5 text-blue-400" />;
    case "Home":
      return <Home className="w-5 h-5 text-violet-400" />;
    case "ShoppingBag":
      return <ShoppingBag className="w-5 h-5 text-indigo-400" />;
    case "Briefcase":
      return <Briefcase className="w-5 h-5 text-emerald-400" />;
    case "Award":
      return <Award className="w-5 h-5 text-orange-400" />;
    case "MapPin":
      return <MapPin className="w-5 h-5 text-pink-400" />;
    case "Coins":
      return <Coins className="w-5 h-5 text-yellow-400" />;
    case "Repeat":
      return <Repeat className="w-5 h-5 text-teal-400" />;
    case "Activity":
      return <Activity className="w-5 h-5 text-cyan-400" />;
    default:
      return <Zap className="w-5 h-5 text-cyan-400" />;
  }
};

export default function WhoIHelp() {
  return (
    <section id="solutions" className="py-24 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="absolute top-[40%] left-[-10%] w-[45%] h-[45%] rounded-full bg-violet-500/5 blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/30 text-xs font-semibold text-violet-400 font-mono">
            <span>TARGET CLIENTS / MARKETS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-tight">
            WHO I HELP
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto font-sans font-normal">
            I partner with forward-thinking business owners seeking to automate human-fatigue tasks and launch fast-loading digital systems.
          </p>
        </div>

        {/* Clients Grid - Bento-like minimal layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CLIENT_TYPES.map((client) => (
            <div
              key={client.id}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#121215] p-6 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/20 hover:bg-[#16161D] hover:-translate-y-1"
              id={`client-card-${client.id}`}
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-cyan-500/10 group-hover:to-violet-500/10 transition-colors">
                  {getClientIcon(client.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {client.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
                  {client.description}
                </p>
              </div>

              {/* Decorative accent bottom line */}
              <div className="mt-6 w-8 h-0.5 bg-slate-800 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-violet-500 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
