import React from "react";
import { MetalRivet } from "./VisualAssets";

export default function PlayoffTimeline() {
  const milestones = [
    {
      year: "1991",
      engTitle: "RILEY ARRIVES",
      chiTitle: "莱利到来",
      sub: "铁血体系建立",
      img: "/src/assets/images/riley_1991_timeline_1781149287685.png",
      desc: "帕特·莱利执掌帅印，注入‘不搏杀，毋宁死’的极度防守基因，麦迪逊禁区铁血熔炉正式开启。"
    },
    {
      year: "1992",
      engTitle: "DEFENSIVE IDENTITY",
      chiTitle: "防守风格成型",
      sub: "铁血尼克斯开端",
      img: "/src/assets/images/defense_1992_timeline_1781149307811.png",
      desc: "物理对抗防线统治东部，凭借无缝双人包夹与强硬肢体防守，将公牛窒息逼入绝境，防守成宗。"
    },
    {
      year: "1993",
      engTitle: "60-WIN SEASON",
      chiTitle: "60胜22负",
      sub: "常规赛巅峰",
      img: "/src/assets/images/oakley_portrait_1781148797707.png",
      desc: "整季统治低位防区。奥克利与麦森的铁肘筑起铜墙铁壁。取得队史顶级的60胜荣登联盟榜首。"
    },
    {
      year: "1994 ECF",
      engTitle: "EWING 24+22",
      chiTitle: "东决抢七大战",
      sub: "24分22篮板重夺东部王座",
      img: "/src/assets/images/ewing_portrait_1781148780005.png",
      desc: "尤因在东部决战抢七中祭出史诗级制霸表现，狂揽24分22个篮板，战术犯规与防空封盖震撼全场。"
    },
    {
      year: "1994 FINALS",
      engTitle: "7-GAME WAR",
      chiTitle: "总决赛七场大战",
      sub: "距离奥布莱恩杯一步之遥",
      img: "/src/assets/images/finals_1994_timeline_1781149323113.png",
      desc: "与奥拉朱旺和火箭队战至抢七，全轮总决赛以残暴之盾互相绞肉。虽一球憾负，却成就无上坚毅丰碑。"
    }
  ];

  return (
    <div id="grit-era-timeline-board" className="poster-panel-dark p-6 mt-6 relative overflow-hidden select-none">
      <MetalRivet className="absolute top-2.5 left-2.5 opacity-30" />
      <MetalRivet className="absolute top-2.5 right-2.5 opacity-30" />
      
      {/* Timeline Header Styled EXACTLY like the image */}
      <div className="w-full text-left mb-6 border-b border-[#cbd5e1]/10 pb-3">
        <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight uppercase flex items-baseline gap-2">
          <span className="poster-text-orange font-mono">铁血时代线 1991-1994</span> 
          <span className="text-zinc-500 font-mono text-sm tracking-widest font-normal">THE GRIT ERA TIMELINE</span>
        </h3>
      </div>

      {/* 5-Column Horizontal Milestones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {milestones.map((ms, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-[#0d0e12]/80 border border-zinc-900 overflow-hidden group transition-all duration-300 hover:border-[#ebdcc4]/25"
          >
            {/* Year Block */}
            <div className="bg-[#12141c] px-3 py-1.5 border-b border-zinc-900 flex justify-between items-baseline font-mono">
              <span className="text-[#f25e1b] font-black text-sm tracking-tight">{ms.year}</span>
              <span className="text-zinc-500 text-[8px] tracking-widest uppercase font-extrabold">HIST_LOG</span>
            </div>

            {/* Title stacked */}
            <div className="p-3 text-left border-b border-[#ebdcc4]/5 min-h-[56px] flex flex-col justify-center">
              <span className="font-display font-medium text-[9px] text-zinc-500 tracking-wider leading-none uppercase select-all block">
                {ms.engTitle}
              </span>
              <h4 className="font-display font-black text-xs text-white uppercase tracking-tight block mt-1 leading-none select-all">
                {ms.chiTitle}
              </h4>
              <span className="font-sans text-[8px] text-[#f25e1b] mt-0.5 font-bold tracking-tight block leading-tight">
                {ms.sub}
              </span>
            </div>

            {/* Vintage Image Section */}
            <div className="w-full aspect-[3/2] bg-zinc-950 overflow-hidden relative border-b border-zinc-900">
              <img 
                src={ms.img} 
                alt={ms.chiTitle} 
                className="w-full h-full object-cover filter grayscale contrast-[1.35] brightness-[0.88] transition-transform duration-300 group-hover:scale-105 group-hover:brightness-100 group-hover:grayscale-[0.3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.85))] pointer-events-none" />
              <div className="absolute top-1 left-2 opacity-35 text-[#f25e1b] font-mono text-[5.5px] font-black tracking-widest uppercase">
                STAGED REC // CHR_{ms.year.replace(/\s+/g, "")}
              </div>
            </div>

            {/* Description Card */}
            <div className="p-3 text-left font-sans flex-1 flex flex-col justify-center">
              <p className="text-[10.5px] leading-relaxed text-zinc-400 font-medium select-text">
                {ms.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- SPECTACULAR FOOTER BRANDING SECTION MATCHING IMAGE EXACTLY --- */}
      <div className="mt-8 pt-5 border-t border-[#cbd5e1]/10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left classic stars subtitle */}
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-500 font-extrabold tracking-widest uppercase italic">
          ★★★ GANGS OF NEW YORK KNICKS  —  THE GRIT ERA  —  1990s EWING ERA ★★★
        </div>

        {/* Right giant stenciled logo badge */}
        <div className="flex items-center gap-3 bg-[#0c0d12] border border-[#f25e1b]/35 px-4.5 py-2 relative shadow-lg">
          <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#f25e1b]" />
          
          <div className="text-left font-display">
            <h2 className="text-[#2563eb] font-black text-2xl tracking-tighter leading-none font-sans uppercase font-black" style={{ fontFamily: '"Bebas Neue", "Anton", "Oswald", "Impact", sans-serif' }}>
              NEW YORK
            </h2>
            <h1 className="text-[#f25e1b] font-black text-3xl font-black mt-0.5 tracking-tighter leading-none uppercase" style={{ fontFamily: '"Bebas Neue", "Anton", "Oswald", "Impact", sans-serif' }}>
              KNICKS
            </h1>
          </div>
          
          <div className="border-l border-zinc-800 pl-3.5 flex flex-col justify-center text-left font-mono text-[8px] text-zinc-550 font-black">
            <span className="text-[#ebdcc4] uppercase font-bold text-[9px]">EST. 1946</span>
            <span className="text-zinc-500 block leading-tight mt-1">NEW YORK TOUGH.</span>
            <span className="text-[#f25e1b] block leading-tight">NEVER BACK DOWN.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

