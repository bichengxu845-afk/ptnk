import { useState } from "react";
import { motion } from "motion/react";
import { MetalRivet, RetroPaperclip } from "./VisualAssets";
import { ShieldAlert, Trophy } from "lucide-react";

export default function BlueWall() {
  const [activeTab, setActiveTab] = useState<number>(2); // Default to 1993-94 (apex)

  const campaigns = [
    {
      seasonStr: "1991-92 赛季",
      record: "51胜 - 31负",
      tagline: "全联盟首个铁血防守成形期",
      metrics: [
        { label: "对手场均得分", english: "OPP PPG", value: "97.7", numeric: 97.7, maxRange: 110, rank: "联盟第2", rankColor: "text-amber-500 border-amber-500/30 bg-amber-500/10" },
        { label: "防守效率值", english: "DEF RATING", value: "104.2", numeric: 104.2, maxRange: 115, rank: "联盟第2", rankColor: "text-amber-500 border-amber-500/30 bg-amber-500/10" },
        { label: "对手命中率", english: "OPP FG%", value: "43.6%", numeric: 43.6, maxRange: 50, rank: "联盟第3", rankColor: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
        { label: "对手禁区得分", english: "PAINT PPG", value: "38.6", numeric: 38.6, maxRange: 50, rank: "联盟第2", rankColor: "text-amber-500 border-amber-500/30 bg-amber-500/10" }
      ]
    },
    {
      seasonStr: "1992-93 赛季",
      record: "60胜 - 22负",
      tagline: "常规赛大杀四方，窒息防守登峰造极",
      metrics: [
        { label: "对手场均得分", english: "OPP PPG", value: "95.4", numeric: 95.4, maxRange: 110, rank: "联盟第1", rankColor: "text-[#f97316] border-[#f97316]/30 bg-[#f97316]/10 font-bold" },
        { label: "防守效率值", english: "DEF RATING", value: "102.3", numeric: 102.3, maxRange: 115, rank: "联盟第1", rankColor: "text-[#f97316] border-[#f97316]/30 bg-[#f97316]/10 font-bold" },
        { label: "对手命中率", english: "OPP FG%", value: "42.0%", numeric: 42.0, maxRange: 50, rank: "联盟第1", rankColor: "text-[#f97316] border-[#f97316]/30 bg-[#f97316]/10 font-bold" },
        { label: "对手禁区得分", english: "PAINT PPG", value: "36.1", numeric: 36.1, maxRange: 50, rank: "联盟第1", rankColor: "text-[#f97316] border-[#f97316]/30 bg-[#f97316]/10 font-bold" }
      ]
    },
    {
      seasonStr: "1993-94 赛季",
      record: "57胜 - 25负",
      tagline: "总决赛搏命阶段，史诗级高强度物理封锁",
      metrics: [
        { label: "对手场均得分", english: "OPP PPG", value: "91.5", numeric: 91.5, maxRange: 110, rank: "联盟第1", rankColor: "text-[#f97316] border-[#f97316]/30 bg-[#f97316]/10 font-bold" },
        { label: "防守效率值", english: "DEF RATING", value: "101.2", numeric: 101.2, maxRange: 115, rank: "联盟第1", rankColor: "text-[#f97316] border-[#f97316]/30 bg-[#f97316]/10 font-bold" },
        { label: "对手命中率", english: "OPP FG%", value: "41.3%", numeric: 41.3, maxRange: 50, rank: "联盟第1", rankColor: "text-[#f97316] border-[#f97316]/30 bg-[#f97316]/10 font-bold" },
        { label: "对手禁区得分", english: "PAINT PPG", value: "32.4", numeric: 32.4, maxRange: 50, rank: "联盟第1", rankColor: "text-[#f97316] border-[#f97316]/30 bg-[#f97316]/10 font-bold" }
      ]
    }
  ];

  const currentCamp = campaigns[activeTab];

  return (
    <div
      id="bluewall-board"
      className="flex flex-col poster-panel-dark p-5 rounded-none relative shadow-2xl overflow-hidden"
    >
      <MetalRivet className="absolute top-2.5 left-2.5 opacity-40" />
      <MetalRivet className="absolute top-2.5 right-2.5 opacity-40" />
      
      {/* Ripped Paper Clip effect */}
      <RetroPaperclip className="top-1 right-8 opacity-70" />

      {/* Blue Wall Header */}
      <div className="w-full text-left mb-3.5 border-b border-zinc-805 pb-3 relative">
        <span className="font-mono text-[9px] tracking-[0.25em] text-[#2563eb] font-extrabold uppercase block">
          DEFENSIVE SHIELD // THE BLUE WALL OF NEW YORK
        </span>
        <h3 className="font-display text-2xl font-black tracking-tight text-white mt-1 uppercase flex justify-between items-center">
          <span>蓝色铁壁 <span className="text-blue-500 font-mono">BLUE WALL</span></span>
          <span className="font-mono text-[10px] text-zinc-500 font-normal">LOCKDOWN MATRIX</span>
        </h3>
      </div>

      {/* Year Tabs */}
      <div className="flex gap-1 mb-3.5 select-none text-[9.5px]">
        {campaigns.map((camp, idx) => (
          <button
            key={idx}
            id={`bluewall-tab-${idx}`}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-1 px-1 rounded font-mono border text-center transition-all cursor-pointer ${
              activeTab === idx
                ? "bg-blue-950/20 text-blue-400 border-blue-500/40 font-bold"
                : "bg-zinc-950/60 text-zinc-500 border-zinc-900 hover:text-zinc-300"
            }`}
          >
            {camp.seasonStr.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Description sheet */}
      <div className="bg-zinc-950 border border-zinc-900 border-l-2 border-l-blue-600 px-3 py-2 rounded text-xs text-zinc-400 mb-4 flex justify-between items-center">
        <div className="text-left">
          <span className="font-mono text-[8px] text-zinc-500 block uppercase">CAMPAIGN TARGET</span>
          <span className="font-sans font-medium text-white text-[11px] truncate">{currentCamp.tagline}</span>
        </div>
        <div className="text-right">
          <span className="font-mono text-[8px] text-zinc-500 block uppercase">SYSTEM RECORD</span>
          <span className="font-mono font-black text-amber-500 text-[10.5px] uppercase flex items-center justify-end gap-0.5">
            <Trophy className="w-3 h-3" /> {currentCamp.record}
          </span>
        </div>
      </div>

      {/* Metrics list with blue bars matching poster */}
      <div className="flex flex-col gap-3.5">
        {currentCamp.metrics.map((metric, idx) => {
          // For PPG lower is better, so show inverted bar length
          let percentage = 0;
          if (metric.english === "OPP PPG") {
            percentage = ((120 - metric.numeric) / 40) * 100; // inverted so lower ppg is longer bar (more blue walls)
          } else if (metric.english === "DEF RATING") {
            percentage = ((120 - metric.numeric) / 30) * 100;
          } else if (metric.english === "OPP FG%") {
            percentage = ((52 - metric.numeric) / 15) * 100;
          } else {
            percentage = ((50 - metric.numeric) / 25) * 100;
          }
          // Clamp percentage between 10% and 95%
          percentage = Math.min(Math.max(percentage, 15), 95);

          return (
            <div key={idx} className="flex flex-col text-left">
              <div className="flex justify-between items-baseline font-mono text-[9px]">
                <div className="flex gap-1.5 items-center">
                  <span className="font-sans font-extrabold text-zinc-200">{metric.label}</span>
                  <span className="text-zinc-500 text-[7.5px] tracking-wide">{metric.english}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-xs text-[#2563eb]">
                    {metric.value}
                  </span>
                  <span className={`${metric.rankColor} text-[8px] font-black px-1.5 py-0.2 border rounded-sm`}>
                    {metric.rank}
                  </span>
                </div>
              </div>
              
              <div className="w-full bg-zinc-950 h-3 rounded-none border border-zinc-900 mt-1 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-[60%] w-px bg-zinc-900/60 z-10" />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 h-full shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Shield watermark seal overlay */}
      <div className="mt-4 border-t border-zinc-900 pt-3 flex items-center justify-between text-left font-mono text-[9px] text-zinc-500">
        <span className="font-bold flex items-center gap-1">
          <ShieldAlert className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
          BLUE SHIELD MATRIX STATUS CODE: ACTIVE
        </span>
        <div className="border border-blue-500/30 text-[8px] px-1.5 py-0.2 bg-blue-950/15 text-blue-400 font-mono font-black rounded uppercase">
          MSG SHIELD
        </div>
      </div>
    </div>
  );
}
