import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TACTICAL_HOTSPOTS, PLAYOFF_SERIES_DATA } from "../data";
import { TacticalHotspot } from "../types";
import { ClipboardClamp, MetalRivet, MaskingTape } from "./VisualAssets";
import { Eye, Swords, ShieldAlert, Footprints } from "lucide-react";

interface PlayoffWarMapProps {
  selectedSeriesId: string;
  onSelectSeries: (id: string) => void;
}

export default function PlayoffWarMap({ selectedSeriesId, onSelectSeries }: PlayoffWarMapProps) {
  const [hoveredHotspot, setHoveredHotspot] = useState<TacticalHotspot | null>(null);
  const [selectedPlayerFilter, setSelectedPlayerFilter] = useState<string>("ALL");

  // Filter elements
  const playersInvolved = ["ALL", "Patrick Ewing", "Charles Oakley", "Anthony Mason", "John Starks", "Derek Harper"];

  // Filter hotspots based on selected filters
  const filteredHotspots = useMemo(() => {
    return TACTICAL_HOTSPOTS.filter((spot) => {
      const matchSeries = selectedSeriesId === "all-time" || spot.playoffId === selectedSeriesId;
      const matchPlayer = selectedPlayerFilter === "ALL" || spot.player === selectedPlayerFilter;
      return matchSeries && matchPlayer;
    });
  }, [selectedSeriesId, selectedPlayerFilter]);

  // Color mapping per spot type
  const getSpotColor = (type: TacticalHotspot["type"]) => {
    switch (type) {
      case "block":
        return { bg: "bg-red-500", glow: "shadow-red-500/80", stroke: "#ef4444" };
      case "rebound":
        return { bg: "bg-blue-500", glow: "shadow-blue-500/80", stroke: "#3b82f6" };
      case "clutch":
        return { bg: "bg-orange-500", glow: "shadow-orange-500/80", stroke: "#f97316" };
      case "foul":
        return { bg: "bg-amber-600", glow: "shadow-amber-600/80", stroke: "#d97706" };
    }
  };

  return (
    <div id="playoff-war-map" className="flex flex-col poster-panel-dark p-5 rounded-none relative shadow-2xl h-full select-none pt-7">
      <ClipboardClamp />
      <MetalRivet className="absolute top-2.5 left-2.5 opacity-40" />
      <MetalRivet className="absolute top-2.5 right-2.5 opacity-40" />
      
      {/* Tape decoration */}
      <MaskingTape className="-top-3 left-10 w-20 z-30" rotation="-rotate-3" />

      {/* Headings */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-zinc-800 pb-3 mb-4 gap-2">
        <div>
          <span className="font-mono text-[9px] tracking-[0.25em] text-orange-500 font-extrabold uppercase">TACTICAL ANALYSIS // EASTERN BATTLEGROUND</span>
          <h3 className="font-display text-2xl font-black tracking-tight text-white mt-1 uppercase">
            物理防线盘 <span className="text-orange-500 font-mono">COURT MANUAL MAP</span>
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9px]">
          <span className="text-zinc-500 uppercase mr-1">Target Player:</span>
          {playersInvolved.map((p) => (
            <button
              key={p}
              id={`player-filter-${p.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setSelectedPlayerFilter(p)}
              className={`px-2 py-0.5 rounded border transition-all cursor-pointer ${
                selectedPlayerFilter === p
                  ? "bg-orange-950/40 text-orange-400 border-orange-500/50 font-bold"
                  : "bg-zinc-900 text-zinc-400 border-zinc-850 hover:text-zinc-200"
              }`}
            >
              {p === "ALL" ? "全部" : p.split(" ")[1] || p}
            </button>
          ))}
        </div>
      </div>

      {/* Madison Square Garden Court Arena */}
      <div className="relative flex-1 bg-[#040508] rounded border border-zinc-900 p-2 overflow-hidden flex flex-col items-center shadow-[inset_0_4px_25px_rgba(0,0,0,0.98)]">
        
        {/* SVG Half-Court Background */}
        <div className="relative w-full max-w-[460px] aspect-[460/330] select-none scale-100 origin-center transition-all">
          
          {/* Giant Patrick Ewing back silhouette, centered matching poster centerpiece */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.45] mix-blend-screen select-none overflow-hidden rounded bg-[radial-gradient(circle_at_50%_15%,rgba(249,115,22,0.18),transparent_60%)]">
            <img
              src="/src/assets/images/ewing_33_hero_1781146088928.png"
              alt="Ewing 33 centerpiece"
              className="w-[90%] md:w-[78%] h-auto object-contain mx-auto mt-7 halftone-photo opacity-95"
              referrerPolicy="no-referrer"
            />
          </div>

          <svg
            width="100%"
            height="100%"
            viewBox="0 0 460 330"
            className="text-white/20"
            style={{ stroke: "currentColor", strokeWidth: 1.5, fill: "none" }}
          >
            {/* Outline of half court */}
            <rect x="10" y="10" width="440" height="310" strokeWidth="2" stroke="rgba(255, 255, 255, 0.4)" strokeDasharray="300, 3, 100, 2" />
            
            {/* Strategy scribbles / blackboard routes */}
            <g opacity="0.3" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1.2" fill="none">
              {/* Offense / Defense marks */}
              <circle cx="110" cy="170" r="4.5" />
              <circle cx="350" cy="170" r="4.5" />
              <path d="M 115,135 L 125,145 M 125,135 L 115,145" />
              <path d="M 335,135 L 345,145 M 345,135 L 335,145" />
              <path d="M 225,235 L 235,245 M 235,235 L 225,245" />
              
              <path d="M 230,130 Q 185,100 215,70" stroke="rgba(249, 115, 22, 0.65)" strokeWidth="1.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />
            </g>

            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(249, 115, 22, 0.8)" />
              </marker>
            </defs>

            {/* Grid blueprint paper overlay */}
            <g opacity="0.03" stroke="#ffffff" strokeWidth="0.5">
              {Array.from({ length: 22 }).map((_, i) => (
                <line key={`grid-x-${i}`} x1={i * 20 + 20} y1="10" x2={i * 20 + 20} y2="320" />
              ))}
              {Array.from({ length: 16 }).map((_, i) => (
                <line key={`grid-y-${i}`} x1="10" y1={i * 20 + 20} x2="450" y2={i * 20 + 20} />
              ))}
            </g>

            {/* Split lines */}
            <g opacity="0.2" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.75" strokeDasharray="3,3">
              <line x1="230" y1="10" x2="230" y2="320" />
              <line x1="10" y1="140" x2="450" y2="140" />
            </g>

            {/* Backboard & Net */}
            <line x1="190" y1="45" x2="270" y2="45" strokeWidth="2.5" stroke="#ef4444" opacity="0.45" />
            <circle cx="230" cy="57" r="10.5" stroke="#f97316" strokeWidth="2" opacity="0.5" />
            <line x1="230" y1="45" x2="230" y2="57" strokeWidth="1.5" stroke="#f97316" opacity="0.5" />

            <defs>
              <linearGradient id="paint-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(249, 115, 22, 0.42)" />
                <stop offset="60%" stopColor="rgba(239, 68, 68, 0.2)" />
                <stop offset="100%" stopColor="rgba(4, 5, 8, 0.98)" />
              </linearGradient>

              <radialGradient id="msg-spotlight" cx="230" cy="90" r="150" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(249, 115, 22, 0.42)" />
                <stop offset="45%" stopColor="rgba(239, 68, 68, 0.18)" />
                <stop offset="100%" stopColor="rgba(4, 5, 8, 0)" />
              </radialGradient>

              {/* Exact telemetry text ring overlay */}
              <path id="telemetry-ring-war" d="M 160,90 A 70,70 0 1,1 300,90 A 70,70 0 1,1 160,90" />
            </defs>

            {/* Glowing spot overlay */}
            <rect x="10" y="10" width="440" height="310" fill="url(#msg-spotlight)" pointerEvents="none" opacity="0.95" />

            {/* Paint Key highlights */}
            <rect x="160" y="10" width="140" height="145" fill="url(#paint-glow)" stroke="rgba(249, 115, 22, 0.45)" strokeWidth="1.5" />
            <rect x="180" y="10" width="100" height="145" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="3,3" />

            {/* Diagonal contact marks */}
            <g opacity="0.1" stroke="#ffffff" strokeWidth="1">
              <line x1="160" y1="30" x2="175" y2="15" />
              <line x1="160" y1="60" x2="175" y2="45" />
              <line x1="160" y1="90" x2="175" y2="75" />
              <line x1="160" y1="120" x2="175" y2="105" />
              
              <line x1="285" y1="30" x2="300" y2="15" />
              <line x1="285" y1="60" x2="300" y2="45" />
              <line x1="285" y1="90" x2="300" y2="75" />
              <line x1="285" y1="120" x2="300" y2="105" />
            </g>

            {/* Telemetry Ring text rotation - matches the image perfectly */}
            <g style={{ transformOrigin: "230px 90px" }} className="animate-[spin_55s_linear_infinite] select-none pointer-events-none">
              <text fontSize="7px" fontFamily="monospace" fontWeight="900" fill="#f97316" letterSpacing="1px" opacity="0.9">
                <textPath href="#telemetry-ring-war" startOffset="0%">
                  ★ BLOCK ZONE ★ REBOUND AREA ★ CONTACT POINT ★ NO EASY BUCKETS ★ PAINT CONTROL ★ 
                </textPath>
              </text>
            </g>

            {/* Stencil Giant "33" at the basket floor exactly like the image */}
            <g className="font-display font-black text-center select-none pointer-events-none">
              <text x="230" y="108" fill="rgba(249, 115, 22, 0.82)" fontSize="62px" textAnchor="middle" fontWeight="900" style={{ textShadow: "0 0 15px rgba(249, 115, 22, 0.4)", fontFamily: '"Bebas Neue", "Anton", "Oswald", "Impact", sans-serif' }}>
                33
              </text>
              <text x="230" y="126" fill="#f97316" fontSize="8px" fontFamily="monospace" fontWeight="900" letterSpacing="0.25em" textAnchor="middle" opacity="0.9">
                禁区属于 33 号
              </text>
            </g>

            {/* Areas label pointers */}
            <g stroke="none" fill="rgba(255, 255, 255, 0.2)" className="font-mono text-[8s.px] font-bold uppercase select-none">
              <text x="135" y="65" textAnchor="end">盖帽禁飞区 BLOCK ZONE</text>
              <text x="325" y="65" textAnchor="start">血战对抗域 CONTACT POINT</text>
              <text x="230" y="285" textAnchor="middle">罚球弧顶 FREE THROW ARC</text>
            </g>

            {/* Three Point Arc */}
            <path d="M 50,10 L 50,45 A 180,180 0 0,0 410,45 L 410,10" strokeWidth="2" stroke="rgba(255, 255, 255, 0.25)" />
          </svg>

          {/* Saturated clickable Hotspots */}
          {filteredHotspots.map((spot) => {
            const colors = getSpotColor(spot.type);
            const isHovered = hoveredHotspot?.id === spot.id;

            return (
              <div
                key={spot.id}
                id={`hotspot-${spot.id}`}
                className="absolute"
                style={{
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <button
                  onMouseEnter={() => setHoveredHotspot(spot)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={() => {
                    if (spot.playoffId !== "all-time") {
                      onSelectSeries(spot.playoffId);
                    }
                  }}
                  className="relative flex items-center justify-center p-2 focus:outline-none cursor-pointer group"
                >
                  <span className={`absolute inline-flex h-6 w-6 rounded-full opacity-35 ${colors.bg} animate-ping`} />
                  <span className={`absolute inline-flex h-4 w-4 rounded-full opacity-55 ${colors.bg} scale-120 group-hover:scale-150 transition-transform`} />
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${colors.bg} border border-white/60 shadow-lg ${colors.glow}`} />

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-6 bg-black/95 border border-red-500/40 p-2 text-left z-30 flex flex-col w-[170px] pointer-events-none text-left"
                      >
                        <span className="font-mono text-[8px] text-red-500 font-extrabold uppercase">
                          {spot.game}
                        </span>
                        <h4 className="font-sans text-[11px] font-bold text-white mt-0.5">
                          {spot.title}
                        </h4>
                        <span className="font-sans text-[9px] text-zinc-400 mt-0.5">
                          执行: <strong className="text-amber-500 font-medium">{spot.player}</strong>
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            );
          })}
        </div>

        {/* Dynamic Pinned Yellow Index block */}
        <div id="tactical-board" className="w-full mt-3 bg-[#eae2ce] text-zinc-900 border-2 border-[#b0a48b] rounded-none p-3 min-h-[92px] flex flex-col justify-center relative shadow-lg"
             style={{
               backgroundImage: "linear-gradient(to bottom, #eae2ce, #dfd5be)",
             }}>
          <div className="absolute top-1 right-2 opacity-55 font-mono text-[7px] font-bold text-zinc-650">DEPT_RECORD_NO.33</div>
          
          <AnimatePresence mode="wait">
            {hoveredHotspot ? (
              <motion.div
                key={hoveredHotspot.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="flex gap-3 text-left w-full"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 bg-zinc-950 text-white rounded-none border border-zinc-800">
                  {hoveredHotspot.type === "block" && <ShieldAlert className="text-red-500 w-4.5 h-4.5" />}
                  {hoveredHotspot.type === "rebound" && <Footprints className="text-blue-400 w-4.5 h-4.5" />}
                  {hoveredHotspot.type === "clutch" && <Swords className="text-orange-500 w-4.5 h-4.5" />}
                  {hoveredHotspot.type === "foul" && <Eye className="text-amber-500 w-4.5 h-4.5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between select-text">
                    <h4 className="font-display text-sm font-black text-zinc-950 tracking-tight uppercase truncate">{hoveredHotspot.title}</h4>
                    <span className="font-mono text-[8.5px] text-red-700 font-extrabold flex-shrink-0">{hoveredHotspot.game}</span>
                  </div>
                  <p className="font-sans text-[11px] text-zinc-800 font-medium leading-relaxed mt-0.5 select-text">
                    {hoveredHotspot.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1 font-mono text-[8.5px] text-zinc-500 font-extrabold">
                    <span>DEPLOYED: <strong className="text-red-700">{hoveredHotspot.player}</strong></span>
                    <span className="text-zinc-400">|</span>
                    <span>KEY: <strong className="text-zinc-800 uppercase">{hoveredHotspot.type}</strong></span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="text-center text-zinc-600 flex flex-col items-center py-0.5" key="empty">
                <span className="font-mono text-[8.5px] text-zinc-650 tracking-widest font-black uppercase flex items-center gap-1">
                  🌐 MSG COURT SCAN ANALYZER : ONLINE
                </span>
                <p className="font-sans text-[11.5px] mt-1 text-zinc-850">
                  {filteredHotspots.length > 0 ? (
                    `此版位已成功锚定 ${filteredHotspots.length} 处关键战术防御落点。将指标悬浮在红色/蓝色亮点之上。`
                  ) : (
                    "当前筛选条件下此季后赛战局无落位轨迹"
                  )}
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* --- "东部血战地图 PLAYOFF WAR MAP" 6-card row directly below --- */}
      <div className="mt-5 text-left border-t border-zinc-800 pt-4">
        <div className="flex justify-between items-baseline mb-2.5">
          <span className="font-mono text-[9px] text-[#ef4444] font-black uppercase tracking-widest">
            EASTERN CAMPAIGN DECISIONS MAP // STAMPED REGISTER
          </span>
          <button
            onClick={() => onSelectSeries("all-time")}
            className={`font-mono text-[8px] font-black tracking-wider uppercase px-2 py-0.5 transition-all border ${
              selectedSeriesId === "all-time"
                ? "bg-orange-950/20 text-[#f97316] border-orange-500/40"
                : "bg-zinc-950 text-zinc-500 border-zinc-850 hover:text-zinc-300"
            }`}
          >
            显示全部/ALL WAR CLASH
          </button>
        </div>

        {/* 6 Grid Parcels */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 select-none">
          {PLAYOFF_SERIES_DATA.map((series, idx) => {
            const isActive = series.id === selectedSeriesId;
            const isWon = series.status === "WON";
            
            // Subtle rotation for a random scattered stamped look
            const rotations = ["rotate-[-1.5deg]", "rotate-[1deg]", "rotate-[-1deg]", "rotate-[1.5deg]", "rotate-[-0.5deg]", "rotate-[0.5deg]"];
            const tilt = rotations[idx % rotations.length];

            return (
              <div
                key={series.id}
                onClick={() => onSelectSeries(series.id)}
                className={`p-3 border-2 cursor-pointer transition-all flex flex-col justify-between min-h-[110px] transform ${tilt} relative overflow-hidden ${
                  isActive
                    ? "bg-[#ebdfce] text-zinc-950 border-red-800 shadow-xl z-20"
                    : "bg-[#181615] text-zinc-400 border-zinc-850 hover:border-zinc-700"
                }`}
                style={{
                  backgroundImage: isActive 
                    ? "linear-gradient(to bottom, #ebdfce, #ded4bc)" 
                    : "linear-gradient(to bottom, #181615, #0f0e0d)",
                  boxShadow: isActive ? "0 8px 20px rgba(0,0,0,0.5)" : "none"
                }}
              >
                {/* Year index */}
                <div className="flex justify-between items-start border-b border-zinc-800 pb-1.5">
                  <span className={`font-mono text-[10px] font-black ${isActive ? "text-zinc-900" : "text-zinc-500"}`}>
                    {series.id === "1992-bulls" ? "1992" : series.id === "1993-bulls" ? "1993" : "1994"}
                  </span>

                  {/* Stamp Seal Indicator WON / FELL SHORT */}
                  {isWon ? (
                    <span className="font-mono text-[7px] font-black px-1.5 py-0.2 rounded-none bg-emerald-950/20 text-emerald-500 border border-emerald-900/40 uppercase">
                      WON
                    </span>
                  ) : (
                    <span className="font-mono text-[7px] font-black px-1 py-0.2 rounded-none bg-red-955/20 text-red-500 border border-red-900/40 uppercase">
                      LOST
                    </span>
                  )}
                </div>

                {/* Team Opponent code */}
                <div className="my-2.5">
                  <span className={`font-display text-[10px] font-black tracking-widest block leading-none uppercase ${isActive ? "text-zinc-950" : "text-zinc-300"}`}>
                    VS {series.opponent.split(" ")[0].toUpperCase()}
                  </span>
                  <span className="font-sans text-[8.5px] text-zinc-500 block leading-tight mt-1">
                    {series.roundName === "首轮大战" ? "东部首轮" : series.roundName}
                  </span>
                </div>

                {/* Stamp style score at foot */}
                <div className="flex items-baseline justify-between border-t border-dashed border-zinc-800/80 pt-1.5">
                  <span className="font-mono text-[6.5px] text-zinc-500 uppercase font-extrabold">SCORE</span>
                  <span className={`font-display text-sm font-black ${isActive ? "text-red-800 font-black" : "text-zinc-400"}`}>
                    {series.seriesScore}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
