import { useEffect, useRef, useState } from "react";
import { Arrow, Chevron, ContactBand, PageHero, SectionTitle } from "../components";
import aboutHeroImage from "../assets/pexels-vietnam-real-estate-1776646607-29289933.jpg";
import ezhouImage from "../assets/ezhou_city_17948034687812.png";
import dezhouImage from "../assets/shandongdezhou_city_17948035409980.png";
import strengthScaleImage from "../assets/Aging_blasting_painting_workshop.png";
import strengthCapabilityImage from "../assets/Thermal_aging_furnace_200T.png";
import strengthProcessImage from "../assets/automated_guided_vehicle.png";
import strengthTeamImage from "../assets/MAG_semi-automatic_welding_machines.png";
import rawMaterialImage from "../assets/Raw_material_control.png";
import weldingQualificationImage from "../assets/Welding_process_qualification.png";
import utReportImage from "../assets/UT_report.png";
import weldJointImage from "../assets/Weld_joint_details.png";
import weldInspectionImage from "../assets/Weld_inspection_ISO5817.png";
import ultrasonicTestImage from "../assets/Ultrasonic_test.png";
import { orgNodes } from "../data";
import { workshopCategories } from "../workshopData";

function ArchitectureContent() {
  return (
    <>
      <section className="section shell architecture-intro">
        <SectionTitle eyebrow="WHO WE ARE">
          以工程为核心的
          <br />
          <strong>重型装备企业</strong>
        </SectionTitle>
        <div>
          <p className="large-copy">
            EZHONG 始于 1958 年，总部位于湖北鄂州，长期专注于金属板材成形装备的研发、制造与服务。
          </p>
          <p>
            我们以集团统筹、专业中心协同的组织方式，打通客户需求、方案设计、制造交付与售后服务的全流程，让大型复杂项目在每个阶段都能被准确执行。
          </p>
        </div>
      </section>
      <section className="org-section">
        <div className="shell">
          <a className="org-top" href="#/about/architecture/strategy">
            <span>EZHONG GROUP</span>
            <b>集团战略与经营管理</b>
            <em>
              查看详情 <Arrow />
            </em>
          </a>
          <div className="org-line" />
          <div className="org-grid">
            {orgNodes.slice(1).map((node, index) => (
              <a href={`#/about/architecture/${node.id}`} key={node.id}>
                <span>0{index + 1}</span>
                <h3>{node.title}</h3>
                <p>{node.summary}</p>
                <em>
                  查看详情 <Arrow />
                </em>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell location-section">
        <SectionTitle eyebrow="OPERATING BASES">
          双基地布局
          <br />
          <strong>支撑规模化交付</strong>
        </SectionTitle>
        <div className="location-cards">
          <article className="location-card">
            <img src={ezhouImage} alt="湖北鄂州城市风貌" />
            <i className="location-overlay" />
            <span>HEADQUARTERS</span>
            <h3>湖北鄂州总部</h3>
            <p>NO.1, Sihai Avenue, Ezhou City, Hubei, China</p>
            <small>集团管理 · 研发设计 · 重型装备制造</small>
          </article>
          <article className="location-card">
            <img src={dezhouImage} alt="山东德州城市风貌" />
            <i className="location-overlay" />
            <span>MANUFACTURING BASE</span>
            <h3>山东德州制造基地</h3>
            <p>Digital FTY, Yucheng Dev. Zone, Dezhou, Shandong, China</p>
            <small>数字化制造 · 规模化生产 · 区域交付</small>
          </article>
        </div>
      </section>
    </>
  );
}

const strengthItems = [
  {
    icon: "scale",
    image: strengthScaleImage,
    label: "Production Scale",
    title: "专业生产各类焊接结构件",
    copy: "生产面积达 40,000㎡，年生产能力 7.2 万吨。",
    en: "We specialize in manufacturing a wide range of welded structural components. Our production area covers 40,000 m², with an annual production capacity of 72,000 tons.",
    stats: [
      ["40,000", "m²", "Production Area", "生产面积"],
      ["72,000", "Tons", "Annual Production Capacity", "年生产能力"],
    ],
  },
  {
    icon: "capability",
    image: strengthCapabilityImage,
    label: "Manufacturing Capability",
    title: "强大的制造能力",
    copy: "钢板厚度 1～430mm；单车最大起重 320 吨；最大焊后热处理尺寸 18 米。",
    en: "Our manufacturing capabilities include steel plate thicknesses ranging from 1 to 430 mm, a maximum lifting capacity of 320 tons per vehicle, and post-weld heat treatment for components up to 18 meters in dimension.",
    stats: [
      ["1–430", "mm", "Steel Plate Thickness", "钢板厚度"],
      ["320", "Tons", "Maximum Lifting Capacity", "单车最大起重"],
      ["18", "m", "Maximum Post-weld Heat Treatment Dimension", "最大焊后热处理尺寸"],
    ],
  },
  {
    icon: "process",
    image: strengthProcessImage,
    label: "End-to-end Production",
    title: "覆盖生产全流程",
    copy: "具备从原材料、生产制造到包装运输的全工序能力。",
    en: "We have comprehensive end-to-end capabilities covering the entire process, from raw materials and manufacturing to packaging and transportation.",
    stats: [],
  },
  {
    icon: "team",
    image: strengthTeamImage,
    label: "Professional Team",
    title: "专业人才团队",
    copy: "职工总计约 600 人，其中中、高级工程技术人员 60 余人，高级技师、技师 140 余人。",
    en: "Our workforce totals approximately 600 employees, including more than 60 mid- and senior-level engineering professionals and over 140 senior technicians and technicians.",
    stats: [
      ["600+", "", "Total Employees", "职工总数"],
      ["60+", "", "Mid- and Senior-level Engineering Professionals", "中、高级工程技术人员"],
      ["140+", "", "Senior Technicians and Technicians", "高级技师、技师"],
    ],
  },
];

const processSteps = [
  ["materials", "Raw Materials", "原材料"],
  ["manufacturing", "Manufacturing", "生产制造"],
  ["packaging", "Packaging", "包装"],
  ["transportation", "Transportation", "运输"],
];

const iconPaths: Record<string, string> = {
  scale: "M3 21h18M5 21V9l5 3V9l5 3V5h4v16M8 16h1m3 0h1m3 0h1",
  capability: "M4 20h16M7 20V8h10v12M12 8V3m-5 5 5-5 5 5M9.5 13h5M9.5 16h5",
  process: "M4 7h6v6H4zM14 11h6v6h-6zM10 10h2a2 2 0 0 1 2 2v2M7 13v4h7",
  team: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a2.5 2.5 0 1 0 0-5M3 20c.5-4 3-6 6-6s5.5 2 6 6m1-6c2.5.3 4.2 2.2 4.6 5",
  materials: "M4 8l8-4 8 4-8 4-8-4Zm0 4 8 4 8-4M4 16l8 4 8-4",
  manufacturing:
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1",
  packaging: "M4 8l8-4 8 4v8l-8 4-8-4V8Zm0 0 8 4 8-4M12 12v8",
  transportation:
    "M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
};

const LineIcon = ({ name }: { name: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={iconPaths[name]} />
  </svg>
);

function StrengthContent() {
  return (
    <section className="section shell strength-section">
      <div className="strength-cards">
        {strengthItems.map((item, index) => (
          <article className={`strength-card strength-card-${item.icon}`} key={item.title}>
            <img className="strength-bg" src={item.image} alt="" />
            <i className="strength-overlay" />
            <header>
              <span className="strength-icon">
                <LineIcon name={item.icon} />
              </span>
              <span>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {item.label}
              </span>
            </header>
            <h3>{item.title}</h3>
            <p className="strength-copy">{item.copy}</p>
            <p className="strength-en">{item.en}</p>
            {item.stats.length > 0 ? (
              <dl className={`strength-stats stats-${item.stats.length}`}>
                {item.stats.map(([value, unit, label, cn]) => (
                  <div key={label}>
                    <dt>
                      {value}
                      {unit && <small>{unit}</small>}
                    </dt>
                    <dd>
                      <b>{cn}</b>
                      <span>{label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <ol className="strength-process" aria-label="Raw Materials to Transportation">
                {processSteps.map(([icon, label, cn]) => (
                  <li key={label}>
                    <span>
                      <LineIcon name={icon} />
                    </span>
                    <b>{label}</b>
                    <small>{cn}</small>
                  </li>
                ))}
              </ol>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

const qualitySteps = [
  { cn: "原材料质量控制", en: "Raw Material Control", image: rawMaterialImage, fit: "photo" },
  {
    cn: "焊接工艺评定",
    en: "Welding Process Qualification",
    image: weldingQualificationImage,
    fit: "photo",
  },
  { cn: "超声检测报告", en: "UT Report", image: utReportImage, fit: "document" },
  { cn: "焊缝细节检查", en: "Weld Joint Details", image: weldJointImage, fit: "document" },
  {
    cn: "焊缝质量检测",
    en: "Weld Inspection – ISO 5817",
    image: weldInspectionImage,
    fit: "photo",
  },
  { cn: "超声波检测", en: "Ultrasonic Testing", image: ultrasonicTestImage, fit: "photo" },
];

function WorkshopContent() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const viewerRef = useRef<HTMLDivElement>(null);
  const category = workshopCategories[categoryIndex];
  const item = category.items[itemIndex];
  const pad = (value: number) => String(value).padStart(2, "0");

  const selectCategory = (index: number) => {
    if (index === categoryIndex) {
      setExpanded((current) => !current);
      return;
    }
    setCategoryIndex(index);
    setItemIndex(0);
    setExpanded(true);
  };

  const selectItem = (index: number) => {
    setItemIndex(index);
    if (window.matchMedia("(max-width: 820px)").matches) {
      viewerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const step = (direction: number) =>
    setItemIndex(
      (current) => (current + direction + category.items.length) % category.items.length,
    );

  return (
    <>
      <section className="section shell workshop-explorer-section">
        <div className="workshop-explorer">
          <aside className="workshop-nav" aria-label="车间及设备分类">
            {workshopCategories.map((group, index) => {
              const open = index === categoryIndex && expanded;
              return (
                <div
                  className={index === categoryIndex ? "workshop-group active" : "workshop-group"}
                  key={group.id}
                >
                  <button
                    className="workshop-category"
                    onClick={() => selectCategory(index)}
                    aria-expanded={open}
                    aria-controls={`workshop-items-${group.id}`}
                  >
                    <span className="workshop-category-number">{pad(index + 1)}</span>
                    <span className="workshop-category-title">
                      <b>{group.cn}</b>
                      <small>{group.en}</small>
                    </span>
                    <span className="workshop-category-count">{group.items.length}</span>
                    <Chevron />
                  </button>
                  {open && (
                    <ul className="workshop-items" id={`workshop-items-${group.id}`}>
                      {group.items.map((entry, entryIndex) => (
                        <li key={entry.file}>
                          <button
                            className={entryIndex === itemIndex ? "active" : ""}
                            onClick={() => selectItem(entryIndex)}
                            aria-current={entryIndex === itemIndex ? "true" : undefined}
                          >
                            <span>{pad(entryIndex + 1)}</span>
                            <span>
                              <b>{entry.en}</b>
                              <small>{entry.cn}</small>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </aside>
          <div className="workshop-viewer" ref={viewerRef}>
            <div className="workshop-viewer-image" key={`${category.id}-${itemIndex}`}>
              {item.image ? (
                <img src={item.image} alt={`${item.en}（${item.cn}）`} />
              ) : (
                <div className="image-pending" role="img" aria-label={`${item.en} 图片待上传`}>
                  <b>图片待上传</b>
                  <code>src/assets/{item.file}</code>
                </div>
              )}
              <span className="viewer-count">
                {pad(itemIndex + 1)} / {pad(category.items.length)}
              </span>
            </div>
            <div className="workshop-viewer-copy">
              <div>
                <span>
                  {category.en} · {category.cn}
                </span>
                <h3>{item.en}</h3>
                <h4>{item.cn}</h4>
                <p>XXXXXX</p>
              </div>
              <div className="viewer-controls">
                <button onClick={() => step(-1)} aria-label="上一张">
                  <Arrow />
                </button>
                <button onClick={() => step(1)} aria-label="下一张">
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quality-flow-section">
        <div className="shell">
          <SectionTitle
            eyebrow="MANUFACTURING FLOW"
            copy="从原材料进厂到焊缝无损检测，每一道关键工序都有可追溯的检验记录。"
          >
            标准化工序
            <br />
            <strong>保障稳定品质</strong>
          </SectionTitle>
          <ol className="quality-flow">
            {qualitySteps.map((step, index) => (
              <li key={step.en}>
                <span className="quality-node">{String(index + 1).padStart(2, "0")}</span>
                <figure>
                  <div className={`quality-image quality-image-${step.fit}`}>
                    <img src={step.image} alt={`${step.cn}（${step.en}）`} loading="lazy" />
                  </div>
                  <figcaption>
                    <b>{step.cn}</b>
                    <small>{step.en}</small>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export function OrgDetailPage({ id }: { id: string }) {
  const nodeIndex = orgNodes.findIndex((item) => item.id === id);
  const node = orgNodes[nodeIndex];
  if (!node) {
    return (
      <section className="not-found shell">
        <span>404</span>
        <h1>组织节点不存在</h1>
        <a className="primary-button" href="#/about/architecture">
          返回企业架构 <Arrow />
        </a>
      </section>
    );
  }
  const next = orgNodes[(nodeIndex + 1) % orgNodes.length];

  return (
    <>
      <PageHero
        image={node.image}
        eyebrow={node.en.toUpperCase()}
        crumbs={["关于 EZHONG", "企业架构", node.title]}
        title={
          <>
            {node.title}
            <br />
            <em>协同驱动高效交付</em>
          </>
        }
        copy={node.summary}
      />
      <section className="section shell org-detail-intro">
        <div className="org-detail-image">
          <img src={node.image} alt={node.title} />
        </div>
        <div>
          <div className="eyebrow">
            <span />
            ORGANIZATION NODE
          </div>
          <h2>{node.title}</h2>
          <p className="large-copy">{node.summary}</p>
          <p>
            作为 EZHONG 组织体系的重要组成部分，{node.title}
            与其他中心保持紧密协作，围绕客户项目建立清晰的职责分工、信息流转和质量责任，确保从需求到交付的每个环节都可执行、可追踪。
          </p>
          <a className="line-button" href="#/about/architecture">
            返回组织架构 <Arrow />
          </a>
        </div>
      </section>
      <section className="org-detail-section">
        <div className="shell org-detail-columns">
          <div>
            <h3>核心职责</h3>
            <ol>
              {node.duties.map((duty, index) => (
                <li key={duty}>
                  <span>0{index + 1}</span>
                  {duty}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3>关键能力</h3>
            <div className="capability-tags">
              {node.capabilities.map((capability) => (
                <span key={capability}>{capability}</span>
              ))}
            </div>
            <p>通过标准化流程与跨部门协同机制，持续提升响应速度、工程质量和客户满意度。</p>
          </div>
        </div>
      </section>
      <section className="section shell org-node-nav">
        <div>
          <span>其他组织节点</span>
          <div>
            {orgNodes
              .filter((item) => item.id !== node.id)
              .map((item) => (
                <a href={`#/about/architecture/${item.id}`} key={item.id}>
                  {item.title}
                </a>
              ))}
          </div>
        </div>
        <a className="primary-button" href={`#/about/architecture/${next.id}`}>
          下一个：{next.title} <Arrow />
        </a>
      </section>
      <ContactBand />
    </>
  );
}

const chapters = [
  {
    id: "architecture",
    number: "01",
    title: "企业架构",
    en: "Corporate Structure",
    Content: ArchitectureContent,
  },
  {
    id: "strength",
    number: "02",
    title: "公司实力",
    en: "Company Strength",
    Content: StrengthContent,
  },
  {
    id: "workshop",
    number: "03",
    title: "车间介绍",
    en: "Manufacturing Floor",
    Content: WorkshopContent,
  },
];

export function AboutPage({ section }: { section?: string }) {
  const [active, setActive] = useState(section ?? chapters[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const jumpTo = (id: string, behavior: ScrollBehavior = "smooth") => {
    const target = refs.current[id];
    if (!target) return;
    setActive(id);
    const offset = window.matchMedia("(max-width: 560px)").matches
      ? 136
      : window.matchMedia("(max-width: 820px)").matches
        ? 154
        : 158;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id.replace("about-", ""));
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    Object.values(refs.current).forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!section) return;
    const timer = window.setTimeout(() => jumpTo(section, "auto"), 60);
    return () => window.clearTimeout(timer);
  }, [section]);

  useEffect(() => {
    const onJump = (event: Event) => jumpTo((event as CustomEvent<string>).detail);
    window.addEventListener("ezhong:about-jump", onJump);
    return () => window.removeEventListener("ezhong:about-jump", onJump);
  }, []);

  return (
    <>
      <PageHero
        image={aboutHeroImage}
        imagePosition="58% center"
        eyebrow="ABOUT EZHONG"
        crumbs={["关于 EZHONG"]}
        title={
          <>
            六十余年专注
            <br />
            <em>只为把重器做精</em>
          </>
        }
        copy="从清晰的组织架构、完整的制造实力到专业化生产车间，全面了解 EZHONG 如何为全球客户交付可靠的重型金属成形装备。"
      />
      <div className="about-elevator-layout">
        <nav
          className="about-subnav about-section-nav sticky-section-nav shell"
          aria-label="关于 EZHONG 页面导航"
        >
          {chapters.map((chapter) => (
            <button
              className={active === chapter.id ? "active" : ""}
              key={chapter.id}
              onClick={() => jumpTo(chapter.id)}
              aria-current={active === chapter.id ? "true" : undefined}
            >
              <span>{chapter.number}</span>
              {chapter.title}
              <Arrow />
            </button>
          ))}
        </nav>
        {chapters.map(({ id, number, title, en, Content }) => (
          <section
            className={`about-chapter about-chapter-${id}`}
            id={`about-${id}`}
            key={id}
            ref={(node) => {
              refs.current[id] = node;
            }}
          >
            <div className="chapter-heading shell">
              <span>{number}</span>
              <div>
                <small>{en}</small>
                <h2>{title}</h2>
              </div>
            </div>
            <Content />
          </section>
        ))}
      </div>
      <ContactBand />
    </>
  );
}
