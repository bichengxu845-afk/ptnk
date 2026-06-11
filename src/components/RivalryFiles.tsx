import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RIVALRY_FILES } from "../data";
import { RivalryFile } from "../types";
import { BarbedWire, ConfidentialStamp, MetalRivet, RetroPaperclip, MaskingTape, RustyPushPin } from "./VisualAssets";
import { ShieldAlert, Zap, AlertTriangle, FileText, Swords, Eye, Fingerprint, Activity } from "lucide-react";

export default function RivalryFiles() {
  const [activeFolder, setActiveFolder] = useState<RivalryFile | null>(null);
  const [hoveredRivalId, setHoveredRivalId] = useState<string | null>(null);

  // Return designated iconic rival players and jersey numbers representing "hardness labels"
  const getRivalGritLeader = (id: string) => {
    switch (id) {
      case "bulls":
        return { name: "MICHAEL JORDAN", number: 23, role: "THE AIR COREGON", hardness: "10/10 MAX" };
      case "pacers":
        return { name: "REGGIE MILLER", number: 31, role: "THE GARDEN THROTTLER", hardness: "9/10 SEVERE" };
      case "rockets":
        return { name: "HAKEEM OLAJUWON", number: 34, role: "THE DREAM ANCHOR", hardness: "10/10 ULTIMATE" };
      case "heat":
        return { name: "ALONZO MOURNING", number: 33, role: "THE MIAMI HITMAN", hardness: "9.5/10 EXTREME" };
      default:
        return { name: "UNKNOWN SUSPECT", number: 99, role: "OUTSIDE INTRUDER", hardness: "8/10 GENERAL" };
    }
  };

  // Gangster dossier tag lines exactly as requested, styled as dirty typewriter outputs
  const getSubTitleText = (id: string): string => {
    switch (id) {
      case "bulls":
        return "THE WALL BEFORE THE FINALS";
      case "pacers":
        return "THE EASTERN STREET FIGHT";
      case "rockets":
        return "THE FINAL TEST";
      case "heat":
        return "THE PHYSICAL BLOOD FEUD";
      default:
        return "CLASSIFIED CONFRONTATION";
    }
  };

  // Helper to draw an intensity indicator with bullet stamps
  const renderIntensityGritMeter = (score: number) => {
    return (
      <div className="flex gap-1 items-center mt-1.5" id="intensity-grit-meter">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`h-4.5 w-1.5 rounded-none ${
              i < score
                ? "bg-red-800 border-l border-red-500 shadow-sm"
                : "bg-stone-300"
            }`}
          />
        ))}
        <span className="font-mono text-[9px] font-black text-red-900 ml-2 uppercase">LEVEL {score}.0 GRIT</span>
      </div>
    );
  };

  const rivalData = getRivalGritLeader(activeFolder?.id || "");

  // Coordinates for the interactive surveillance lines overlay representing connections to #33 Ewing Era
  // Core Ewing Node (Center): (180, 70)
  // CASE 01 (Bulls): Top-Left (60, 25)
  // CASE 02 (Pacers): Bottom-Left (60, 115)
  // CASE 03 (Rockets): Top-Right (300, 25)
  // CASE 04 (Heat): Bottom-Right (300, 115)
  const getLineDetails = (id: string) => {
    switch (id) {
      case "bulls":
        return { x: 60, y: 25, color: "rgba(224, 36, 36, 0.85)", label: "AIR COIL DEFENSE BLOCK", isRed: true };
      case "pacers":
        return { x: 60, y: 115, color: "rgba(37, 99, 235, 0.85)", label: "ELBOW CLASH ZONE", isRed: false };
      case "rockets":
        return { x: 300, y: 25, color: "rgba(224, 36, 36, 0.85)", label: "1994 FINALS CENTRIFUGAL LOCKDOWN", isRed: true };
      case "heat":
        return { x: 300, y: 115, color: "rgba(37, 99, 235, 0.85)", label: "萊利复仇之火 BRAWL FEUD", isRed: false };
      default:
        return { x: 180, y: 70, color: "gray", label: "", isRed: true };
    }
  };

  return (
    <div id="rivalry-files-dossier" className="flex flex-col poster-panel-dark p-5 rounded-none relative shadow-2xl h-full select-none overflow-hidden">
      <MetalRivet className="absolute top-2.5 left-2.5 opacity-40" />
      <MetalRivet className="absolute top-2.5 right-2.5 opacity-40" />

      {/* Dossier Header */}
      <div className="w-full text-left mb-3.5 border-b border-zinc-800 pb-3 mt-1">
        <div className="flex justify-between items-baseline">
          <span className="font-mono text-[9px] tracking-[0.25em] text-red-500 font-extrabold uppercase">
            MESSENGER SECTOR // RIVALRY NETWORK SURVEILLANCE
          </span>
          <span className="font-mono text-[8px] text-zinc-500 font-bold uppercase">CABINET: CASE_NYK_33</span>
        </div>
        <h3 className="font-display text-2xl font-black tracking-tight text-white mt-1 uppercase">
          宿敌机密档案 <span className="text-red-500 font-mono">STREET GRUDGES</span>
        </h3>
      </div>

      <p className="font-sans text-[11px] text-zinc-400 leading-relaxed mb-4">
        该战术板块采用黑帮电影中
        <span className="text-red-400 font-semibold"> “家族旧档” </span>印记格局。中央联络网络通过
        <span className="text-red-500 font-bold">红蓝战术线</span> 指向禁飞区核心
        <span className="text-orange-505 font-bold font-mono"> 33号尤因时代</span>，解密肉搏纪实。
      </p>

      {/* INTERACTIVE CONNECTIONS BLUEPRINT - FORBIDDEN AREA 33 AT CENTER */}
      <div id="surveillance-blueprint" className="w-full bg-[#121418] border border-zinc-850 p-2 rounded mb-4.5 relative overflow-hidden h-[155px] shadow-inner select-none flex flex-col justify-between">
        
        {/* Subtle grid mesh background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:10px_10px]" />

        {/* Central Ewing #33 Core Target */}
        <div 
          className="absolute left-[180px] top-[70px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-35 bg-red-950/90 border-2 border-red-500 rounded-full w-14 h-14 shadow-[0_0_15px_rgba(239,68,68,0.4)] pointer-events-none select-none"
          id="ewing-core-target"
        >
          <Fingerprint className="w-5 h-5 text-red-500 animate-pulse" />
          <span className="font-mono text-[9px] font-black text-white leading-none mt-1">#33 CORE</span>
          <span className="font-mono text-[6px] text-red-400 font-extrabold tracking-wide uppercase mt-0.5">EWING_ERA</span>
        </div>

        {/* Outer Case Nodes */}
        {RIVALRY_FILES.map((rival) => {
          const l = getLineDetails(rival.id);
          const leader = getRivalGritLeader(rival.id);
          const isHovered = hoveredRivalId === rival.id;
          const isActive = activeFolder?.id === rival.id;

          return (
            <button
              key={rival.id}
              onClick={() => setActiveFolder(rival)}
              onMouseEnter={() => setHoveredRivalId(rival.id)}
              onMouseLeave={() => setHoveredRivalId(null)}
              className="absolute z-40 p-1.5 bg-zinc-950 border rounded cursor-pointer transition-all hover:bg-zinc-900 select-none flex flex-col items-center justify-center"
              style={{
                left: `${l.x}px`,
                top: `${l.y}px`,
                transform: "translate(-50%, -50%)",
                borderColor: isActive || isHovered ? l.color : "#27272a",
                boxShadow: isActive || isHovered ? `0 0 10px ${l.color}` : "none",
                width: "90px",
                height: "44px"
              }}
            >
              <div className="font-mono text-[7px] text-zinc-500 font-bold uppercase leading-none">{rival.caseNum}</div>
              <div className="font-display text-[9px] text-white font-black uppercase leading-tight mt-1 truncate max-w-full text-center">
                {rival.teamName}
              </div>
              <div className="font-mono text-[7px] text-red-400 font-extrabold leading-none mt-0.5 select-none">
                MEMBER #{leader.number}
              </div>
            </button>
          );
        })}

        {/* SVG Live Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible" id="surveillance-svg-canvas">
          {RIVALRY_FILES.map((rival) => {
            const l = getLineDetails(rival.id);
            const isHovered = hoveredRivalId === rival.id || activeFolder?.id === rival.id;
            
            // Generate glowing Bezier curves to center (180, 70)
            const controlX = (l.x + 180) / 2;
            const controlY = l.y < 70 ? l.y - 15 : l.y + 15;
            const strokeColor = l.isRed ? "rgba(239, 68, 68, 0.4)" : "rgba(37, 99, 235, 0.4)";
            const hoverStrokeColor = l.isRed ? "rgba(239, 68, 68, 1)" : "rgba(37, 99, 235, 1)";
            const strokeWidth = isHovered ? 2.5 : 1.2;

            return (
              <g key={rival.id}>
                {/* Ambient Shadow line */}
                <path
                  d={`M ${l.x} ${l.y} Q ${controlX} ${controlY} 180 70`}
                  fill="none"
                  stroke="rgba(0,0,0,0.6)"
                  strokeWidth={isHovered ? 5 : 2}
                />
                {/* Main colored thread */}
                <path
                  d={`M ${l.x} ${l.y} Q ${controlX} ${controlY} 180 70`}
                  fill="none"
                  stroke={isHovered ? hoverStrokeColor : strokeColor}
                  strokeWidth={strokeWidth}
                  strokeDasharray={isHovered ? "4,1" : "3,3"}
                  className="transition-all duration-305"
                />
                
                {/* Direction indicators */}
                {isHovered && (
                  <circle r="3" fill={hoverStrokeColor} className="animate-ping">
                    <animateMotion
                      path={`M ${l.x} ${l.y} Q ${controlX} ${controlY} 180 70`}
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Small legend marker watermark */}
        <div className="absolute bottom-1 right-2 opacity-50 font-mono text-[7px] text-zinc-500 tracking-wider">
          MARKERS: RED (AIR BORNE BLOCK) // BLUE (STREET WRANGLE)
        </div>
      </div>

      {/* Grid of Mafia-style Dossier Rival Cards */}
      <div className="grid grid-cols-2 gap-3.5 flex-1">
        {RIVALRY_FILES.map((rival, idx) => {
          const leader = getRivalGritLeader(rival.id);
          const subTitle = getSubTitleText(rival.id);
          const isSelected = activeFolder?.id === rival.id;
          const isLinedHovered = hoveredRivalId === rival.id;

          // Slightly slanted gangster archive style files
          const cardTilt = idx % 2 === 0 ? "rotate-[0.5deg]" : "rotate-[-0.5deg]";

          return (
            <motion.div
              key={rival.id}
              id={`rivalry-folder-${rival.id}`}
              whileHover={{ scale: 1.015, y: -1 }}
              onMouseEnter={() => setHoveredRivalId(rival.id)}
              onMouseLeave={() => setHoveredRivalId(null)}
              onClick={() => setActiveFolder(rival)}
              className={`flex flex-col p-4 bg-[#eae2ce] text-zinc-900 border-2 rounded-none cursor-pointer hover:bg-[#fadfa3] transition-all relative shadow-xl transform ${cardTilt} ${
                isSelected ? "border-red-800 bg-[#fceec9] z-20" : "border-[#b0a48b]"
              }`}
              style={{
                backgroundImage: isSelected 
                  ? "linear-gradient(to bottom, #fadfa3 0%, #ecd394 100%)" 
                  : "linear-gradient(to bottom, #eae2ce 0%, #ded4bc 100%)",
                boxShadow: isSelected ? "0 10px 25px rgba(0,0,0,0.5)" : "4px 4px 10px rgba(0,0,0,0.4)"
              }}
            >
              {isSelected && <RetroPaperclip className="top-1 right-2 opacity-100" />}

              {/* Tag header */}
              <div className="flex justify-between items-baseline border-b border-[#bdad95] pb-1.5 mb-2 relative">
                <span className="font-mono text-[8s.px] text-zinc-650 font-extrabold uppercase">
                  {rival.caseNum}
                </span>
                
                {/* JERESY NUMBER REPRESENTS THE HARDNESS DATA LABEL - EXPLICIT CRITERIA */}
                <div 
                  className="font-mono text-[10px] font-black text-red-900 bg-black/5 px-1.5 py-0.2 border border-dashed border-[#a39474] flex items-center gap-1.5 select-none"
                  title="Jersey index represent physical hardness level"
                >
                  <span className="text-[7px] text-zinc-650 font-bold">RIVAL JERSEY</span>
                  <strong className="text-red-700 font-black text-[10.5px]">#{leader.number}</strong>
                </div>
              </div>

              {/* Gangster archive content cards representation */}
              <div className="text-left mt-1 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-sm font-black text-zinc-950 tracking-tight leading-none uppercase">
                    {rival.teamName}
                  </h4>
                  {/* Subtitle exact requested title layout */}
                  <span className="font-mono text-[8.5px] text-red-800 font-extrabold tracking-wider block mt-1 leading-normal uppercase">
                    {subTitle}
                  </span>
                  
                  <blockquote className="font-serif italic text-[10.5px] leading-relaxed text-zinc-800 mt-2 bg-stone-900/5 p-2 border-l border-zinc-500">
                    “{rival.tagline}”
                  </blockquote>
                </div>

                {/* Hardness Data label summary details */}
                <div className="mt-3 border-t border-[#bdad95]/60 pt-2 flex items-center justify-between font-mono text-[7.5px] text-zinc-600 font-extrabold uppercase">
                  <span>GRIT CODE: {leader.hardness}</span>
                  <span className="bg-zinc-950 text-white px-2 py-0.5 rounded-sm flex items-center gap-1">
                    <Swords className="w-2.5 h-2.5 text-orange-500" /> STRIKE
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Folder modal view with gangster file folder clipping */}
      <AnimatePresence>
        {activeFolder && (
          <motion.div
            id="rivalry-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveFolder(null)}
            className="absolute inset-0 bg-black/95 z-50 rounded flex flex-col justify-end p-5 backdrop-blur-[2px]"
          >
            <motion.div
              id="rivalry-dossier-clip"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#ebdfce] text-zinc-900 border-4 border-[#c5b59f] rounded-none p-5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] flex flex-col gap-4 text-left relative overflow-hidden max-h-[95%] overflow-y-auto"
              style={{
                backgroundImage: "radial-gradient(circle at 90% 10%, rgba(139, 92, 26, 0.08), transparent 75%)"
              }}
            >
              {/* Retro masking tape */}
              <MaskingTape className="-top-3 left-1/4 w-28" rotation="-rotate-3" />

              {/* Graphic watermark of rival jersey hardness label */}
              <div className="absolute right-4 bottom-2 opacity-[0.03] font-mono text-[140px] font-black pointer-events-none select-none">
                #{getRivalGritLeader(activeFolder.id).number}
              </div>

              {/* Header inside folder */}
              <div className="flex justify-between items-start border-b-2 border-zinc-900/15 pb-3 mt-1.5 gap-3">
                <div className="flex gap-3 items-center">
                  <div className="bg-zinc-950 p-2 border border-zinc-700">
                    <ShieldAlert className="text-red-500 w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-[#2563eb] bg-blue-100 border border-blue-200 px-1.5 py-0.5 rounded-none font-extrabold uppercase">
                        SYNDICATE GRIT CASE: {activeFolder.caseNum}
                      </span>
                      <div className="font-mono text-[8px] font-bold bg-[#fadfa3] px-1 text-zinc-800">
                        OPPONENT LOCKDOWN
                      </div>
                    </div>
                    <h4 className="font-display text-2xl font-black text-zinc-950 tracking-tight mt-0.5 uppercase">
                      {activeFolder.teamName}
                    </h4>
                    <span className="font-mono text-[9.5px] text-zinc-600 block tracking-widest uppercase">
                      TARGET JERSEY CODE: #{getRivalGritLeader(activeFolder.id).number} // LEAD SUSPECT: {getRivalGritLeader(activeFolder.id).name}
                    </span>
                  </div>
                </div>
                <button
                  id="close-rivalry-button"
                  onClick={() => setActiveFolder(null)}
                  className="px-2.5 py-1 bg-zinc-900 text-white hover:bg-black font-mono text-[9px] uppercase font-bold tracking-wider cursor-pointer border border-zinc-700"
                >
                  [ X CLOSE FILE ]
                </button>
              </div>

              {/* Main archive layout */}
              <div className="bg-[#f5ebd7] border border-zinc-400 p-4 shadow-inner">
                <div className="flex items-center gap-1.5">
                  <Activity className="text-red-800 w-4 h-4" />
                  <span className="font-mono text-xs italic text-red-855 font-black block uppercase">
                    ANTI-EWING ERA TACTICAL PROFILE SHEET:
                  </span>
                </div>
                <h5 className="font-mono text-[10.5px] font-bold text-zinc-800 mt-2 bg-stone-200 p-1.5">
                  THEMATIC INDEX: {getSubTitleText(activeFolder.id)}
                </h5>
                <p className="font-sans text-xs text-zinc-805 leading-relaxed mt-2.5">
                  {activeFolder.description}
                </p>
              </div>

              {/* Tactical Conflict Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {/* Physical Intensity Index */}
                <div className="bg-[#f0e4cf] p-3 border border-zinc-300">
                  <span className="font-mono text-[9px] text-zinc-620 uppercase tracking-wider font-extrabold block flex items-center gap-1">
                    <AlertTriangle className="text-red-800 w-3.5 h-3.5" /> SURVEILLANCE STRENGH PROFILE / 物理硬度等级
                  </span>
                  {renderIntensityGritMeter(activeFolder.intensity)}
                  <span className="font-mono text-[8px] text-zinc-550 block mt-1.5">MEASURED ON TENSION SECTOR FORBIDDEN 33 CORES</span>
                </div>

                {/* Key Combat Matching */}
                <div className="bg-[#f0e4cf] p-3 border border-zinc-300">
                  <span className="font-mono text-[9px] text-zinc-620 uppercase tracking-wider font-extrabold block flex items-center gap-1">
                    <Zap className="text-blue-700 w-3.5 h-3.5" /> SHIELD CONFRONTATION MATCH / 宿敌血战绞肉口
                  </span>
                  <p className="font-mono font-black text-red-900 mt-2 text-xs uppercase">{activeFolder.gritMatchup}</p>
                  <p className="font-sans text-[10px] text-zinc-650 mt-1">{getRivalGritLeader(activeFolder.id).role}</p>
                </div>

                {/* Epic Incident Description */}
                <div className="bg-[#ebdfcc] border border-zinc-350 p-3.5 rounded-none md:col-span-2">
                  <span className="font-mono text-[9px] text-red-800 uppercase tracking-widest font-black block">
                    INCIDENT RECORD LOG / 纽约禁区大案血泪纪实
                  </span>
                  <p className="font-sans text-xs text-zinc-800 mt-2 leading-relaxed bg-[#f6ebd7] p-2.5 border border-zinc-300 select-text">
                    {activeFolder.historicalIncident}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
