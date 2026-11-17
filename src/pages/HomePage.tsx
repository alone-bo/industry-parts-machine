import { useEffect, useState } from "react";
import { Arrow, ContactBand } from "../components";
import { industries, news, productDetails, products } from "../data";
import buildIndustryImg from "@/assets/pexels-vietnam-real-estate-1776646607-29289931.jpg"
const featuredProducts = products;

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [paused, setPaused] = useState(false);
  const goTo = (index: number) =>
    setActiveProduct((index + featuredProducts.length) % featuredProducts.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(
      () => setActiveProduct((current) => (current + 1) % featuredProducts.length),
      6000,
    );
    return () => window.clearTimeout(timer);
  }, [activeProduct, paused]);

  return (
    <>
      <section className="hero">
        <img className="hero-image" src="/images/hero.webp" alt="EZHONG 大型重型卷板设备" />
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-content shell">
          <div className="eyebrow light">
            <span />
            METAL FORMING SINCE 1958
          </div>
          <h1>
            塑造重器
            <br />
            <em>定义工业未来</em>
          </h1>
          <p>
            为全球重型制造提供高性能金属成形设备与系统解决方案，
            <br className="desktop-break" />
            从一张钢板，到一个时代的工程。
          </p>
          <div className="hero-buttons">
            <a className="primary-button" href="#/products">
              探索产品 <Arrow />
            </a>
            <a className="text-button" href="#/about">
              了解 EZHONG <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-bottom shell">
          <div className="hero-fact">
            <strong>66+</strong>
            <span>
              年重型装备
              <br />
              制造经验
            </span>
          </div>
          <div className="hero-fact">
            <strong>80+</strong>
            <span>
              产品出口
              <br />
              国家及地区
            </span>
          </div>
          <div className="scroll-cue">
            <span>SCROLL TO DISCOVER</span>
            <i />
          </div>
        </div>
      </section>

      <section className="build-section">
        <div className="shell">
          <div className="build-head">
            <div>
              <div className="eyebrow">
                <span />
                WHAT WE BUILD
              </div>
              <h2>
                不只是设备
                <br />
                更是面向未来的<strong>制造能力</strong>
              </h2>
            </div>
            <div className="build-head-side">
              <p>
                EZHONG
                专注于重型装备的研发与制造，以深厚的工程经验，将复杂工艺转化为稳定、高效、可持续的生产能力。
              </p>
              <a className="line-button" href="#/products">
                全部产品与服务 <Arrow />
              </a>
            </div>
          </div>

          <div
            className="build-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="EZHONG 产品轮播"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") goTo(activeProduct - 1);
              if (event.key === "ArrowRight") goTo(activeProduct + 1);
            }}
          >
            <div className="build-viewport">
              <div
                className="build-track"
                style={{ transform: `translateX(-${activeProduct * 100}%)` }}
              >
                {featuredProducts.map((item, index) => (
                  <article
                    className="build-slide"
                    key={item.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} / ${featuredProducts.length}：${item.name}`}
                    aria-hidden={index !== activeProduct}
                  >
                    <a
                      className="build-slide-media"
                      href={`#/products/${item.id}`}
                      tabIndex={index === activeProduct ? 0 : -1}
                      aria-label={`查看${item.name}详情`}
                    >
                      <img src={item.image} alt={item.name} />
                      <div className="build-feature">
                        <span className="build-feature-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                     
                      <span className="build-feature-tag">{item.category}</span>
                    </a>
                    <div className="build-slide-copy">
                      <small>{item.en}</small>
                      <h3>{item.name}</h3>
                      <p>{item.summary}</p>
                      <ul>
                        {productDetails[item.id].highlights.map(([title, copy]) => (
                          <li key={title}>
                            <b>{title}</b>
                            <span>{copy}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        className="primary-button"
                        href={`#/products/${item.id}`}
                        tabIndex={index === activeProduct ? 0 : -1}
                      >
                        查看产品详情 <Arrow />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="build-controls">
              <div className="build-dots" role="tablist" aria-label="选择产品">
                {featuredProducts.map((item, index) => (
                  <button
                    className={index === activeProduct ? "active" : ""}
                    key={item.id}
                    onClick={() => goTo(index)}
                    role="tab"
                    aria-selected={index === activeProduct}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <b>{item.name}</b>
                    <i>
                      <em
                        key={`${activeProduct}-${paused}`}
                        className={index === activeProduct && !paused ? "running" : ""}
                      />
                    </i>
                  </button>
                ))}
              </div>
              <div className="build-arrows">
                <span>
                  <b>{String(activeProduct + 1).padStart(2, "0")}</b> /{" "}
                  {String(featuredProducts.length).padStart(2, "0")}
                </span>
                <button onClick={() => goTo(activeProduct - 1)} aria-label="上一个产品">
                  <Arrow />
                </button>
                <button onClick={() => goTo(activeProduct + 1)} aria-label="下一个产品">
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="applications section">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span />
                INDUSTRIES WE SERVE
              </div>
              <h2>
                服务关键工业
                <br />
                <strong>支撑全球制造</strong>
              </h2>
            </div>
            <div className="section-head-side">
              <p>深入理解不同行业的材料、精度与效率要求，为关键制造场景提供专属解决方案。</p>
              <a href="#/applications">
                全部应用领域 <Arrow />
              </a>
            </div>
          </div>
          <div className="application-grid">
            {industries
              .filter((item) =>
                [
                  "automotive",
                  "pressure-vessel",
                  "steel-pipe",
                  "marine",
                  "engineering",
                  "nuclear",
                ].includes(item.id),
              )
              .map((item, index) => (
                <a
                  className="application-card"
                  href={`#/applications?industry=${item.id}`}
                  key={item.id}
                >
                  <img src={item.image} alt={item.cn} />
                  <div className="application-shade" />
                  <span className="app-number">0{index + 1}</span>
                  <div className="app-title">
                    <h3>{item.cn}</h3>
                    <p>{item.en}</p>
                  </div>
                  <span className="round-arrow">
                    <Arrow diagonal />
                  </span>
                </a>
              ))}
          </div>
          <div className="application-more">
            <span>更多领域</span>
            <p>Materials · Silos · Wind Towers · Composite Board</p>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="shell about-layout">
          <div className="about-image">
            <img src={buildIndustryImg} alt="EZHONG 现代化重型装备生产车间" />
            <div className="year-card">
              <span>EST.</span>
              <strong>1958</strong>
              <p>诞生于中国重型工业蓬勃发展的年代</p>
            </div>
          </div>
          <div className="about-content">
            <div className="eyebrow">
              <span />
              BUILT ON ENGINEERING
            </div>
            <h2>
              六十余年，
              <br />
              只为把<strong>重器做精</strong>
            </h2>
            <p className="about-lead">
              从鄂州走向世界，EZHONG 始终以工程创新为核心，以严苛制造为标准。
            </p>
            <p>
              我们拥有覆盖研发、铸造、精密加工、总装与测试的完整能力。从单机设备到整线交付，团队持续为客户降低制造难度，提升长期价值。
            </p>
            <div className="about-metrics">
              <div>
                <strong>120,000</strong>
                <span>㎡</span>
                <p>现代化制造基地</p>
              </div>
              <div>
                <strong>30+</strong>
                <span>项</span>
                <p>核心技术专利</p>
              </div>
            </div>
            <a className="dark-button" href="#/about/strength">
              了解企业实力 <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="statement">
        <img src="/images/steel-coils.jpg" alt="整齐排列的工业钢卷" />
        <div className="statement-overlay" />
        <div className="shell statement-content">
          <span>ENGINEERED FOR THE EXTREME</span>
          <h2>
            让每一次成形
            <br />
            都经得起时间检验
          </h2>
          <a href="#/contact">
            与工程师对话 <Arrow />
          </a>
        </div>
      </section>

      <section className="news section shell">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span />
              NEWS & INSIGHTS
            </div>
            <h2>
              EZHONG <strong>动态</strong>
            </h2>
          </div>
          <a className="all-news" href="#/news">
            查看全部新闻 <Arrow />
          </a>
        </div>
        <div className="news-list">
          <a href={`#/news/${news[0].id}`} className="featured-news">
            <div className="news-image">
              <img src={news[0].image} alt={news[0].title} />
              <span>{news[0].category}</span>
            </div>
            <div className="news-copy">
              <time>{news[0].date}</time>
              <h3>{news[0].title}</h3>
              <p>{news[0].excerpt}</p>
              <span className="round-arrow">
                <Arrow diagonal />
              </span>
            </div>
          </a>
          <div className="compact-news">
            {news.slice(1, 4).map((item) => (
              <a href={`#/news/${item.id}`} key={item.id}>
                <time>{item.date}</time>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
