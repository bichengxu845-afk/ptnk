import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ENFORCERS_DATA } from "../data";
import { Player } from "../types";
import { ShieldCheck, Flame, Compass, Award, ShieldAlert, Swords, Brain, Clipboard, AlertTriangle } from "lucide-react";
import { RustyPushPin, MaskingTape, RetroPaperclip } from "./VisualAssets";

export default function EnforcersList() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // Return gangster-themed basketball role labels as requested
  const getGangsterRoleTag = (id: string): string => {
    switch (id) {
      case "ewing":
        return "Paint / Block / Leader";
      case "oakley":
        return "Rebound / Contact / Screen";
      case "mason":
        return "Power / Defense / Toughness";
      case "starks":
        return "Fire / Pressure / Clutch";
      case "harper":
        return "Lock / IQ / Veteran";
      default:
        return "Tactical / Impact / Shield";
    }
  };

  // Gangster family rank equivalents (all basketball-related)
  const getGangsterFamilyRank = (id: string): string => {
    switch (id) {
      case "ewing":
        return "THE DON (纽约禁区教父)";
      case "oakley":
        return "CHIEF HITMAN (终极打手法官)";
      case "mason":
        return "THE BRAWLER (花岗岩组织野兽)";
      case "starks":
        return "WILD TRIGGER (后场激情疯狗)";
      case "harper":
        return "CONSIGLIERE (老辣防线军师)";
      default:
        return "ENFORCER CAPO (防守前线中坚)";
    }
  };

  // Icon per teammate identity
  const getPlayerIcon = (id: string) => {
    switch (id) {
      case "ewing":
        return <Award className="text-red-700 w-4 h-4" />;
      case "oakley":
        return <ShieldCheck className="text-red-700 w-4 h-4" />;
      case "mason":
        return <Swords className="text-red-700 w-4 h-4" />;
      case "starks":
        return <Flame className="text-red-700 w-4 h-4" />;
      default:
        return <Brain className="text-red-700 w-4 h-4" />;
    }
  };

  // Photo / Custom high-contrast Mugshot design
  const renderMugshot = (player: Player, size: "sm" | "lg") => {
    return (
      <div 
        id={`mugshot-${player.id}-${size}`}
        className={`relative bg-neutral-900 border border-neutral-700 flex flex-col justify-between items-center overflow-hidden flex-shrink-0 select-none shadow-md ${
          size === "sm" ? "w-14 h-18" : "w-28 h-36 border-2 border-neutral-600"
        }`}
        style={{
          boxShadow: size === "sm" ? "1px 1px 3px rgba(0,0,0,0.4)" : "3px 3px 8px rgba(0,0,0,0.6)",
        }}
      >
        {/* Subtle gridline background to simulate an arrest scale board */}
        <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-col justify-between p-0.5">
          <div className="border-b border-white/40 w-full h-1/4" />
          <div className="border-b border-white/40 w-full h-1/4" />
          <div className="border-b border-white/40 w-full h-1/4" />
          <div className="w-full h-1/4" />
        </div>

        {/* Vintage portrait / silhouette avatar with stencil watermark */}
        {player.avatar ? (
          <img
            src={player.avatar}
            alt={player.name}
            className="w-full h-full object-cover halftone-photo relative z-10 duration-300 hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="text-neutral-400 filter grayscale contrast-125 brightness-90 relative z-10 w-full mt-2 h-auto"
            fill="currentColor"
          >
            {/* Gritty stylized suspect outline */}
            <path d="M 50,18 C 36,18 30,28 30,42 C 30,55 36,62 50,62 C 64,62 70,55 70,42 C 70,28 64,18 50,18 Z M 50,66 C 24,66 10,75 10,88 L 90,88 C 90,75 76,66 50,66 Z" />
          </svg>
        )}

        {/* Forensic ID Stamp Overlay under rim */}
        <div className="absolute top-1 left-1.5 opacity-20 text-red-500 font-mono text-[6px] font-black z-15">
          NY_CASE_BND_33
        </div>

        {/* Bottom index marker card - purely basketball context */}
        <div className="w-full bg-neutral-800 text-neutral-300 font-mono text-[7px] text-center py-0.5 border-t border-neutral-700 relative z-20">
          SUSPECT #{player.number}
        </div>
      </div>
    );
  };

  return (
    <div id="enforcers-roster-board" className="flex flex-col poster-panel-dark p-5 rounded-none relative shadow-2xl h-full overflow-hidden">
      {/* Tiny push pin to simulate corkboard mount */}
      <RustyPushPin className="top-1 left-1/2 transform -translate-x-1/2" />

      {/* Roster Header */}
      <div className="w-full text-left mb-4 border-b border-zinc-800 pb-3 mt-1 relative">
        <span className="font-mono text-[10px] tracking-[0.25em] text-red-500 font-extrabold uppercase">
          CLASSIFIED // MSG INCIDENT UNDERWORLD FILE
        </span>
        <h3 className="font-display text-2xl font-black tracking-tight text-white mt-1 uppercase flex items-center justify-between">
          <span>铁血打手档案 <span className="text-red-500 font-mono">DOSS REGISTER</span></span>
          <span className="font-mono text-[11px] text-zinc-500 font-normal">DEPT_33_RECORD</span>
        </h3>
      </div>

      <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
        该模块刻画尤因身边的铁骨恶棍。视觉基于
        <span className="text-red-400 font-semibold"> 经典帮派电影档案卡片</span> 风格，数据代表其内网硬度标识。点击卡片调阅详单。
      </p>

      {/* Stack of aging Gangster Archive Character Cards */}
      <div className="grid grid-cols-1 gap-4 flex-1">
        {ENFORCERS_DATA.map((player, idx) => {
          // Odd players slightly tilted to mimic scattered vintage files inside drawer
          const tiltDeg = idx % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]";
          const roleTag = getGangsterRoleTag(player.id);
          const mafiaRank = getGangsterFamilyRank(player.id);

          return (
            <motion.div
              key={player.id}
              id={`player-card-${player.id}`}
              whileHover={{ scale: 1.015, rotate: "0deg" }}
              onClick={() => setSelectedPlayer(player)}
              className={`flex flex-col p-3.5 bg-[#eae2ce] text-zinc-900 border-2 border-[#b0a48b] rounded-none cursor-pointer hover:bg-[#ebdcc4] transition-all relative shadow-xl transform ${tiltDeg}`}
              style={{
                backgroundImage: "linear-gradient(135deg, #eae2ce 0%, #dfd5be 100%)",
                boxShadow: "4px 4px 10px rgba(0,0,0,0.65)"
              }}
            >
              {/* Retro Paperclip affixed on photo */}
              <RetroPaperclip className="top-1 right-3 opacity-80" />

              {/* Manila Folder Tab effect */}
              <div className="absolute -top-[14px] left-3 bg-[#dfd5be] px-2.5 py-0.5 border-t-2 border-x-2 border-[#b0a48b] font-mono text-[7px] text-zinc-655 font-bold uppercase tracking-wider rounded-t-sm">
                NY_DEPT_SYS_#0{player.number}
              </div>

              {/* Main character layout */}
              <div className="flex gap-3.5 items-start">
                {/* Photo Mugshot */}
                {renderMugshot(player, "sm")}

                {/* Dossier Information */}
                <div className="flex-1 text-left min-w-0">
                  <div className="flex justify-between items-start gap-1">
                    <div>
                      {/* Name in prominent stamp-like typewriter label */}
                      <span className="font-mono text-[9px] text-zinc-600 font-bold block uppercase tracking-tight leading-none mb-0.5">
                        SURNAME / 代号:
                      </span>
                      <h4 className="font-display text-base font-black text-zinc-950 tracking-tight uppercase leading-none">
                        {player.name}
                      </h4>
                    </div>

                    {/* JERSEY NUMBER REPRESENTS THE HARDNESS DATA LABEL - PROMINENTLY AT RIGHT */}
                    <div className="bg-[#bdad95] px-2 py-1 rounded-sm border border-[#a29279] text-center min-w-[62px]">
                      <span className="font-mono text-[7px] text-zinc-700 block leading-none uppercase font-extrabold">HARDNESS ID</span>
                      <div className="font-mono font-black text-sm text-[red] leading-none mt-1">
                        [{player.number}]
                      </div>
                    </div>
                  </div>

                  {/* Character Tags exactly as user requested */}
                  <div className="mt-2 border-t border-[#bdad94]/40 pt-1.5 flex flex-col gap-0.5">
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[8px] text-zinc-500 font-extrabold uppercase">TAG:</span>
                      <span className="font-mono text-[10px] text-red-800 font-black tracking-widest uppercase bg-red-950/5 px-1.5 py-0.2 border border-red-900/10 rounded-sm">
                        {roleTag}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="font-mono text-[8px] text-zinc-500 font-extrabold uppercase">RANK:</span>
                      <span className="font-mono text-[9px] text-zinc-800 font-bold tracking-wide">
                        {mafiaRank}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Micro-Biometrics bottom index in courier look */}
              <div className="mt-2.5 border-t-2 border-dashed border-[#bdad94] pt-1.5 flex justify-between items-center">
                <span className="font-mono text-[8px] text-zinc-600 font-semibold tracking-wider">
                  STAT CAP: {player.stats.ppg} PTS // {player.stats.rpg} REB // {player.stats.mpg} MIN
                </span>
                <div className="bg-zinc-900/10 p-0.5 border border-zinc-900/15">
                  {getPlayerIcon(player.id)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Physical SUSPECT Manila Folder File Cabinet Drawer Popup */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            id="dossier-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlayer(null)}
            className="absolute inset-0 bg-[#000000e0] z-40 rounded flex flex-col justify-end p-5 backdrop-blur-[2px]"
          >
            <motion.div
              id="dossier-card-container"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#ebdfce] text-zinc-900 border-4 border-[#c5b59f] rounded-none p-5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] flex flex-col gap-4.5 text-left relative overflow-hidden"
              style={{
                backgroundImage: "radial-gradient(circle at 10% 20%, rgba(139, 92, 26, 0.08), transparent 80%)"
              }}
            >
              {/* Paper strip at the top indicating folder binding */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-800 via-stone-800 to-red-800 opacity-90" />

              {/* Watermark in background */}
              <div className="absolute bottom-2 right-4 opacity-[0.03] font-mono text-[120px] font-black pointer-events-none select-none">
                #{selectedPlayer.number}
              </div>

              {/* Tape deco */}
              <MaskingTape className="-top-3 left-1/3 w-24 z-30" rotation="-rotate-6" />

              {/* Dossier Header */}
              <div className="flex justify-between items-start gap-3 mt-1 border-b-2 border-zinc-900/15 pb-3">
                <div className="flex gap-4 items-center">
                  {renderMugshot(selectedPlayer, "lg")}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-red-800 font-extrabold tracking-widest uppercase bg-red-100 border border-red-200 px-1.5 py-0.5 rounded-none">
                        ⚠️ HARDNESS: #{selectedPlayer.number}
                      </span>
                      <div className="bg-[#a39474]/20 border border-[#a39474]/40 text-zinc-700 font-mono text-[8px] px-1 font-bold">
                        FILE NO. MSG33
                      </div>
                    </div>
                    <h4 className="font-display text-2xl font-black text-zinc-900 mt-1 uppercase leading-none">
                      {selectedPlayer.name}
                    </h4>
                    <span className="font-mono text-[10px] text-zinc-650 block tracking-widest uppercase mt-1">
                      {selectedPlayer.englishName} // ROLE: {getGangsterRoleTag(selectedPlayer.id)}
                    </span>
                  </div>
                </div>
                <button
                  id="close-dossier-button"
                  onClick={() => setSelectedPlayer(null)}
                  className="px-2.5 py-1 bg-zinc-900 text-white hover:bg-black font-mono text-[9px] uppercase font-bold tracking-wider cursor-pointer border border-zinc-700"
                >
                  [ X CLOSE ]
                </button>
              </div>

              {/* Typewrited forensic logs */}
              <div className="bg-[#f5ebd7] border border-zinc-400 p-4 shadow-inner relative">
                {/* Coffee Ring stamp */}
                <div className="absolute bottom-2 right-2 w-16 h-16 rounded-full border-2 border-stone-850/5 pointer-events-none" />

                <div className="flex items-center gap-1.5">
                  <Clipboard className="text-red-800/80 w-3.5 h-3.5" />
                  <span className="font-mono text-xs italic text-red-850 font-black block">
                    TACTICAL THREAT REPORT // HARDNESS INTEL REPORT:
                  </span>
                </div>
                <p className="font-mono text-xs text-zinc-800 leading-relaxed mt-2 pt-2 border-t border-zinc-300">
                  {selectedPlayer.gritDescription}
                </p>
                <div className="mt-2.5 text-[10px] font-mono text-zinc-600 bg-black/5 p-1 border-l-2 border-zinc-500 pl-2">
                  <strong className="text-red-800 text-[10px]">防守威慑特征:</strong> {selectedPlayer.defenseFocus}
                </div>
              </div>

              {/* Physical measurements stats */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#f0e4cf] p-2.5 border border-zinc-300 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider block font-bold">
                    BIOMETRIC DATA / 体魄规格:
                  </span>
                  <span className="font-mono font-extrabold text-zinc-900 mt-1 block uppercase">
                    场均搏杀 {selectedPlayer.stats.mpg} 分钟 // PHYSICAL LOAD HIGH
                  </span>
                </div>
                <div className="bg-[#f0e4cf] p-2.5 border border-zinc-300 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider block font-bold">
                    COMBAT DISPOSITION / 战术权重:
                  </span>
                  <span className="font-mono font-extrabold text-zinc-900 mt-1 block uppercase">
                    RANKING: {getGangsterFamilyRank(selectedPlayer.id)}
                  </span>
                </div>
              </div>

              {/* Hardness Bar visual metrics */}
              <div className="flex flex-col gap-2.5 bg-neutral-900/5 p-3.5 border border-zinc-350">
                <span className="font-mono text-[8px] text-zinc-600 tracking-widest uppercase font-black flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-red-800" /> CORRECTIONAL GRAPHIC: HARSH PHYSICAL ENGAGEMENT METRICS
                </span>

                {/* Score power */}
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-700">
                    <span>ATTACK OUTPUT CAPACITY 得分极限 (PPG)</span>
                    <span className="font-black text-zinc-950">{selectedPlayer.stats.ppg} PTS</span>
                  </div>
                  <div className="w-full bg-zinc-300 h-1.5 rounded-none overflow-hidden mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(selectedPlayer.stats.ppg / 30) * 100}%` }}
                      className="bg-red-800 h-full"
                    />
                  </div>
                </div>

                {/* Rebounds power */}
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-700">
                    <span>REBOUND SEIZURE RATIO 篮板搏杀 (RPG)</span>
                    <span className="font-black text-zinc-950">{selectedPlayer.stats.rpg} REB</span>
                  </div>
                  <div className="w-full bg-zinc-300 h-1.5 rounded-none overflow-hidden mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(selectedPlayer.stats.rpg / 15) * 100}%` }}
                      className="bg-[#a39474] h-full"
                    />
                  </div>
                </div>

                {/* Steals / Blocks */}
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-700">
                    {selectedPlayer.stats.bpg !== undefined ? (
                      <>
                        <span>RIM SHUTDOWN RATING 禁飞封盖 (BPG)</span>
                        <span className="font-black text-zinc-950">{selectedPlayer.stats.bpg} BLK</span>
                      </>
                    ) : (
                      <>
                        <span>OFFENSIVE LOGISTICAL IQ 战术策动 (APG)</span>
                        <span className="font-black text-zinc-950">{selectedPlayer.stats.apg} AST</span>
                      </>
                    )}
                  </div>
                  <div className="w-full bg-zinc-300 h-1.5 rounded-none overflow-hidden mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${
                          selectedPlayer.stats.bpg !== undefined
                            ? (selectedPlayer.stats.bpg / 4) * 100
                            : ((selectedPlayer.stats.apg || 0) / 8) * 100
                        }%`
                      }}
                      className="bg-zinc-800 h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
