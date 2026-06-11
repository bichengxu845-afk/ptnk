import { motion } from "motion/react";
import { MetalRivet, MaskingTape } from "./VisualAssets";
import { Flame, ShieldCheck } from "lucide-react";

export default function EwingSignatureQuote() {
  return (
    <div
      id="ewing-signature-quote-board"
      className="flex flex-col poster-panel-light text-zinc-900 p-5 rounded-none overflow-hidden"
    >
      <MetalRivet className="absolute top-2.5 left-2.5 opacity-30" />
      <MaskingTape className="-top-3 right-6 w-20 z-20" rotation="rotate-6" />

      {/* Quote symbol stamp watermark */}
      <div className="absolute top-4 right-5 opacity-[0.05] font-serif text-[120px] leading-none text-zinc-950 select-none pointer-events-none">
        “
      </div>

      <div className="text-left relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-1.5 text-red-800 font-mono text-[9px] font-black uppercase tracking-widest border-b border-[#bdad95] pb-2 mb-3">
            <Flame className="w-3.5 h-3.5 animate-pulse text-red-700" /> Crew Creed // #33 Captain Quote
          </div>

          <blockquote className="font-serif italic text-sm md:text-[14.5px] leading-relaxed text-zinc-850 font-semibold pl-2">
            “ 纽约不是温柔的城市，尼克斯从不是粉饰精美的球队。我们靠防守、篮板、对抗和意志力，在东部的战场一步步打到最后。 ”
          </blockquote>
        </div>

        {/* Cursive Signature Graphic vector overlay */}
        <div className="mt-4 flex flex-col items-end pr-1 relative select-none">
          {/* Cursive signature SVG path */}
          <div className="w-44 h-14 relative overflow-visible opacity-85">
            <svg
              className="absolute right-0 bottom-0 text-red-800 font-serif"
              width="180"
              height="60"
              viewBox="0 0 180 60"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Hand-sketched Patrick Ewing cursive path */}
              <path d="M 10 35 C 10 35, 23 12, 28 8 C 33 4, 38 4, 35 12 C 32 20, 25 38, 25 45 C 25 52, 35 48, 40 40 C 45 32, 50 18, 55 12 C 60 6, 62 10, 58 18 C 54 26, 48 38, 48 44 C 48 50, 55 45, 60 38 C 65 31, 72 15, 75 10 C 78 5, 80 8, 76 16 C 72 24, 66 38, 66 43 C 66 48, 73 42, 78 35 M 95 38 Q 110 32 115 28 T 110 34 T 120 28 T 130 35 T 145 20 M 90 20 L 140 20 M 110 12 L 110 40 L 155 40 L 165 48" />
            </svg>
          </div>
          
          <cite className="font-mono text-[9px] text-zinc-500 font-extrabold block not-italic uppercase tracking-widest text-right mt-1.5 pt-1.5 border-t border-dashed border-[#bdad95] w-full">
            — PATRICK EWING, #33 TEAM CAPTAIN 帕特里克·尤因
          </cite>
        </div>
      </div>
    </div>
  );
}
