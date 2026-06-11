import React, { useState } from "react";
import { motion } from "motion/react";
import { BarbedWire, ConfidentialStamp, MetalRivet } from "./VisualAssets";
import { ShieldCheck, Scroll, Hammer, Scale, Flame, Footprints } from "lucide-react";

interface RuleItem {
  id: string;
  num: string;
  title: string;
  english: string;
  desc: string;
  quote: string;
  icon: React.ReactNode;
}

export default function CourtFieldManual() {
  const [activeRuleIdx, setActiveRuleIdx] = useState<number>(0);

  const rules: RuleItem[] = [
    {
      id: "no-easy",
      num: "RULE 01",
      title: "不给任何轻松得分机会",
      english: "NO EASY BASKETS // NO EXCEPTION",
      desc: "这是麦迪逊广场花园的绝对底线。禁止一切轻松上篮及扣篮。任何试图硬闯禁区的主力，必须用最极端的硬度予以拦截，使对方每一次出手都陷入深渊。",
      quote: "“哪怕你要搭上犯规，也必须把对手连球带人重重地拦截下来。” — 查尔斯·奥克利",
      icon: <Hammer className="w-4 h-4 text-orange-500" />
    },
    {
      id: "paint-belongs-to-33",
      num: "RULE 02",
      title: "禁区所有权归属 33 号",
      english: "THE PAINT BELONGS TO #33",
      desc: "油漆区是帕特里克·尤因的私人圣殿。外线防守人必须把对手向两侧底线驱赶，将其引诱到33号的重火力盖帽防空网内，让对方中锋在对抗下彻底窒息。",
      quote: "“只要我膝盖还能站立，麦迪逊的低位就是禁航区。” — 帕特里克·尤因",
      icon: <ShieldCheck className="w-4 h-4 text-red-500" />
    },
    {
      id: "allout-rebound",
      num: "RULE 03",
      title: "每回篮板球都是生存战争",
      english: "EVERY BOARD IS A LIFE-DIE WAR",
      desc: "卡位不仅是战术，更是搏杀。后线大闸奥克利与梅森必须将对手死死顶出禁区，用最凶悍的肘距撕开空中优势，保护后场篮板并倾巢抢夺二次进攻权。",
      quote: "“不卡位、不拼抢地板球的人，在莱利手下活不过第一节。” — 约翰·斯塔克斯",
      icon: <Footprints className="w-4 h-4 text-blue-400" />
    },
    {
      id: "smother-guard",
      num: "RULE 04",
      title: "全场犬防外线贴身撕咬",
      english: "FULL-COURT RUN & CLAMP DROWNING",
      desc: "持球人在跨过半场前就要呼吸困难。哈珀与斯塔克斯必须提供窒息式的肉搏紧逼，用铁拳般的手部干扰破坏战术枢纽；迫使对方核心在重压之下失误连连。",
      quote: "“我们会像地狱警犬般死死咬着你的脚底，二十四秒不停歇。” — 德里克·哈珀",
      icon: <Flame className="w-4 h-4 text-orange-400" />
    }
  ];

  return (
    <div
      id="court-manual-clipboard"
      className="flex flex-col bg-[#111114] border border-amber-950/40 p-5 rounded relative overflow-hidden backdrop-blur shadow-2xl h-full select-none"
    >
      <MetalRivet className="absolute top-2.5 left-2.5" />
      <MetalRivet className="absolute top-2.5 right-2.5" />
      
      {/* Background paper texture mask */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #ccc, #ccc 1px, transparent 1px, transparent 10px)"
      }} />

      {/* Title Header */}
      <div className="w-full text-left mb-4 border-b border-amber-950/20 pb-3">
        <div className="flex justify-between items-baseline">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#ef4444] font-black uppercase flex items-center gap-1">
            <Scale className="w-3.5 h-3.5" /> MADISON GARDEN FIELD LAWS
          </span>
          <span className="font-mono text-[8px] text-zinc-600">STATION: MSG-33</span>
        </div>
        <h3 className="font-display text-2xl font-black tracking-tight text-white mt-1 uppercase">
          麦迪逊铁血禁区法典 <span className="text-[#ef4444] font-mono">COURT LAWS</span>
        </h3>
      </div>

      <p className="font-sans text-[11px] text-zinc-500 leading-normal text-left mb-3.5">
        解密1991-1994年尼克斯窒息肉搏时代的核心纲领。点击切换教头手写体禁区法条，获取更直观的战术指令内幕：
      </p>

      {/* Rule Selection Drawer Panel */}
      <div className="flex flex-col gap-2 flex-1">
        {rules.map((rule, idx) => {
          const isActive = idx === activeRuleIdx;
          return (
            <motion.div
              key={rule.id}
              onClick={() => setActiveRuleIdx(idx)}
              whileHover={{ x: 2 }}
              className={`p-2.5 rounded text-left border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isActive
                  ? "bg-black/90 border-[#ef4444]/40"
                  : "bg-black/40 border-zinc-900/60 hover:bg-[#151518]"
              }`}
            >
              {/* Highlight bar active */}
              {isActive && (
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#ef4444]" />
              )}

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`p-1 rounded bg-black/60 border ${isActive ? "border-red-900 text-red-500" : "border-zinc-900 text-zinc-600"}`}>
                    {rule.icon}
                  </div>
                  <span className="font-sans text-[12px] font-bold text-zinc-100">{rule.title}</span>
                </div>
                <span className="font-mono text-[9px] text-zinc-600 font-bold">{rule.num}</span>
              </div>

              {/* Reveal body on active only to conserve space and avoid piles */}
              {isActive ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="mt-2.5 border-t border-zinc-900/80 pt-2 flex flex-col gap-2"
                >
                  <span className="font-mono text-[8px] text-zinc-500 tracking-wider block uppercase">{rule.english}</span>
                  <p className="font-sans text-[11.5px] text-zinc-400 leading-relaxed font-normal">{rule.desc}</p>
                  
                  {/* Handwritten vintage quote plate */}
                  <div className="border border-[#ea580c]/10 bg-[#ea580c]/5 outline-1 outline-orange-950/20 p-2 rounded text-[11px] font-serif italic text-zinc-300 leading-relaxed relative mt-1">
                    <div className="absolute top-0.5 right-1.5 font-mono text-[7px] text-orange-600/60">TAPE RECORD</div>
                    {rule.quote}
                  </div>
                </motion.div>
              ) : null}
            </motion.div>
          );
        })}
      </div>

      <BarbedWire className="my-3 opacity-30" />

      {/* Summary Footer */}
      <div className="flex items-center justify-between text-left font-mono text-[9px] text-zinc-500">
        <span className="font-bold">GRID PATTERN: STEEL REINFORCED</span>
        <ConfidentialStamp text="HARD-BOILED" className="scale-75 origin-right" />
      </div>
    </div>
  );
}
