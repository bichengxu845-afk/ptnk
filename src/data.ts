import { Player, PlayoffSeries, RivalryFile, TacticalHotspot } from "./types";

export const ENFORCERS_DATA: Player[] = [
  {
    id: "ewing",
    number: 33,
    name: "帕特里克·尤英",
    englishName: "PATRICK EWING",
    role: "禁区守护者 / 铁血领袖",
    roleTag: "PAINT / BLOCK / LEADER",
    avatarSeed: "ewing",
    avatar: "/src/assets/images/ewing_portrait_1781148780005.png",
    tagline: "禁区属于33号",
    stats: {
      ppg: 23.6,
      rpg: 10.9,
      bpg: 2.8,
      mpg: 38.1
    },
    defenseFocus: "篮下护框、盖帽威慑、低位封锁",
    gritDescription: "纽约守护神。九十年代四大中锋之一，以极具毁灭性的盖帽与悍不畏死的身体对抗铸就防守铁幕。哪怕膝盖磨损严重，也从不在篮下退缩半步。"
  },
  {
    id: "oakley",
    number: 34,
    name: "查尔斯·奥克利",
    englishName: "CHARLES OAKLEY",
    role: "铁血打手 / 篮板怪兽",
    roleTag: "REBOUND / CONTACT / SCREEN",
    avatarSeed: "oakley",
    avatar: "/src/assets/images/oakley_portrait_1781148797707.png",
    tagline: "没有轻松得分",
    stats: {
      ppg: 9.7,
      rpg: 11.2,
      apg: 2.1,
      mpg: 34.3
    },
    defenseFocus: "卡位肉搏、强硬抢断、硬核掩护",
    gritDescription: "联盟公认最强硬之硬汉，尤因的终极保镖。信奉‘犯规就要狠，绝不给二加一机会’。每次倒地争抢、每次结实的防守掩护都将对抗拉满。"
  },
  {
    id: "mason",
    number: 14,
    name: "安东尼·梅森",
    englishName: "ANTHONY MASON",
    role: "锁死一切的组织前锋",
    roleTag: "POWER / DEFENSE / TOUGHNESS",
    avatarSeed: "mason",
    avatar: "/src/assets/images/mason_portrait_1781148814781.png",
    tagline: "力量统治一切",
    stats: {
      ppg: 10.8,
      rpg: 5.8,
      apg: 2.6,
      mpg: 32.5
    },
    defenseFocus: "无限换防、锁死核心、控球策应",
    gritDescription: "极致的‘野兽派’组织者。一身花岗岩般的肌肉，却拥有不可思议的面筐运球与传球本领。他可以从皮蓬防守到奥拉朱旺，是个不折不扣的斗犬型防守尖兵。"
  },
  {
    id: "starks",
    number: 3,
    name: "约翰·斯塔克斯",
    englishName: "JOHN STARKS",
    role: "铁血熔炉 / 疯狗外线",
    roleTag: "FIRE / PRESSURE / CLUTCH",
    avatarSeed: "starks",
    avatar: "/src/assets/images/starks_portrait_1781148831930.png",
    tagline: "不可遏制的激情",
    stats: {
      ppg: 13.9,
      rpg: 2.6,
      apg: 4.8,
      mpg: 34.8
    },
    defenseFocus: "全场贴身防守、外线压迫、冷血绝杀",
    gritDescription: "由草根逆袭成为硬汉的代表，防守端是一只狂吠的恶犬。他富有极强的煽动性，以‘那一记骑扣’震惊世人，他的火焰能瞬间点燃主场，但也容易失控。"
  },
  {
    id: "harper",
    number: 11,
    name: "德里克·哈珀",
    englishName: "DEREK HARPER",
    role: "外线铁锁 / 战术大脑",
    roleTag: "DEFENSE / LEADERSHIP / IQ",
    avatarSeed: "harper",
    avatar: "/src/assets/images/harper_portrait_1781148849171.png",
    tagline: "老辣的后防磐石",
    stats: {
      ppg: 11.6,
      rpg: 1.5,
      apg: 4.4,
      mpg: 32.1
    },
    defenseFocus: "持球人压迫、智商拦截、攻防节拍控制",
    gritDescription: "在1994年半途加入，完美拼上了尼克斯铁血版图的最后一块。防守极其老辣、狡黠，善于利用垃圾话与小动作搞崩对手，能在乱局中稳定军心。"
  }
];

export const PLAYOFF_SERIES_DATA: PlayoffSeries[] = [
  {
    id: "1992-bulls",
    year: 1991,
    opponent: "芝加哥公牛 (ECSF)",
    seriesScore: "2-4",
    status: "FELL SHORT",
    roundName: "东部半决赛",
    description: "莱利执教首年，将尼克斯全面硬汉化，首度在半决赛中与乔丹的公牛陷入全面绞杀。每一场都是摔跤般的肉搏战。",
    highlights: [
      "尤因带伤血战高位，奥克利与Grant疯狂摩擦",
      "防守极限压迫，将不可一世的公牛得分压制在100以下",
      "Game 6物理对抗升级，将死斗带回麦迪逊广场花园"
    ],
    stats: {
      oppPpg: 97.7,
      defRating: 104.2,
      oppFgPct: 43.6,
      paintPpg: 38.6
    }
  },
  {
    id: "1993-bulls",
    year: 1992,
    opponent: "芝加哥公牛 (ECF)",
    seriesScore: "2-4",
    status: "FELL SHORT",
    roundName: "东部决赛",
    description: "常规赛豪取60胜，东决先下一城以2-0优势领跑公牛，斯塔克斯贡献神级骑扣，但最终因经验以及乔丹的史诗反扑折戟。",
    highlights: [
      "斯塔克斯绝赞骑扣乔丹与格兰特，成为队史最佳镜头",
      "连续三场两队得分总和未破180分，堪称防守泥潭",
      "尤因场均血战42分钟，包揽内线半壁江山"
    ],
    stats: {
      oppPpg: 95.4,
      defRating: 102.3,
      oppFgPct: 42.0,
      paintPpg: 36.1
    }
  },
  {
    id: "1994-nets",
    year: 1993,
    opponent: "新泽西篮网 (R1)",
    seriesScore: "3-1",
    status: "WON",
    roundName: "首轮大战",
    description: "1994年冠军冲刺的第一步，首轮对阵拥有科尔曼与克罗蒂的同城死敌，铁血军团利用窒息防守让对手首发彻底失准。",
    highlights: [
      "奥克利统治前场篮板，场均摘下12.5个篮板",
      "限制篮网场均得分仅为86.5分，奠定季后赛基调"
    ],
    stats: {
      oppPpg: 91.5,
      defRating: 101.2,
      oppFgPct: 41.3,
      paintPpg: 35.2
    }
  },
  {
    id: "1994-bulls",
    year: 1993,
    opponent: "芝加哥公牛 (ECSF)",
    seriesScore: "4-3",
    status: "WON",
    roundName: "东部半决赛",
    description: "在没有乔丹的第一年，公牛由皮蓬领军依然刚猛。两队血战7场。最终在第7场抢七死斗中，尼克斯靠内线绞杀突围。",
    highlights: [
      "抢七大战尤因砍下18分17篮板，捍卫麦迪逊王座",
      "皮蓬与戴维斯遭遇尤因/奥克利的空中肉搏，防守战空前惨烈",
      "Game 3 的皮蓬扣篮并跨过欧文引发全场暴动"
    ],
    stats: {
      oppPpg: 91.5,
      defRating: 101.2,
      oppFgPct: 41.3,
      paintPpg: 35.2
    }
  },
  {
    id: "1994-pacers",
    year: 1993,
    opponent: "印第安纳步行者 (ECF)",
    seriesScore: "4-3",
    status: "WON",
    roundName: "东部决赛",
    description: "最著名的宿敌对决。雷吉·米勒的窒息时刻，斯塔克斯的暴脾气，以及第7场抢七，尤因终场前的搏命补篮，让纽约时隔21年重返总决赛。",
    highlights: [
      "雷吉·米勒向场边的雷吉·米勒和斯派克·李做出封喉手势",
      "抢七尤因在最后关头飞身补篮绝杀比赛，麦迪逊广场花园彻底沸腾",
      "步行者场均被逼出18次失误，防守对抗升级为摔角比赛"
    ],
    stats: {
      oppPpg: 91.5,
      defRating: 101.2,
      oppFgPct: 41.3,
      paintPpg: 35.2
    }
  },
  {
    id: "1994-rockets",
    year: 1993,
    opponent: "休斯顿火箭 (Finals)",
    seriesScore: "3-4",
    status: "FELL SHORT",
    roundName: "总决赛",
    description: "真正的防守圣殿。两大划时代中锋尤因与奥拉朱旺的终极对抗，场均得分极其罕见地没有一场能够破百，刺刀见红地血拼到最后一秒。",
    highlights: [
      "Game 5 尤因狂送8个盖帽创总决赛历史纪录",
      "Game 6 奥拉朱旺生死时刻指尖指点，封盖斯塔克斯的三分逆转",
      "打满7场，全系列赛窒息对抗，彻底定义了硬汉绞杀的美学"
    ],
    stats: {
      oppPpg: 86.1,
      defRating: 98.4,
      oppFgPct: 40.8,
      paintPpg: 32.4
    }
  }
];

export const RIVALRY_FILES: RivalryFile[] = [
  {
    id: "bulls",
    caseNum: "CASE 01",
    teamName: "CHICAGO BULLS",
    tagline: "决赛前的叹息之墙",
    description: "公牛队是那个时代尼克斯不得不翻越的巍峨大山。乔丹的无解进攻与皮蓬、格兰特的强悍防守，与尼克斯在五年里克三次交手，两队几乎每一场都留下血光与淤青。",
    gritMatchup: "尤因 vs 格兰特/Rodman | 斯塔克斯 vs 乔丹",
    intensity: 10,
    epicClash: "身体对抗、垃圾话齐飞、极度窒息的半场拉锯",
    historicalIncident: "1993 ECF：斯塔克斯的绝杀扣篮直接将皮蓬与格兰特钉上背景板；1994 ECSF皮蓬对欧文的‘跨栏之辱’引发双方几乎在场边群殴。"
  },
  {
    id: "pacers",
    caseNum: "CASE 02",
    teamName: "INDIANA PACERS",
    tagline: "东部广场的街头决斗",
    description: "步行者的冰冷、雷吉·米勒的血汗、施米茨的高大让这两队一碰面就化身‘不死不休’的绞杀。米勒与斯派克·李的口水仗，与斯塔克斯的头槌冲突，成为季后赛黑历史典型。",
    gritMatchup: "斯塔克斯 vs 雷吉·米勒 | 奥克利 vs 戴维斯兄弟",
    intensity: 9,
    epicClash: "肉搏肉、头碰头，无休止的挑衅与垃圾话风暴",
    historicalIncident: "1993年季后赛：斯塔克斯由于雷吉·米勒不断的耳边低语，情绪失控用头重槌了米勒，直接被驱逐出场。"
  },
  {
    id: "rockets",
    caseNum: "CASE 03",
    teamName: "HOUSTON ROCKETS",
    tagline: "1994 终极攻防神殿",
    description: "防守绞肉机的最高峰。尤因与奥拉朱旺从大学起就是宿敌。当这两人在总决赛相遇，双方阵中都有极致的铁血大锁（奥克利 vs 索普、哈珀 vs 麦克斯维尔）。",
    gritMatchup: "尤因 vs 奥拉朱旺 | 奥克利 vs 索普",
    intensity: 10,
    epicClash: "两代第一中锋在油漆区的致命斗角，极限低比分",
    historicalIncident: "整个系列赛绝无任何浮皮流沙，连拿90分都形同奢望。Game 6奥拉朱旺最后0.1秒极限指尖封盖斯塔克斯，抢走纽约指环。"
  },
  {
    id: "heat",
    caseNum: "CASE 04",
    teamName: "MIAMI HEAT",
    tagline: "90年代东部复仇之火",
    description: "当主帅帕特·莱利在1995年出走迈阿密，并将他的火爆防守基因克隆给热火队，尼克斯和热火成了联盟里最残酷的拳击擂台。铁血莫宁 vs 铁血尤因，简直一触即燃。",
    gritMatchup: "尤因 vs 莫宁 | 欧文 vs 蒂姆·哈达威",
    intensity: 9,
    epicClash: "直接进化为抱摔与拳击的大乱斗",
    historicalIncident: "1997年以及1998年连续两年季后赛爆发全武行抱摔。最滑稽而强悍的一幕：主帅范甘迪为了阻止莫宁，飞身死死抱住莫宁大腿在底线滑行。"
  }
];

export const TACTICAL_HOTSPOTS: TacticalHotspot[] = [
  {
    id: "play-starks-dunk",
    x: 23,
    y: 43,
    type: "clutch",
    player: "John Starks",
    title: "斯塔克斯世纪骑扣",
    description: "1993年东部决赛Game 2，斯塔克斯从底线强势突破，迎着皮蓬和霍勒斯·格兰特的封盖，完成一记震古烁今的左手骑扣！",
    game: "1993 ECF G2 vs Bulls",
    playoffId: "1993-bulls"
  },
  {
    id: "play-ewing-tipin",
    x: 50,
    y: 19,
    type: "clutch",
    player: "Patrick Ewing",
    title: "尤因搏命绝杀补篮",
    description: "1994年东决抢七生死战，终场前26.9秒，尤因飞身在戴维斯头顶抢下篮板并完成惊世核俗的补篮，锁定胜局，昂首晋级总决赛！",
    game: "1994 ECF Game 7 vs Pacers",
    playoffId: "1994-pacers"
  },
  {
    id: "play-ewing-blocks",
    x: 48,
    y: 14,
    type: "block",
    player: "Patrick Ewing",
    title: "内线空中拦截禁飞区",
    description: "1994年总决赛G5，尤因彻底化身高空守卫者，全场送出历史级的8次封盖，将奥拉朱旺与火箭众人的突破彻底扼杀在油漆区。",
    game: "1994 NBA Finals G5 vs Rockets",
    playoffId: "1994-rockets"
  },
  {
    id: "play-oakley-rebound",
    x: 52,
    y: 28,
    type: "rebound",
    player: "Charles Oakley",
    title: "奥克利单次死磕18板",
    description: "1992年半决赛Game 4，奥克利上演卡位教科书，利用铁铸的身板卡死卡特莱特，疯狂撕扯下18个强硬篮板，奠定野兽威严。",
    game: "1992 ECSF G4 vs Bulls",
    playoffId: "1992-bulls"
  },
  {
    id: "play-mason-clamp",
    x: 65,
    y: 35,
    type: "block",
    player: "Anthony Mason",
    title: "梅森跨界锁紧防线",
    description: "在防守端，安东尼·梅森从外线贴死格兰特，到内线用力量生扛奥拉朱旺。其强壮的花岗岩身板完成了一切换防与身体撕咬。",
    game: "1994 ALL PLAYOFFS",
    playoffId: "all-time"
  },
  {
    id: "play-harper-steal",
    x: 35,
    y: 55,
    type: "clutch",
    player: "Derek Harper",
    title: "哈珀关键死锁抢断",
    description: "1994年东部半决赛抢七生死战，哈珀用牛皮糖防守逼迫BJ·阿姆斯特朗，在底角实现极为硬核的抢断并造成争球违例，断绝公牛三分逆转企图。",
    game: "1994 ECSF G7 vs Bulls",
    playoffId: "1994-bulls"
  },
  {
    id: "play-starks-clutch",
    x: 77,
    y: 42,
    type: "clutch",
    player: "John Starks",
    title: "抢七绝杀冷血三分",
    description: "1994年首轮大战Game 4，在第四节比分死咬时，斯塔克斯不顾右手脱臼的剧痛，外线强投超长空心三分，硬生生砸碎篮网防线！",
    game: "1994 R1 G4 vs Nets",
    playoffId: "1994-nets"
  }
];

export const GRIT_STATS_METRICS = {
  paintControl: 95,
  reboundWar: 94,
  playoffGrit: 94,
  physicalContact: 93,
  defensivePressure: 95,
  overallGrit: 94
};
