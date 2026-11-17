import { useEffect, useRef, useState } from "react";
import { Arrow, ContactBand, PageHero } from "../components";
import { industries, industryDetails, products } from "../data";

export default function ApplicationsPage({ query }: { query: URLSearchParams }) {
  const [activeId, setActiveId] = useState(industries[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible[0]) setActiveId(visible[0].target.id.replace("industry-", ""));
      },
      { rootMargin: "-38% 0px -52% 0px" },
    );
    Object.values(sectionRefs.current).forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = query.get("industry");
    if (!id || !sectionRefs.current[id]) return;
    const timer = window.setTimeout(() => scrollToIndustry(id, "auto"), 80);
    return () => window.clearTimeout(timer);
  }, [query]);

  const scrollToIndustry = (id: string, behavior: ScrollBehavior = "smooth") => {
    const section = sectionRefs.current[id];
    if (!section) return;
    setActiveId(id);
    window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 105, behavior });
  };

  const activeIndex = industries.findIndex((item) => item.id === activeId);

  return (
    <>
      <PageHero
        image="/images/app-wind.webp"
        eyebrow="INDUSTRY SOLUTIONS"
        crumbs={["应用领域"]}
        title={
          <>
            深入关键行业
            <br />
            <em>理解每一种成形挑战</em>
          </>
        }
        copy="从基础材料到核电装备，EZHONG 将行业工艺经验转化为可落地的设备配置与生产方案。"
      />
      <section className="section shell industry-layout">
        <aside className="industry-list" aria-label="应用领域列表">
          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {industries.length} INDUSTRIES
          </span>
          <i
            className="industry-progress"
            style={{ transform: `scaleX(${(activeIndex + 1) / industries.length})` }}
          />
          {industries.map((item, index) => (
            <button
              className={item.id === activeId ? "active" : ""}
              key={item.id}
              onClick={() => scrollToIndustry(item.id)}
            >
              <small>{String(index + 1).padStart(2, "0")}</small>
              <b>{item.cn}</b>
              <em>{item.en}</em>
            </button>
          ))}
        </aside>
        <div className="industry-stack">
          {industries.map((industry, index) => {
            const detail = industryDetails[industry.id];
            return (
              <article
                className={industry.id === activeId ? "industry-detail active" : "industry-detail"}
                id={`industry-${industry.id}`}
                key={industry.id}
                ref={(node) => {
                  sectionRefs.current[industry.id] = node;
                }}
              >
                <div className="industry-image">
                  <img src={industry.image} alt={industry.cn} />
                  <div>
                    <span>
                      {String(index + 1).padStart(2, "0")} · {industry.en}
                    </span>
                    <h2>{industry.cn}</h2>
                  </div>
                </div>
                <div className="industry-info">
                  <h3 className="industry-headline">{detail.headline}</h3>
                  <div className="industry-description">
                    {detail.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="needs-grid">
                    {detail.challenges.map(([title, copy], challengeIndex) => (
                      <div key={title}>
                        <span>挑战 0{challengeIndex + 1}</span>
                        <b>{title}</b>
                        <p>{copy}</p>
                      </div>
                    ))}
                  </div>
                  <div className="industry-bottom">
                    <div>
                      <h4>方案价值</h4>
                      <ul>
                        {detail.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>推荐设备</h4>
                      <div className="recommended-products">
                        {industry.equipment.map((id) => {
                          const product = products.find((item) => item.id === id);
                          if (!product) return null;
                          return (
                            <a href={`#/products/${product.id}`} key={product.id}>
                              <img src={product.image} alt="" />
                              <span>
                                <b>{product.name}</b>
                                <small>{product.category}</small>
                              </span>
                              <Arrow />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
