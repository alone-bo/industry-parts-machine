import gantryMillImage from "./assets/cnc-gantry-boring-milling-machine.png";
import sandMixerImage from "./assets/j2-mobile-double-arm-continuous-sand-mixer.png";
import stampingLineImage from "./assets/high-speed-automated-stamping-line.png";

export type Product = {
  id: string;
  category: string;
  name: string;
  en: string;
  image: string;
  summary: string;
  specs: [string, string][];
  features: string[];
  industries: string[];
};

export const productCategories = ["全部", "金属切削机床", "铸造装备", "冲压成套装备"];

export const products: Product[] = [
  {
    id: "cnc-gantry-boring-milling",
    category: "金属切削机床",
    name: "数控龙门镗铣床",
    en: "CNC Gantry Boring and Milling Machine",
    image: gantryMillImage,
    summary:
      "面向大型箱体、机架、底座及板类结构件，集铣削、镗削、钻孔与攻丝于一体，一次装夹即可完成多工序复合加工。",
    specs: [
      ["结构形式", "龙门式整体结构"],
      ["加工工艺", "铣削 / 镗削 / 钻孔 / 攻丝"],
      ["控制系统", "CNC 数控系统"],
      ["配置方式", "按工件尺寸与工艺需求定制"],
    ],
    features: ["高刚性龙门结构", "多工序复合加工", "数控精准控制", "全封闭安全防护"],
    industries: ["工程机械", "船舶装备", "核电装备"],
  },
  {
    id: "j2-sand-mixer",
    category: "铸造装备",
    name: "J2系列移动式双臂连续混砂机",
    en: "J2 Series Mobile Double-arm Continuous Sand Mixer",
    image: sandMixerImage,
    summary:
      "面向大中型铸件造型生产，采用双臂连续混砂结构，整机可沿轨道移动，覆盖更大的造型作业区域。",
    specs: [
      ["结构形式", "移动式双臂结构"],
      ["工作方式", "连续混砂"],
      ["移动方式", "轨道行走"],
      ["适用场景", "大中型铸件造型生产"],
    ],
    features: ["双臂作业覆盖广", "连续稳定出砂", "整机移动灵活", "配套料仓与输送系统"],
    industries: ["工程机械", "风电塔筒", "材料加工"],
  },
  {
    id: "high-speed-stamping-line",
    category: "冲压成套装备",
    name: "大型高速自动化冲压生产线",
    en: "Large High-speed Automated Stamping Line",
    image: stampingLineImage,
    summary:
      "集大型压力机、自动化上下料与整线联动控制于一体，适用于汽车覆盖件及大型钣金件的高效批量冲压生产。",
    specs: [
      ["线体组成", "大型压力机 + 自动化传输系统"],
      ["生产方式", "连续自动化冲压"],
      ["控制系统", "整线联动控制"],
      ["适用工件", "汽车覆盖件 / 大型钣金件"],
    ],
    features: ["高速连续生产", "自动化上下料", "整线协同控制", "封闭式安全防护"],
    industries: ["汽车制造", "工程机械", "材料加工"],
  },
];

export type Industry = {
  id: string;
  cn: string;
  en: string;
  image: string;
  summary: string;
  needs: string[];
  equipment: string[];
};

export const industries: Industry[] = [
  {
    id: "materials",
    cn: "材料加工",
    en: "Materials",
    image: "/images/app-materials.webp",
    summary:
      "为钢板、卷材与特种材料加工企业提供校平、剪切与成形设备，提升材料平整度和后续加工稳定性。",
    needs: ["高平整度", "连续化生产", "多材质适应"],
    equipment: ["high-speed-stamping-line", "j2-sand-mixer", "cnc-gantry-boring-milling"],
  },
  {
    id: "automotive",
    cn: "汽车制造",
    en: "Automotive",
    image: "/images/app-auto.webp",
    summary: "面向车身结构件、底盘部件及车辆罐体，提供精密校平与压制成形能力。",
    needs: ["尺寸一致性", "高强钢成形", "大批量节拍"],
    equipment: ["high-speed-stamping-line", "cnc-gantry-boring-milling"],
  },
  {
    id: "pressure-vessel",
    cn: "压力容器",
    en: "Pressure Vessel",
    image: "/images/app-vessel.webp",
    summary: "满足厚板卷圆、封头压制及筒体校圆要求，为高安全等级容器制造提供可靠装备。",
    needs: ["厚板卷制", "高圆度精度", "工艺可追溯"],
    equipment: ["cnc-gantry-boring-milling", "high-speed-stamping-line"],
  },
  {
    id: "steel-pipe",
    cn: "钢管制造",
    en: "Steel Pipe",
    image: "/images/app-pipe.webp",
    summary: "针对大口径直缝焊管与结构管生产，提供卷制、校平及整线配套方案。",
    needs: ["大口径成形", "连续生产", "焊前精度控制"],
    equipment: ["cnc-gantry-boring-milling", "high-speed-stamping-line"],
  },
  {
    id: "silos",
    cn: "筒仓",
    en: "Silos",
    image: "/images/app-silos.webp",
    summary: "服务粮食、水泥、化工等储存设施建设，实现大型筒体板材高效卷制与稳定拼装。",
    needs: ["大尺寸板材", "高效率卷圆", "现场拼装适配"],
    equipment: ["high-speed-stamping-line", "cnc-gantry-boring-milling"],
  },
  {
    id: "marine",
    cn: "船舶装备",
    en: "Marine Equipment",
    image: "/images/app-marine.webp",
    summary: "为船体结构、海工平台与船用部件提供厚板成形、校平和型材弯曲解决方案。",
    needs: ["长尺寸板材", "复杂曲面", "耐腐蚀材料"],
    equipment: ["cnc-gantry-boring-milling", "j2-sand-mixer"],
  },
  {
    id: "engineering",
    cn: "工程机械",
    en: "Engineering Machinery",
    image: "/images/app-engineering.webp",
    summary: "支持挖掘机、起重机等装备的结构件制造，兼顾高强钢加工能力与生产效率。",
    needs: ["高强钢加工", "结构件精度", "柔性化生产"],
    equipment: ["cnc-gantry-boring-milling", "j2-sand-mixer", "high-speed-stamping-line"],
  },
  {
    id: "wind-towers",
    cn: "风电塔筒",
    en: "Wind Towers",
    image: "/images/app-wind.webp",
    summary: "针对大直径、超长塔筒段与法兰环件，提供厚板卷制、锥筒成形与型材弯曲设备。",
    needs: ["超厚板卷制", "锥筒成形", "高效率交付"],
    equipment: ["j2-sand-mixer", "cnc-gantry-boring-milling"],
  },
  {
    id: "nuclear",
    cn: "核电装备",
    en: "Nuclear Power",
    image: "/images/app-nuclear.webp",
    summary: "满足核电关键设备对重型成形、精确控制和全过程质量管理的严格要求。",
    needs: ["超高可靠性", "重载成形", "质量全程控制"],
    equipment: ["cnc-gantry-boring-milling", "j2-sand-mixer"],
  },
  {
    id: "composite-board",
    cn: "复合板",
    en: "Composite Board",
    image: "/images/app-composite.webp",
    summary: "为金属复合板提供低损伤校平与成形工艺，保障复合层结合质量和表面状态。",
    needs: ["表面保护", "应力均衡", "多层材料适配"],
    equipment: ["high-speed-stamping-line", "cnc-gantry-boring-milling"],
  },
];

export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const newsCategories = ["全部", "企业新闻", "项目交付", "技术洞察", "全球服务"];

export const news: NewsItem[] = [
  {
    id: "four-roll-delivery",
    date: "2025.03.18",
    category: "项目交付",
    title: "大型四辊液压卷板机完成总装，即将交付海外客户",
    excerpt: "为超厚板成形提供更高精度与生产效率，设备已完成全流程负载测试。",
    image: "/images/news-four-roll.webp",
    body: [
      "近日，EZHONG 为海外重型装备客户定制的大型四辊液压卷板机顺利完成总装，并通过关键工况下的全流程负载测试。",
      "该设备针对客户厚板筒体生产需求进行专项设计，在辊系布置、液压同步与数控逻辑上进行了优化，可有效提升预弯质量与整体成形效率。",
      "在交付前，EZHONG 工程团队将协同客户完成工艺验证与操作培训，确保设备快速投入稳定生产。",
    ],
  },
  {
    id: "wind-tower-solution",
    date: "2025.02.26",
    category: "技术洞察",
    title: "如何为风电塔筒选择高效卷板解决方案",
    excerpt: "从板厚、筒径、锥度到生产节拍，系统梳理风塔装备选型的关键维度。",
    image: "/images/news-wind.webp",
    body: [
      "风电塔筒制造正朝着大直径、厚壁化和高效率方向发展，这对卷板设备的能力边界提出了新的要求。",
      "设备选型应综合考虑最大板厚、材料屈服强度、筒节直径、锥筒成形能力以及上下料方式。对于大规模生产，自动化配套与工艺稳定性同样关键。",
      "EZHONG 可依据客户产品规格和产能目标，提供从单机到整线的系统方案，帮助企业降低工艺风险。",
    ],
  },
  {
    id: "quality-meeting",
    date: "2025.01.12",
    category: "企业新闻",
    title: "EZHONG 智能制造基地年度质量会议圆满召开",
    excerpt: "围绕制造精度、过程追溯与交付品质，部署新一年度质量提升计划。",
    image: "/images/workshop-3.jpg",
    body: [
      "EZHONG 年度质量会议在智能制造基地召开，各制造中心、技术与服务团队围绕关键质量指标进行复盘。",
      "会议明确了以过程控制和数据追溯为核心的质量提升方向，进一步强化原材料检验、关键部件加工和整机测试标准。",
      "未来，EZHONG 将继续以可靠品质为基础，为全球客户交付更具长期价值的重型装备。",
    ],
  },
  {
    id: "vessel-upgrade",
    date: "2024.12.08",
    category: "全球服务",
    title: "海外服务团队完成压力容器产线升级",
    excerpt: "通过设备改造和工艺优化，帮助客户提升厚板筒体生产效率。",
    image: "/images/app-vessel.webp",
    body: [
      "EZHONG 海外服务团队近期完成某压力容器制造企业的产线升级项目。",
      "项目包括设备状态检测、控制系统升级、工艺参数优化与操作人员培训，有效提高了设备运行稳定性和筒体成形一致性。",
      "EZHONG 将持续完善全球服务网络，为客户提供全生命周期支持。",
    ],
  },
  {
    id: "profile-bending-guide",
    date: "2024.11.20",
    category: "技术洞察",
    title: "型材弯曲机辊系配置与模具选择指南",
    excerpt: "理解不同截面型材的受力特点，提升弯曲精度与生产效率。",
    image: "/images/news-profile.webp",
    body: [
      "型材弯曲过程受截面形状、材料强度和弯曲半径等多种因素影响，合理配置辊系与模具是保证质量的前提。",
      "针对角钢、槽钢、管材和扁钢，应分别考虑防扭曲、防变形和回弹控制，并结合批量规模选择数控方案。",
      "EZHONG 工程师可根据工件图纸提供模具和设备配置建议。",
    ],
  },
  {
    id: "workshop-upgrade",
    date: "2024.10.16",
    category: "企业新闻",
    title: "重型装配车间完成新一轮智能化升级",
    excerpt: "新增数字化检测与装配管理系统，提升重型设备交付效率。",
    image: "/images/workshop-6.jpg",
    body: [
      "EZHONG 重型装配车间完成新一轮智能化升级，进一步打通从部件加工到整机装配的数据流程。",
      "新系统可实时记录关键装配节点和检测数据，使质量问题更早被识别，同时为客户交付提供完整记录。",
      "此次升级将显著提升大型设备装配效率和交付可预期性。",
    ],
  },
];

export const productDetails: Record<
  string,
  {
    headline: string;
    intro: string[];
    highlights: [string, string][];
    advantages: [string, string][];
    workflow: string[];
    configurations: string[];
  }
> = {
  "cnc-gantry-boring-milling": {
    headline: "大型零件一次装夹，完成多工序复合加工",
    intro: [
      "数控龙门镗铣床采用龙门式整体结构，适合加工尺寸大、重量重、精度要求高的箱体、机架、底座和板类结构件。工件一次装夹后即可完成铣平面、镗孔、钻孔和攻丝等多道工序，减少重复找正与吊装。",
      "设备配备 CNC 数控系统与全封闭防护结构，可根据工件尺寸、材料和加工精度要求配置工作台、主轴及附件铣头，为重型装备制造企业提供稳定、高效的大型零件加工能力。",
    ],
    highlights: [
      ["复合加工", "铣、镗、钻、攻一次装夹完成"],
      ["重型工件", "适合大尺寸箱体与结构件"],
      ["数控控制", "程序化加工，一致性更高"],
    ],
    advantages: [
      ["高刚性龙门结构", "整体龙门框架受力均衡，满足重切削工况下的稳定加工。"],
      ["减少装夹次数", "多工序集中加工，降低重复找正误差与辅助时间。"],
      ["数控精准控制", "CNC 系统实现加工程序管理，便于批量零件重复生产。"],
      ["全封闭防护", "封闭式防护结构有效隔离切屑与冷却液，提升作业安全与环境整洁。"],
    ],
    workflow: ["工件装夹找正", "程序调用", "平面铣削", "镗孔钻孔", "精度检测"],
    configurations: [
      "附件铣头",
      "自动换刀装置",
      "冷却与排屑系统",
      "工件测量系统",
      "按需定制工作台",
    ],
  },
  "j2-sand-mixer": {
    headline: "移动式双臂连续混砂，覆盖大型铸件造型作业",
    intro: [
      "J2系列移动式双臂连续混砂机专为大中型铸件造型生产设计，整机由料仓、双臂混砂机构、输送系统和行走底盘组成，可在连续出砂的同时沿轨道移动，适应大型砂箱和地坑造型作业。",
      "双臂结构让混砂机拥有更大的作业半径，配合连续混砂工艺，可减少人工转运型砂，提高造型效率和型砂质量稳定性，适用于工程机械、风电及重型装备等行业的大型铸件生产。",
    ],
    highlights: [
      ["双臂结构", "作业半径更大，覆盖范围更广"],
      ["连续混砂", "出砂连续稳定，提升造型效率"],
      ["移动作业", "沿轨道行走，适应大型造型区"],
    ],
    advantages: [
      ["作业覆盖范围广", "双臂协同配合整机移动，满足大型砂箱与地坑造型需要。"],
      ["型砂质量稳定", "连续混砂方式使型砂混制均匀，有利于提升铸件质量。"],
      ["减少人工转运", "混砂、输送与造型同步完成，降低劳动强度。"],
      ["集成化设计", "料仓、混砂与输送系统一体化布置，现场安装与维护更便捷。"],
    ],
    workflow: ["原砂与粘结剂供料", "双臂连续混砂", "定点出砂", "移动造型", "清理维护"],
    configurations: ["双料仓系统", "粘结剂定量供给", "轨道行走底盘", "电气控制系统", "除尘接口"],
  },
  "high-speed-stamping-line": {
    headline: "整线自动化联动，实现大型冲压件高效量产",
    intro: [
      "大型高速自动化冲压生产线由大型压力机、自动化上下料与工序间传输系统组成，通过整线联动控制实现从板料上料、多工序冲压到成品下线的连续生产。",
      "生产线采用封闭式安全防护，适用于汽车覆盖件、结构件及大型钣金件的大批量制造，可根据产品工艺、模具规格和产能目标进行整线规划与配置。",
    ],
    highlights: [
      ["高速生产", "连续自动化冲压，提升节拍"],
      ["整线联动", "压力机与传输系统协同运行"],
      ["批量制造", "适合大型钣金件规模化生产"],
    ],
    advantages: [
      ["连续高效生产", "自动化上下料与工序间传输，减少停机等待。"],
      ["整线协同控制", "统一控制系统协调压力机与自动化设备，运行稳定。"],
      ["产品一致性高", "自动化生产降低人工差异，保证冲压件质量稳定。"],
      ["安全封闭设计", "整线封闭式防护与安全联锁，保障人员与设备安全。"],
    ],
    workflow: ["板料上料", "首序拉伸", "多工序冲压", "自动传输", "成品下线"],
    configurations: [
      "拆垛上料系统",
      "多工位压力机",
      "自动化传输装置",
      "快速换模系统",
      "成品下线输送",
    ],
  },
};

export const productServices: [string, string][] = [
  ["方案咨询", "根据工件、工艺与产能目标，提供设备选型与整线规划建议。"],
  ["安装调试", "专业工程团队现场安装、调试并完成验收运行。"],
  ["操作培训", "为客户操作与维护人员提供系统化培训。"],
  ["售后支持", "提供备件供应、远程诊断与定期维护服务。"],
];

export const industryDetails: Record<
  string,
  { headline: string; description: string[]; challenges: [string, string][]; outcomes: string[] }
> = {
  materials: {
    headline: "提升板材平整度，夯实后续加工质量",
    description: [
      "钢材加工中心和材料制造企业需要处理不同厚度、强度和表面状态的板材。板材平整度、残余应力和尺寸一致性，直接影响后续切割、焊接与成形效果。",
      "EZHONG 提供单机校平、卷材开平和整线自动化方案，帮助企业实现更稳定的材料供应和更高的生产效率。",
    ],
    challenges: [
      ["波浪与翘曲", "通过多辊校平改善板材平面度。"],
      ["多材质切换", "工艺参数快速调用，适应多规格订单。"],
      ["人工依赖", "自动送料、剪切和堆垛降低劳动强度。"],
    ],
    outcomes: ["平面度更稳定", "材料利用率提升", "加工节拍更快"],
  },
  automotive: {
    headline: "以稳定精度支持汽车与专用车辆制造",
    description: [
      "汽车制造对零部件尺寸一致性、表面质量和生产节拍有严格要求，同时高强钢应用不断增加，对设备刚性和控制精度提出更高标准。",
      "EZHONG 为车身结构件、底盘部件、车厢板与罐车筒体提供校平、压制和卷制设备，支持规模化稳定生产。",
    ],
    challenges: [
      ["高强钢成形", "更大设备刚性与精确压力控制。"],
      ["批量一致性", "程序化工艺减少个体差异。"],
      ["节拍要求", "自动上下料与产线联动提升效率。"],
    ],
    outcomes: ["零件一致性提高", "高强钢加工能力", "适合连续生产"],
  },
  "pressure-vessel": {
    headline: "为高安全等级容器建立可靠成形基础",
    description: [
      "压力容器与锅炉制造通常涉及厚板、高强度材料和严格质量规范。筒体圆度、直边长度和焊缝对接精度，是影响后续焊接质量与安全性的关键。",
      "EZHONG 的三辊、四辊卷板机及液压机可满足筒体卷制、校圆和封头压制需求，并可提供完整工艺建议。",
    ],
    challenges: [
      ["厚板成形", "大扭矩驱动与高刚性辊系保障稳定卷制。"],
      ["圆度控制", "数控定位和多道次工艺控制筒体精度。"],
      ["质量追溯", "记录关键工艺参数，支持质量管理。"],
    ],
    outcomes: ["筒体圆度更高", "减少返工", "支持厚壁容器制造"],
  },
  "steel-pipe": {
    headline: "面向大口径钢管的高效卷制与整线配套",
    description: [
      "大口径直缝焊管、螺旋管配套件和结构管生产需要稳定的板材成形能力，以及良好的焊前对接精度。",
      "EZHONG 根据管径、壁厚、长度和产能目标配置卷板设备与校平产线，帮助客户提高成形效率和焊接质量。",
    ],
    challenges: [
      ["大管径成形", "长辊系与支撑装置保证长工件稳定。"],
      ["焊前精度", "减少错边和间隙，提升焊接质量。"],
      ["产能提升", "自动化上下料减少辅助时间。"],
    ],
    outcomes: ["焊前精度提升", "生产效率更高", "适应多规格钢管"],
  },
  silos: {
    headline: "让大型储存设施建设更高效、更稳定",
    description: [
      "粮食、水泥、化工和能源储存筒仓通常由大量弧形板拼装而成。板材弧度一致性直接影响现场安装效率和结构稳定性。",
      "EZHONG 提供适合批量生产的卷板设备和型材弯曲设备，帮助客户实现标准化、快速化生产。",
    ],
    challenges: [
      ["批量一致性", "数控程序保证弧板曲率稳定。"],
      ["大尺寸板材", "宽幅设备满足大型筒仓板材加工。"],
      ["现场拼装", "精准成形减少现场修正工作量。"],
    ],
    outcomes: ["拼装效率提升", "曲率一致性更好", "降低现场返工"],
  },
  marine: {
    headline: "应对船舶与海工结构的复杂成形挑战",
    description: [
      "船舶装备和海洋工程结构件常使用长尺寸、高强度、耐腐蚀板材，并包含复杂曲面和大尺寸构件。",
      "EZHONG 可提供厚板卷制、板材校平及型材弯曲设备，满足船体结构、海工平台、管道和船用部件制造。",
    ],
    challenges: [
      ["复杂曲面", "多道次与数控工艺提升成形精度。"],
      ["长尺寸材料", "加长辊系与支撑系统保证稳定加工。"],
      ["高强钢应用", "重载结构满足高强度材料需求。"],
    ],
    outcomes: ["复杂构件成形", "大尺寸稳定加工", "提升船体建造效率"],
  },
  engineering: {
    headline: "支持工程机械结构件的高强度与高效率",
    description: [
      "挖掘机、起重机、装载机和矿山设备大量使用高强钢结构件，要求材料平整、尺寸稳定，并具备良好的焊接和装配性能。",
      "EZHONG 通过校平机、液压机和型材弯曲机组合，为结构件制造提供从板材处理到成形的完整设备方案。",
    ],
    challenges: [
      ["高强钢加工", "高刚性设备满足大屈服强度材料。"],
      ["结构件精度", "减少焊接变形和装配误差。"],
      ["柔性生产", "快速切换多型号产品。"],
    ],
    outcomes: ["结构件精度提升", "高强钢加工更稳定", "多品种柔性生产"],
  },
  "wind-towers": {
    headline: "为大型风塔制造提供厚板与锥筒成形能力",
    description: [
      "风电塔筒正向更大直径、更厚板材和更高效率发展，筒节和锥段成形能力成为风塔制造企业的重要竞争力。",
      "EZHONG 提供重型三辊、四辊卷板机及法兰型材弯曲设备，并可配置上下料与支撑系统，适应大型塔筒的连续生产。",
    ],
    challenges: [
      ["超厚板卷制", "大功率驱动与重载辊系满足厚板加工。"],
      ["锥筒成形", "专用锥形装置提升锥段成形精度。"],
      ["大件吊装", "支撑与上下料系统提升安全性和效率。"],
    ],
    outcomes: ["支持大型塔筒", "锥段成形更稳定", "提高单线产能"],
  },
  nuclear: {
    headline: "以严苛质量体系服务核电关键装备",
    description: [
      "核电装备制造对材料性能、成形精度、设备可靠性和质量记录有极高要求，任何偏差都可能影响后续制造和安全评估。",
      "EZHONG 为核电相关容器、结构件和重型部件制造提供重载卷板、校平与液压成形设备，并支持定制化工艺验证。",
    ],
    challenges: [
      ["超高可靠性", "关键部件选型与整机测试确保稳定运行。"],
      ["精密控制", "数控系统实现压力、位置与速度精准控制。"],
      ["过程记录", "工艺数据记录支持质量追溯。"],
    ],
    outcomes: ["满足严苛工艺要求", "质量数据可追溯", "重载工况稳定运行"],
  },
  "composite-board": {
    headline: "保护复合层质量的低损伤加工方案",
    description: [
      "金属复合板由不同材料层结合而成，在校平和成形过程中需要兼顾平整度、复合界面质量和表面保护。",
      "EZHONG 根据复合层厚度比、材料强度和表面要求，设计合适的辊系、压下参数和保护措施，降低分层与表面损伤风险。",
    ],
    challenges: [
      ["表面保护", "特殊辊面与工艺参数减少表面压痕。"],
      ["应力均衡", "多辊精准校平降低复合板翘曲。"],
      ["界面质量", "控制变形量，降低分层风险。"],
    ],
    outcomes: ["表面质量更好", "复合界面更安全", "平整度稳定提升"],
  },
};

export const orgNodes = [
  {
    id: "strategy",
    title: "集团战略与经营管理",
    en: "Group Strategy & Operations",
    image: "/images/company-profile.webp",
    summary: "负责集团发展战略、经营目标、组织协同与资源配置，统筹各业务中心高效运转。",
    duties: [
      "制定集团中长期发展战略",
      "统筹经营计划与资源配置",
      "建立跨部门项目管理机制",
      "推动国际市场与品牌发展",
    ],
    capabilities: ["战略规划", "经营管理", "风险控制", "组织协同"],
  },
  {
    id: "rd",
    title: "技术研发中心",
    en: "R&D Center",
    image: "/images/product-4roll.webp",
    summary: "聚焦板材成形工艺、整机结构、液压系统与数控技术，持续推动产品平台升级。",
    duties: ["新产品平台设计", "客户项目技术方案", "成形工艺研究", "数控与自动化开发"],
    capabilities: ["结构设计", "工艺仿真", "液压系统", "数字控制"],
  },
  {
    id: "manufacturing",
    title: "智能制造中心",
    en: "Smart Manufacturing Center",
    image: "/images/workshop-2.jpg",
    summary: "覆盖结构件焊接、精密机加工、整机装配与测试，保障重型设备稳定交付。",
    duties: ["生产计划执行", "重型结构件制造", "关键零部件加工", "整机装配与测试"],
    capabilities: ["焊接制造", "精密加工", "重型装配", "负载测试"],
  },
  {
    id: "quality",
    title: "质量管理中心",
    en: "Quality Management Center",
    image: "/images/workshop-7.jpg",
    summary: "建立从原材料、过程控制到出厂检验的质量管理体系，确保每台设备可追溯。",
    duties: ["原材料与外购件检验", "关键工序质量控制", "整机性能检测", "质量数据追溯"],
    capabilities: ["来料检验", "过程控制", "性能测试", "持续改进"],
  },
  {
    id: "supply-chain",
    title: "供应链中心",
    en: "Supply Chain Center",
    image: "/images/workshop-4.jpg",
    summary: "统筹核心部件采购、供应商管理、生产物料计划与全球物流协同。",
    duties: ["核心部件采购", "供应商评估与管理", "物料计划协同", "包装运输管理"],
    capabilities: ["战略采购", "供应商管理", "计划协同", "全球物流"],
  },
  {
    id: "global-service",
    title: "全球营销服务中心",
    en: "Global Sales & Service Center",
    image: "/images/hero.webp",
    summary: "连接全球客户，提供项目咨询、方案沟通、安装调试与全生命周期服务。",
    duties: ["市场开发与客户咨询", "项目方案与商务沟通", "安装调试与培训", "售后服务与技术支持"],
    capabilities: ["项目咨询", "国际业务", "现场服务", "远程支持"],
  },
];

export type Office = {
  id: string;
  country: string;
  name: string;
  title?: string;
  contact?: string;
  address?: string;
  mobile?: string;
  email?: string;
  request?: boolean;
  lat: number;
  lon: number;
};

export const offices: Office[] = [
  {
    id: "guangzhou",
    country: "China",
    name: "Guangzhou Office",
    title: "EZHONG International Trade Operation Center",
    address: "212 Baiyun Time Commercial Building, Jichang Road, Baiyun District, Guangzhou, China",
    mobile: "0086-13929593079",
    email: "sales@ezhonggroup.com",
    lat: 23.13,
    lon: 113.26,
  },
  {
    id: "wuhan",
    country: "China",
    name: "Wuhan Office",
    mobile: "0086-15608681130",
    email: "sales@ezhonggroup.com",
    lat: 30.59,
    lon: 114.31,
  },
  {
    id: "beijing",
    country: "China",
    name: "Beijing Office",
    mobile: "0086-18671110001",
    email: "sales@ezhonggroup.com",
    lat: 39.9,
    lon: 116.4,
  },
  {
    id: "europe",
    country: "Europe",
    name: "European Office",
    contact: "Mr. Ozgur Huneroz",
    email: "global@ezhonggroup.com",
    lat: 41.01,
    lon: 28.98,
  },
  {
    id: "germany",
    country: "Germany",
    name: "GER Office",
    contact: "Jiaxuan(KERO) Zou",
    request: true,
    lat: 51.16,
    lon: 10.45,
  },
  {
    id: "usa",
    country: "United States",
    name: "USA Office",
    contact: "Stephen Mok",
    request: true,
    lat: 39.83,
    lon: -98.58,
  },
  {
    id: "thailand",
    country: "Thailand",
    name: "THA Office",
    contact: "Swai Chaichanakol",
    request: true,
    lat: 13.75,
    lon: 100.5,
  },
  {
    id: "argentina",
    country: "Argentina",
    name: "ARG Office",
    contact: "Adrián Domé",
    request: true,
    lat: -34.6,
    lon: -58.38,
  },
];
