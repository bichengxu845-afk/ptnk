import { motion } from "motion/react";
import { MetalRivet, RetroPaperclip, MaskingTape } from "./VisualAssets";
import { Award, ShieldAlert, Swords } from "lucide-react";

export default function EwingCoreCard() {
  return (
    <div
      id="ewing-core-card"
      className="flex flex-col poster-panel-light text-zinc-900 p-5 rounded-none"
    >
      {/* Visual decorative tapes/clips */}
      <MaskingTape className="-top-3 left-4 w-18 z-20" rotation="-rotate-6" />
      <RetroPaperclip className="top-1 right-3 opacity-90" />
      <MetalRivet className="absolute bottom-2.5 left-2.5 opacity-30" />

      {/* Manila folder top system label */}
      <div className="absolute -top-[13px] left-3 bg-[#bdad94] px-2 py-0.5 border-t border-x border-[#bdad94] font-mono text-[6.5px] text-zinc-800 font-extrabold uppercase tracking-widest rounded-t-sm">
         dossier NY_CASE_DEPT_33
      </div>

      {/* Title */}
      <div className="border-b-2 border-zinc-900 pb-2 mb-3 mt-1 text-left">
        <span className="font-mono text-[9px] text-[#ef4444] font-black uppercase tracking-widest">
          #33 PAINT CHIEFTAIN // DETECTIVE FILE
        </span>
        <h3 className="font-display text-2xl font-black text-zinc-950 uppercase leading-none mt-1">
          33号禁区核心 <span className="font-mono text-red-800">[EWING CORE]</span>
        </h3>
      </div>

      {/* Central Split Layout: Photo Mugshot on Left, Stats on Right */}
      <div className="flex gap-4 items-start select-none">
        
        {/* Ewing Mugshot block with grids */}
        <div className="relative w-28 h-36 bg-neutral-900 border-2 border-neutral-700 flex flex-col justify-between items-center overflow-hidden flex-shrink-0 shadow-md">
          {/* Prison identity grids */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-col justify-between p-0.5">
            <div className="border-b border-white/50 w-full h-[25%]" />
            <div className="border-b border-white/50 w-full h-[25%]" />
            <div className="border-b border-white/50 w-full h-[25%]" />
            <div className="w-full h-[25%]" />
          </div>

          <div className="absolute top-1 left-2 opacity-30 text-amber-500 font-mono text-[6px] font-black tracking-widest uppercase">
            MSG CAMERA EYE
          </div>

          <img
            src="/src/assets/images/ewing_portrait_1781148780005.png"
            alt="Patrick Ewing"
            className="w-full h-full object-cover filter grayscale contrast-[1.4] brightness-95 relative z-10"
            referrerPolicy="no-referrer"
          />

          <div className="w-full bg-[#1c1917] text-amber-500 font-mono text-[7.5px] py-1 font-bold text-center border-t border-neutral-800 relative z-20">
            PATRICK EWING #33
          </div>
        </div>

        {/* Dynamic Stats Plate in typewriter grid */}
        <div className="flex-1 flex flex-col gap-1.5 text-left text-xs font-mono font-black uppercase text-zinc-900">
          <div className="border-b border-[#b0a48b]/60 pb-1 flex justify-between items-baseline">
            <span className="text-zinc-500 font-bold text-[8.5px]">场均得分 PPG</span>
            <span className="text-xl font-black font-display text-red-800">23.6</span>
          </div>
          <div className="border-b border-[#b0a48b]/60 pb-1 flex justify-between items-baseline">
            <span className="text-zinc-500 font-bold text-[8.5px]">场均篮板 RPG</span>
            <span className="text-xl font-black font-display text-red-800">10.9</span>
          </div>
          <div className="border-b border-[#b0a48b]/60 pb-1 flex justify-between items-baseline">
            <span className="text-zinc-500 font-bold text-[8.5px]">场均盖帽 BPG</span>
            <span className="text-xl font-black font-display text-red-800">2.8</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-zinc-500 font-bold text-[8.5px]">出场时间 MPG</span>
            <span className="text-xl font-black font-display text-[#ef4444]">38.1</span>
          </div>

          {/* Quick badge */}
          <div className="bg-[#fadfa3] border border-dashed border-[#b0a48b] text-[8px] font-bold text-zinc-800 px-2 py-1 mt-1 text-center font-sans tracking-tight">
            🎖️ 联盟第一重度铁骨禁航守护神
          </div>
        </div>
      </div>

      {/* --- Historic Highlights Stamp cards below, exactly matching poster --- */}
      <div className="flex flex-col gap-2 mt-4 pt-3.5 border-t-2 border-dashed border-[#bdad95] text-left">
        
        {/* Banner 1: PLAYOFF REBOUNDS LEADER */}
        <div className="bg-[#1c1917] text-[#eae2ce] p-2.5 rounded-none shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-1.5 min-w-0">
            <Award className="text-orange-500 w-4 h-4 flex-shrink-0 animate-pulse" />
            <div className="min-w-0">
              <span className="font-mono text-[7px] text-zinc-500 block leading-none uppercase">1994 PLAYOFF REBOUNDS LEADER</span>
              <span className="font-sans font-bold text-[11px] overflow-hidden truncate">1994季后赛篮板总数 (联盟第1)</span>
            </div>
          </div>
          <span className="font-display font-black text-2xl text-orange-500 pl-2">293</span>
        </div>

        {/* Banner 2: EASTERN DECISIONS CLASH */}
        <div className="bg-red-950/10 border border-red-900/30 text-red-900 p-2.5 rounded-none flex flex-col justify-between">
          <div className="flex items-center gap-1.5 font-mono text-[7px] text-red-800 font-black tracking-widest uppercase">
            <ShieldAlert className="w-3.5 h-3.5" /> 1994 ECF GAME 7 DECISIVE CLIMAX
          </div>
          <div className="font-sans font-bold text-[11.5px] mt-1 leading-snug">
            1994东部决战抢七大战: <span className="text-red-700 font-extrabold pr-0.5">24 PTS</span> | <span className="text-red-700 font-extrabold pr-0.5">22 REB</span> | 搏命飞补绝杀晋级
          </div>
          <span className="font-mono text-[7px] text-zinc-500 font-extrabold mt-1.5 block uppercase border-t border-dashed border-red-950/15 pt-1 text-right">
            LED KNICKS TO THE FINALS ★ MSG ARCHIVE
          </span>
        </div>

      </div>
    </div>
  );
}
