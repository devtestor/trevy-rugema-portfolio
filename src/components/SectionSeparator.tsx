import React from "react";

export default function SectionSeparator() {
  return (
    <div className="relative w-full overflow-hidden py-1 flex items-center justify-center">
      {/* Absolute background blur element */}
      <div className="absolute inset-0 bg-cyan-950/5 blur-sm select-none pointer-events-none" />

      {/* Layer 1: Left faded gradient line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-violet-500/20" />

      {/* Centerpiece: Subtle glowing data link pulse node */}
      <div className="relative mx-4 flex items-center justify-center">
        <div className="absolute w-2.5 h-2.5 rounded-full bg-cyan-500/30 animate-ping" />
        <div className="relative w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
      </div>

      {/* Layer 2: Right faded gradient line */}
      <div className="flex-1 h-px bg-gradient-to-r from-violet-500/20 via-blue-500/25 to-transparent" />
    </div>
  );
}
