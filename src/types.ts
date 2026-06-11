export interface Player {
  id: string;
  number: number;
  name: string;
  englishName: string;
  role: string;
  roleTag: string;
  avatarSeed: string; // Used to display consistent, stylized silhouettes/portraits
  avatar?: string; // High contrast halftone character portraits
  tagline: string;
  stats: {
    ppg: number;
    rpg: number;
    bpg?: number;
    apg?: number;
    mpg: number;
  };
  defenseFocus: string;
  gritDescription: string;
}

export interface PlayoffSeries {
  id: string;
  year: number;
  opponent: string;
  seriesScore: string;
  status: "WON" | "FELL SHORT";
  roundName: string;
  description: string;
  highlights: string[];
  stats: {
    oppPpg: number;
    defRating: number;
    oppFgPct: number;
    paintPpg: number;
  };
}

export interface RivalryFile {
  id: string;
  caseNum: string;
  teamName: string;
  tagline: string;
  description: string;
  gritMatchup: string;
  intensity: number; // 1 to 10
  epicClash: string;
  historicalIncident: string;
}

export interface TacticalHotspot {
  id: string;
  x: number; // % from left of half court court SVG
  y: number; // % from top of half court court SVG
  type: "block" | "rebound" | "clutch" | "foul";
  player: string;
  title: string;
  description: string;
  game: string;
  playoffId: string; // matches series ID
}
