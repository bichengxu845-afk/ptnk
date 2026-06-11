import { useState } from "react";
import GritRadarChart from "./components/GritRadarChart";
import EwingCoreCard from "./components/EwingCoreCard";
import PlayoffWarMap from "./components/PlayoffWarMap";
import BlueWall from "./components/BlueWall";
import EnforcersList from "./components/EnforcersList";
import RivalryFiles from "./components/RivalryFiles";
import EwingSignatureQuote from "./components/EwingSignatureQuote";
import PlayoffTimeline from "./components/PlayoffTimeline";
import { 
  OldTvNoise, 
  RustyPushPin, 
  MaskingTape, 
  ParquetWoodFloorBackdrop, 
  MetalRivet 
} from "./components/VisualAssets";
import { Swords, Volume2, VolumeX } from "lucide-react";

export default function App() {
  const [selectedSeriesId, setSelectedSeriesId] = useState<string>("all-time");
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);

  // Modular Web Audio API Synthesizer (Zero-dependency asset-free soundboard!)
  const playSoundEffect = (type: "squeak" | "buzzer" | "whistle") => {
    if (!isAudioEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      if (type === "squeak") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.16);
      } else if (type === "buzzer") {
        const osc = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc2.type = "square";
        osc.frequency.setValueAtTime(95, ctx.currentTime);
        osc2.frequency.setValueAtTime(97, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.75);
        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc2.start();
        osc.stop(ctx.currentTime + 0.8);
        osc2.stop(ctx.currentTime + 0.8);
      } else if (type === "whistle") {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.type = "sine";
        osc2.type = "sine";
        osc1.frequency.setValueAtTime(2200, ctx.currentTime);
        osc2.frequency.setValueAtTime(2250, ctx.currentTime);
        osc1.frequency.linearRampToValueAtTime(2180, ctx.currentTime + 0.1);
        osc1.frequency.linearRampToValueAtTime(2220, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 0.35);
        osc2.stop(ctx.currentTime + 0.35);
      }
    } catch (e) {
      console.warn("Audio Context init blocked or failed: ", e);
    }
  };

  return (
    <div className="min-h-screen poster-main-grunge text-zinc-150 flex flex-col font-sans relative antialiased selection:bg-orange-850 selection:text-white overflow-x-hidden pt-4 pb-12">
      {/* Old TV Screen Static Grain Filter */}
      <OldTvNoise />
      
      {/* Visual top border line */}
      <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-blue-900 via-orange-600 to-blue-900 z-50 opacity-95" />

      {/* Deep black wood and brick ambient shadow overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(249,115,22,0.06),transparent_65%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/12 w-[650px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.02),transparent)] pointer-events-none" />
      
      <div className="hidden lg:block">
        <MetalRivet className="absolute top-4 left-4 opacity-40" />
        <MetalRivet className="absolute top-4 right-4 opacity-40" />
      </div>

      {/* Main Board Container */}
      <div className="w-full max-w-7xl mx-auto px-4 flex-1 flex flex-col gap-6 relative z-10">
        
        {/* --- DYNAMIC STICKER CONTROLS --- */}
        <div id="sticky-audio-controls" className="flex flex-col sm:flex-row items-center justify-between bg-[#11100e] border-2 border-zinc-800/80 rounded px-4 py-2.5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-orange-600" />
          
          <div className="flex items-center gap-2.5 mb-2 sm:mb-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <span className="font-mono text-[9.5px] tracking-[0.2em] text-zinc-400 font-black uppercase flex items-center gap-1.5">
              ⚠️ NYC DEPT CLASSIFIED DOSSIER // APEX EWING #33 ERA [SHIELD VERIFIED]
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Arena Soundboard Trigger Kit */}
            <div className="flex items-center gap-1.5 font-mono text-[9px] border-r border-zinc-900 pr-4 mr-1">
              <span className="text-zinc-500 uppercase mr-1 hidden md:inline font-extrabold">Arena Sound FX:</span>
              <button
                onClick={() => { playSoundEffect("squeak"); }}
                className="px-2 py-0.5 rounded-sm bg-zinc-950 cursor-pointer border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-black transition-all text-[8.5px] uppercase font-bold"
              >
                球鞋摩擦 👟
              </button>
              <button
                onClick={() => { playSoundEffect("whistle"); }}
                className="px-2 py-0.5 rounded-sm bg-zinc-950 cursor-pointer border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-black transition-all text-[8.5px] uppercase font-bold"
              >
                笛哨 🎺
              </button>
              <button
                onClick={() => { playSoundEffect("buzzer"); }}
                className="px-2 py-0.5 rounded-sm bg-zinc-950 cursor-pointer border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-black transition-all text-[8.5px] uppercase font-bold"
              >
                蜂鸣器 🚨
              </button>
            </div>

            {/* Mute toggle */}
            <button
              id="audio-mute-toggle"
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
              className="p-1 rounded bg-zinc-950 cursor-pointer border border-zinc-855 text-zinc-400 hover:text-white transition-all"
            >
              {isAudioEnabled ? <Volume2 className="w-3.5 h-3.5 text-orange-500 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* --- GRAND POSTER SPECTACULAR HEADER --- */}
        <header id="poster-header-hero" className="flex flex-col lg:flex-row bg-[#11100e] border-2 border-zinc-800 p-6 lg:p-8 gap-6 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          <ParquetWoodFloorBackdrop />

          {/* Central stage light glow mimicking MSG arena lights */}
          <div className="absolute top-0 left-1/3 w-[360px] h-[340px] bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_75%)] pointer-events-none mix-blend-screen" />
          <div className="absolute top-0 right-1/4 w-[260px] h-[300px] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none mix-blend-screen" />

          {/* Left Large Title Block */}
          <div className="flex-1 text-left relative z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#ef4444] tracking-[0.3em] font-black uppercase">
                <Swords className="w-4 h-4 text-[#ef4444]" /> GANGS OF NEW YORK KNICKS // EST. 1946
              </div>

              {/* Spectacular Damaged Typeface */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-1.5 leading-none select-none uppercase title-damaged">
                纽约黑帮尼克斯
              </h1>
              
              <div className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mt-1 block">
                —— 铁血时代 ——
              </div>

              <div className="flex items-center gap-1.5 mt-2.5 font-mono text-[10px] text-zinc-400 font-black tracking-wider uppercase bg-black/40 border border-zinc-900 w-fit px-3 py-1">
                <span className="text-[#f97316]">THE GRIT ERA</span>
                <span>|</span>
                <span className="text-[#2563eb]">1990s EWING ERA</span>
              </div>
            </div>

            <p className="font-sans text-[11.5px] text-zinc-400 leading-relaxed mt-6 max-w-xl border-l-[3px] border-[#ef4444] pl-4 py-0.5 italic bg-red-950/5">
              尤因33号镇守禁区，奥克利、梅森、斯塔克斯组成铁血班底，重构90年代纽约尼克斯的硬汉篮球档案。重回麦迪逊广场花园，这里唯有窒息的肉搏与极端的硬度。本看板通过要素雷达、战术路线与防守法典，完美解密铁防美学。
            </p>
          </div>

          {/* Right newspaper column clipping mockup - NEW YORK POST style exactly like the image! */}
          <div 
            id="newspaper-clipping" 
            className="w-full lg:w-[350px] bg-[#ebdcc4] text-zinc-900 p-5 rounded-none relative transform rotate-[0.5deg] shadow-[5px_15px_30px_rgba(0,0,0,0.55)] border border-[#c5b59f] font-sans mt-2 lg:mt-0 select-none overflow-hidden"
            style={{ 
              backgroundImage: "radial-gradient(circle at 80% 20%, rgba(139, 92, 26, 0.08), transparent 70%)"
            }}
          >
            {/* Ink spot shadows */}
            <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-zinc-900/5 blur-md pointer-events-none" />
            <RustyPushPin className="top-1 right-1/2 transform translate-x-1/2" />

            <div className="flex justify-between border-b-2 border-zinc-950 pb-1 text-[9px] font-mono tracking-widest font-black uppercase text-zinc-700">
              <span>NEW YORK POST</span>
              <span>FINAL EDITION</span>
            </div>

            <div className="text-left mt-3">
              <span className="font-display font-black text-[13px] leading-tight uppercase text-red-800 tracking-tight block">KNICKS BRING THE PAIN</span>
              <h2 className="font-display font-black text-[25px] tracking-tighter leading-none uppercase text-zinc-950 mt-0.5">
                EWING LEADS NYC TO FINALS
              </h2>
              
              <div className="border-t border-b border-zinc-950/25 py-2 my-2 text-[10.5px] italic font-serif leading-snug text-zinc-800">
                “ 每一个篮板都是用铁肘和膝盖厮杀换来的。 ”
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="w-18 h-24 bg-neutral-900 border border-zinc-950 overflow-hidden flex-shrink-0 relative">
                  <img
                    src="/src/assets/images/ewing_portrait_1781148780005.png"
                    alt="Ewing Action"
                    className="w-full h-full object-cover filter grayscale contrast-[1.5] brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white font-mono text-[5.5px] text-center py-0.5 uppercase tracking-tighter">
                    #33 EWING
                  </div>
                </div>
                <p className="text-[10px] leading-relaxed text-zinc-850 font-serif">
                  主帅莱利建立窒息式物理防线，将热火、步行者、公牛死死扼制。在1994年大决战抢七中，尤因用无可争议的篮下统治力粉碎步行者防线。纽约时隔21年重塑铁血图腾，昂首跨入总决赛大殿！
                </p>
              </div>
            </div>

            {/* Approved stamp seal */}
            <div className="absolute -bottom-1 -right-1 bg-red-800 text-[#ebdcc4] font-mono text-[8px] font-black tracking-widest px-2.5 py-1 transform -rotate-12 border border-black uppercase text-center shadow-lg">
              NYK APPROVED
            </div>
          </div>
        </header>

        {/* --- THREE-COLUMN SYMMETRIC POSTER GRID --- */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          
          {/* COLUMN 1 (LEFT COLUMN): Grid Index, Ewing Core Player card, and Rivals Confidential Folders */}
          <div id="col-left" className="flex flex-col gap-6 lg:col-span-3">
            <div id="radar-widget" className="relative">
              <GritRadarChart />
            </div>
            <div id="ewing-core-widget" className="relative">
              <EwingCoreCard />
            </div>
            <div id="rivals-widget" className="relative text-left">
              <RivalryFiles />
            </div>
          </div>

          {/* COLUMN 2 (CENTER INTERACTIVE FOCUS): Madison Square Garden penalty arena with Ewing silhouette, 6 Playoff Series below */}
          <div id="col-center" className="lg:order-none order-first flex flex-col gap-6 lg:col-span-6">
            <div id="warmap-widget" className="relative h-full">
              <PlayoffWarMap
                selectedSeriesId={selectedSeriesId}
                onSelectSeries={(id) => {
                  setSelectedSeriesId(id);
                  playSoundEffect("squeak");
                }}
              />
            </div>
          </div>

          {/* COLUMN 3 (RIGHT COLUMN): Blue Wall, Enforcers list, and Patrick Ewing signatures */}
          <div id="col-right" className="flex flex-col gap-6 lg:col-span-3">
            <div id="bluewall-widget" className="relative">
              <BlueWall />
            </div>
            <div id="enforcers-widget" className="relative">
              <EnforcersList />
            </div>
            <div id="quote-widget" className="relative">
              <EwingSignatureQuote />
            </div>
          </div>

        </main>

        {/* --- GEOMETRIC 1991-1994 TIMELINE ARCHIVE --- */}
        <section id="vintage-milestones-timeline-section" className="relative">
          <PlayoffTimeline />
        </section>

      </div>
    </div>
  );
}
