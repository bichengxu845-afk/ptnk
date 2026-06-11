import React from "react";

/**
 * A highly detailed horizontal SVG Barbed Wire strand.
 * Pure vector design mimicking twisted iron wire with razor-sharp metal knots.
 */
export function BarbedWire({ className = "h-4 w-full" }: { className?: string }) {
  return (
    <svg
      className={`${className} text-zinc-700/80`}
      viewBox="0 0 400 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      preserveAspectRatio="none"
    >
      {/* Central main double twisted wire strands */}
      <path d="M 0,5 Q 40,7 80,4 Q 120,6 160,5 Q 200,4 240,6 Q 280,5 320,4 Q 360,7 400,5" opacity="0.6" />
      <path d="M 0,7 Q 40,4 80,6 Q 120,5 160,7 Q 200,5 240,4 Q 280,6 320,5 Q 360,4 400,6" opacity="0.4" />

      {/* Repeating barbed wire knots */}
      <g>
        <path d="M 40,2 Q 44,7 48,10 C 44,8 41,3 40,2 Z" fill="currentColor" />
        <path d="M 50,2 L 42,9 M 42,3 L 49,9" stroke="currentColor" strokeWidth="1.2" />
      </g>
      <g>
        <path d="M 110,3 Q 114,8 118,10 C 114,8 112,4 110,3 Z" fill="currentColor" />
        <path d="M 120,3 L 112,9 M 112,3 L 119,9" stroke="currentColor" strokeWidth="1.2" />
      </g>
      <g>
        <path d="M 180,2 Q 184,7 188,10 C 184,8 181,3 180,2 Z" fill="currentColor" />
        <path d="M 190,2 L 182,9 M 182,3 L 189,9" stroke="currentColor" strokeWidth="1.2" />
      </g>
      <g>
        <path d="M 250,3 Q 254,8 258,10 C 254,8 252,4 250,3 Z" fill="currentColor" />
        <path d="M 260,3 L 252,9 M 252,3 L 259,9" stroke="currentColor" strokeWidth="1.2" />
      </g>
      <g>
        <path d="M 320,2 Q 324,7 328,10 C 324,8 321,3 320,2 Z" fill="currentColor" />
        <path d="M 330,2 L 322,9 M 322,3 L 329,9" stroke="currentColor" strokeWidth="1.2" />
      </g>
      <g>
        <path d="M 380,3 Q 384,8 388,10 Z" fill="currentColor" />
        <path d="M 390,3 L 382,9 M 382,3 L 389,9" stroke="currentColor" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

/**
 * Old Stencil Stamp Badge layout.
 * Mimics manual ink stamp seals on forensic files.
 */
export function ConfidentialStamp({
  text = "CONFIDENTIAL",
  color = "border-red-700 text-red-600 bg-red-950/15",
  className = ""
}: {
  text?: string;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-[9px] font-black tracking-[0.25em] px-2.5 py-0.5 border-2 rounded uppercase inline-block select-none transform -rotate-2 ${color} ${className}`}
      style={{ textShadow: "0 0 2px rgba(220, 38, 38, 0.1)" }}
    >
      ⚠️ {text}
    </div>
  );
}

/**
 * Metal corner brackets / tactical blackboard clips.
 */
export function ClipboardClamp() {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-24 h-4 bg-zinc-800 border-x border-b border-zinc-700/60 rounded-b flex items-center justify-center gap-6 shadow-md z-20">
      <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full border border-zinc-600/40" />
      <span className="font-mono text-[7px] text-zinc-500 tracking-widest font-black leading-none">SYS.33</span>
      <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full border border-zinc-600/40" />
    </div>
  );
}

/**
 * Metal rivet screw overlay.
 */
export function MetalRivet({ className = "" }: { className?: string }) {
  return (
    <div className={`w-3 h-3 rounded-full bg-linear-to-br from-zinc-700 to-zinc-950 border border-zinc-800 shadow flex items-center justify-center relative ${className}`}>
      {/* Slotted screw center line */}
      <div className="w-1.5 h-[1.5px] bg-zinc-900/80 transform rotate-45" />
    </div>
  );
}

/**
 * Realistic textured masking tape.
 * Used to stick archive cards on the background.
 */
export function MaskingTape({ className = "", rotation = "rotate-2" }: { className?: string; rotation?: string }) {
  return (
    <div className={`absolute select-none pointer-events-none ${className} ${rotation} z-30`}>
      <div 
        className="h-6 bg-amber-100/25 border-y border-amber-900/10 backdrop-blur-[1px] relative shadow-xs"
        style={{
          clipPath: "polygon(0% 15%, 5% 5%, 8% 25%, 95% 5%, 100% 20%, 98% 85%, 93% 95%, 4% 92%)",
          boxShadow: "inset 0 0 4px rgba(180, 150, 100, 0.3)"
        }}
      >
        <div className="absolute inset-0 bg-yellow-900/[0.04] mix-blend-overlay" />
        <div className="absolute inset-y-0 left-1/4 w-px bg-yellow-950/[0.08]" />
        <div className="absolute inset-y-0 right-1/4 w-px bg-yellow-950/[0.08]" />
      </div>
    </div>
  );
}

/**
 * Vintage metallic pushpin with a soft shadow cast.
 */
export function RustyPushPin({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute w-5 h-5 pointer-events-none select-none z-40 ${className}`}>
      <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[2px_4px_3px_rgba(0,0,0,0.65)]">
        {/* Needle shadow */}
        <line x1="8" y1="16" x2="4" y2="20" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" />
        {/* Metal Pin Needle */}
        <line x1="8" y1="16" x2="5" y2="19" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        {/* Pin plastic knob base red */}
        <ellipse cx="11" cy="13" rx="4" ry="2" fill="#991b1b" transform="rotate(-30 11 13)" />
        {/* Pin plastic main body */}
        <path d="M 10,8 C 12,9 14,11 15,13 L 13,15 C 11,14 10,12 10,8 Z" fill="#dc2626" />
        {/* Pin metallic highlight */}
        <circle cx="12" cy="11" r="2.5" fill="#f87171" opacity="0.8" />
        <circle cx="10" cy="9" r="1" fill="#ffffff" />
      </svg>
    </div>
  );
}

/**
 * Animated or Static CRT television noise / scanning raster lines overlay.
 */
export function OldTvNoise() {
  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden mix-blend-screen opacity-[0.035] select-none">
      <div 
        className="w-full h-[500%] bg-repeat" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%),
            linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))
          `,
          backgroundSize: "100% 4px, 6px 100%",
          animation: "scrollNoise 30s linear infinite"
        }}
      />
      <style>{`
        @keyframes scrollNoise {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100px); }
        }
      `}</style>
    </div>
  );
}

/**
 * Crimson or blue forensic investigator string connecting pins on a cork board.
 */
export function ConnectingLine({ x1, y1, x2, y2, color = "stroke-red-950/80" }: { x1: string; y1: string; x2: string; y2: string; color?: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
      {/* Thread shadow */}
      <path 
        d={`M ${x1} ${y1} Q ${(parseFloat(x1)+parseFloat(x2))/2} ${Math.min(parseFloat(y1), parseFloat(y2))-20} ${x2} ${y2}`} 
        className="stroke-black/55 fill-none" 
        strokeWidth="2.5" 
        strokeDasharray="1,1" 
      />
      {/* Main real physical wool fiber string */}
      <path 
        d={`M ${x1} ${y1} Q ${(parseFloat(x1)+parseFloat(x2))/2} ${Math.min(parseFloat(y1), parseFloat(y2))-20} ${x2} ${y2}`} 
        className={`${color} fill-none`} 
        strokeWidth="1.2" 
      />
    </svg>
  );
}

/**
 * Retro Madison Square Garden score display utilizing digital segment layout.
 */
export function RetroScoreboard({ homeVal, awayVal, title = "MSG TIMELINE" }: { homeVal: string; awayVal: string; title?: string }) {
  return (
    <div className="bg-[#0b0c10] border border-orange-950/50 p-2.5 rounded-sm flex flex-col items-center select-none shadow">
      <span className="font-mono text-[7px] text-zinc-500 tracking-widest uppercase font-bold">{title}</span>
      <div className="flex items-center gap-3 mt-1 font-mono">
        <div className="bg-[#1a0808] border border-red-950 p-1.5 rounded flex items-center justify-center font-black">
          <span 
            className="text-red-500 font-bold text-lg md:text-xl tracking-widest uppercase"
            style={{ 
              fontFamily: "Courier, monospace", 
              textShadow: "0 0 6px rgba(239, 68, 68, 0.8)",
              letterSpacing: "0.15em"
            }}
          >
            {homeVal}
          </span>
        </div>
        <span className="text-zinc-600 font-bold text-xs">:</span>
        <div className="bg-[#081a10] border border-green-950 p-1.5 rounded flex items-center justify-center font-black">
          <span 
            className="text-green-500 font-bold text-lg md:text-xl tracking-widest uppercase"
            style={{ 
              fontFamily: "Courier, monospace", 
              textShadow: "0 0 6px rgba(34, 197, 94, 0.8)",
              letterSpacing: "0.15em"
            }}
          >
            {awayVal}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Realistic vector steel paperclip.
 */
export function RetroPaperclip({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`absolute select-none pointer-events-none z-30 ${className}`} 
      viewBox="0 0 24 50" 
      width="14" 
      height="30" 
      fill="none" 
      stroke="#71717a" 
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M12 45 V 10 C 12 7, 18 7, 18 10 V 38 C 18 42, 6 42, 6 38 V 16 C 6 12, 10 12, 10 16 V 32" />
    </svg>
  );
}

/**
 * Retro parquet wood flooring vector backdrop (Madison Square Garden theme).
 */
export function ParquetWoodFloorBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.045] select-none overflow-hidden mix-blend-overlay">
      <svg width="100%" height="100%">
        <pattern id="parquet" width="60" height="60" patternUnits="userSpaceOnUse">
          {/* Parquet boundaries */}
          <rect width="60" height="60" fill="none" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="30" y1="0" x2="30" y2="60" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="0" y1="15" x2="30" y2="15" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="30" y2="30" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="0" y1="45" x2="30" y2="45" stroke="#ffffff" strokeWidth="0.5" />
          
          <line x1="30" y1="15" x2="60" y2="15" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="30" y1="30" x2="60" y2="30" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="30" y1="45" x2="60" y2="45" stroke="#ffffff" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#parquet)" />
      </svg>
    </div>
  );
}
