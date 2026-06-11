import { useState } from "react";
import { motion } from "motion/react";
import { GRIT_STATS_METRICS } from "../data";
import { ClipboardClamp, MetalRivet } from "./VisualAssets";
import { Eye, Swords, ShieldCheck, Flame, Info } from "lucide-react";

interface AxisPoint {
  label: string;
  englishLabel: string;
  value: number;
  angle: number; // in degrees
  desc: string;
}

export default function GritRadarChart() {
  const [hoveredAxis, setHoveredAxis] = useState<AxisPoint | null>(null);

  const categories: Omit<AxisPoint, "angle">[] = [
    {
      label: "防守压迫",
      englishLabel: "DEFENSIVE PRESSURE",
      value: GRIT_STATS_METRICS.defensivePressure,
      desc: "持球人贴身撕咬、全场紧逼、外线手部干扰及强硬拦截、彻底撕碎战术发起"
    },
    {
      label: "篮板战争",
      englishLabel: "REBOUND WAR",
      value: GRIT_STATS_METRICS.reboundWar,
      desc: "结实无暇的卡位、抢卡对抗、冲抢前场篮板二次进攻，以血肘捍卫空中主权"
    },
    {
      label: "季后赛硬度",
      englishLabel: "PLAYOFF GRIT",
      value: GRIT_STATS_METRICS.playoffGrit,
      desc: "绝不退让的斗志。抢七战役意志力、伤病血战底线，以及极端身体对抗下的心理防线"
    },
    {
      label: "身体对抗",
      englishLabel: "PHYSICAL CONTACT",
      value: GRIT_STATS_METRICS.physicalContact,
      desc: "肌肉与肌肉的死磕、战术犯规威制、卡断低位空间，不提供任何无阻碍行进通道"
    },
    {
      label: "禁区控制",
      englishLabel: "PAINT CONTROL",
      value: GRIT_STATS_METRICS.paintControl,
      desc: "守护油漆区，排空式盖帽威慑。尤因守护神的核心威慑力，外加外线防守的无限换防收口"
    }
  ];

  const center = 135;
  const maxRadius = 88;
  const numAxes = categories.length;
  const axes: AxisPoint[] = categories.map((cat, i) => {
    const angle = -90 + (i * 360) / numAxes;
    return { ...cat, angle };
  });

  const getCoordinates = (value: number, angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const r = (value / 100) * maxRadius;
    const x = center + r * Math.cos(rad);
    const y = center + r * Math.sin(rad);
    return { x, y };
  };

  const pointsString = axes
    .map((axis) => {
      const { x, y } = getCoordinates(axis.value, axis.angle);
      return `${x},${y}`;
    })
    .join(" ");

  const gridLevels = [25, 50, 75, 100];

  return (
    <div
      id="grit-radar-board"
      className="flex flex-col poster-panel-dark p-5 rounded-none relative overflow-hidden shadow-2xl h-full select-none"
    >
      <ClipboardClamp />
      <MetalRivet className="absolute top-2.5 left-2.5 opacity-40" />
      <MetalRivet className="absolute top-2.5 right-2.5 opacity-40" />

      {/* Grid overlay lines */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, #ccc 1px, transparent 1px), linear-gradient(to bottom, #ccc 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />

      {/* Title block */}
      <div className="w-full text-left mb-3.5 border-b border-zinc-800 pb-3 mt-1">
        <span className="font-mono text-[9px] tracking-[0.25em] text-[#ef4444] font-black uppercase block">
          PHYSICAL THREAT METRICS // NYC DEPT DOSSIER
        </span>
        <h3 className="font-display text-2xl font-black tracking-tight text-white mt-1 uppercase">
          铁血指数 <span className="text-[#ef4444] font-mono">GRIT INDEX</span>
        </h3>
      </div>

      {/* Main Radar Container */}
      <div className="flex-1 flex flex-col justify-center items-center relative min-h-[230px]">
        
        {/* Radar Diagram */}
        <div className="relative w-full flex justify-center items-center h-[200px]" id="radar-container-svg">
          <svg width="270" height="200" viewBox="0 0 270 200" className="overflow-visible">
            <defs>
              <filter id="orange-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid levels */}
            {gridLevels.map((lvl) => {
              const lvlPoints = axes
                .map((axis) => {
                  const { x, y } = getCoordinates(lvl, axis.angle);
                  return `${x},${y}`;
                })
                .join(" ");

              return (
                <polygon
                  key={lvl}
                  points={lvlPoints}
                  fill="none"
                  stroke={lvl === 100 ? "rgba(239, 68, 68, 0.4)" : "rgba(255, 255, 255, 0.05)"}
                  strokeWidth={lvl === 100 ? "1.5" : "0.75"}
                  strokeDasharray={lvl !== 100 ? "3,3" : "none"}
                />
              );
            })}

            {/* Axes lines splits */}
            {axes.map((axis, idx) => {
              const pt = getCoordinates(100, axis.angle);
              return (
                <line
                  key={idx}
                  x1={center}
                  y1={center}
                  x2={pt.x}
                  y2={pt.y}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
              );
            })}

            {/* Filled data path */}
            <polygon
              points={pointsString}
              fill="rgba(239, 68, 68, 0.12)"
              stroke="#ef4444"
              strokeWidth="2.5"
              filter="url(#orange-glow)"
              className="transition-all duration-300"
            />

            {/* Points anchors */}
            {axes.map((axis, idx) => {
              const { x, y } = getCoordinates(axis.value, axis.angle);
              return (
                <g
                  key={idx}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredAxis(axis)}
                  onMouseLeave={() => setHoveredAxis(null)}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="rgba(239, 68, 68, 0.3)"
                    className="opacity-40 hover:opacity-100 transition"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#ef4444"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                </g>
              );
            })}

            {/* Label texts overlay */}
            {axes.map((axis, idx) => {
              const pt = getCoordinates(100, axis.angle);
              let textAnchor = "middle";
              let dy = "0.3em";
              let dx = "0";

              if (axis.angle === -90) {
                dy = "-0.7em";
              } else if (axis.angle === 90) {
                dy = "1.2em";
              } else if (axis.angle > -90 && axis.angle < 90) {
                textAnchor = "start";
                dx = "0.5em";
              } else {
                textAnchor = "end";
                dx = "-0.5em";
              }

              return (
                <g key={idx} className="font-sans font-bold text-[10px]">
                  <text
                    x={pt.x}
                    y={pt.y}
                    dx={dx}
                    dy={dy}
                    fill="#e4e4e7"
                    textAnchor={textAnchor}
                    className="tracking-wider text-[9.5px]"
                  >
                    {axis.label}
                  </text>
                  <text
                    x={pt.x}
                    y={pt.y + 11}
                    dx={dx}
                    dy={axis.angle === -90 ? "-0.7em" : dy}
                    fill="#ef4444"
                    fontFamily="monospace"
                    textAnchor={textAnchor}
                    className="text-[9px] font-black"
                  >
                    {axis.value}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Floating details / coordinates tooltip panel */}
        <div className="w-full min-h-[50px] px-3 py-1.5 bg-zinc-950 border border-zinc-900 rounded text-left text-xs mb-3 flex flex-col justify-center">
          {hoveredAxis ? (
            <div>
              <span className="font-mono text-[8px] text-red-500 font-bold uppercase tracking-widest leading-none">category coordinates // target</span>
              <p className="font-sans text-[11.5px] text-white font-bold mt-1">{hoveredAxis.label}: <strong className="text-red-500">{hoveredAxis.value}</strong>/100</p>
              <p className="font-sans text-[10px] text-zinc-400 mt-1 leading-normal">{hoveredAxis.desc}</p>
            </div>
          ) : (
            <p className="font-sans text-[10px] italic text-zinc-500 text-center flex items-center justify-center gap-1.5 py-1">
              <Info className="w-3.5 h-3.5 text-zinc-600 animate-pulse" />
              将光标悬浮在雷达要素顶点上，解密各项物理硬度数值
            </p>
          )}
        </div>
      </div>

      {/* --- Giant Stencil "GRIT SCORE 94" exactly like poster --- */}
      <div className="border-t border-zinc-900 pt-3.5 pb-2 relative z-10 flex flex-col items-center">
        <span className="font-mono text-[7px] text-zinc-500 tracking-[0.3em] uppercase block font-extrabold text-center">
          INTELLIGENT SYSTEM ASSESSMENT CORE
        </span>
        
        {/* Giant Score Stamped Look */}
        <div className="flex items-center gap-3 mt-1 select-none">
          <span className="font-display font-black text-xs text-zinc-400 uppercase tracking-widest font-extrabold rotate-[1.5deg]">
            GRIT SCORE
          </span>
          <span 
            className="font-display font-black text-6xl text-red-600 tracking-tighter transform -rotate-[2deg]" 
            style={{ 
              textShadow: "0px 0px 15px rgba(239, 68, 68, 0.4)",
              fontFamily: '"Bebas Neue", "Anton", "Oswald", "Impact", sans-serif'
            }}
          >
            94
          </span>
        </div>
      </div>
    </div>
  );
}
