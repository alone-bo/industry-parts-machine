import { useEffect, useMemo, useState } from "react";
import { Arrow, ContactBand, PageHero, SectionTitle } from "../components";
import { industries, productCategories, productDetails, productServices, products } from "../data";
import heroImage from "../assets/Auto_large_gantry_movable_robot_welding_system.png";

export default function ProductsPage() {
  const [category, setCategory] = useState("全部");
  const filtered = useMemo(
    () =>
      category === "全部" ? products : products.filter((product) => product.category === category),
    [category],
  );

  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="PRODUCTS & SERVICES"
        crumbs={["产品与服务"]}
        title={
          <>
            产品与服务
            <br />
            <em>为重型制造提供可靠装备</em>
          </>
        }
        copy="覆盖金属切削机床、铸造装备与冲压成套装备，并提供从方案咨询、安装调试到售后支持的全周期服务。"
      />
      <nav className="about-subnav category-subnav shell" aria-label="产品分类">
        {productCategories.map((item, index) => (
          <button
            className={category === item ? "active" : ""}
            key={item}
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item}
            <Arrow />
          </button>
        ))}
      </nav>
      <section className="catalog-section shell">
        <div className="product-rows">
          {filtered.map((product) => {
            const index = products.indexOf(product);
            const detail = productDetails[product.id];
            return (
              <article
                className={index % 2 ? "product-row reverse" : "product-row"}
                key={product.id}
              >
                <a
                  className="product-row-image"
                  href={`#/products/${product.id}`}
                  aria-label={`查看${product.name}详情`}
                >
                  <img src={product.image} alt={product.name} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </a>
                <div className="product-row-copy">
                  <span className="product-row-category">{product.category}</span>
                  <h2>
                    <a href={`#/products/${product.id}`}>{product.name}</a>
                  </h2>
                  <small>{product.en}</small>
                  <p>{product.summary}</p>
                  <ul className="product-row-highlights">
                    {detail.highlights.map(([title, copy]) => (
                      <li key={title}>
                        <b>{title}</b>
                        <span>{copy}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="product-row-actions">
                    <a className="primary-button" href={`#/products/${product.id}`}>
                      查看产品详情 <Arrow />
                    </a>
                    <a className="line-button" href="#/contact">
                      获取方案 <Arrow />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ServiceSection />
      <ContactBand />
    </>
  );
}

function ServiceSection({ id }: { id?: string }) {
  return (
    <section className="process-section" id={id}>
      <div className="shell">
        <SectionTitle
          eyebrow="SERVICE SUPPORT"
          copy="从项目规划到设备长期运行，EZHONG 为每一位客户提供清晰、可靠的服务支持。"
        >
          不止交付设备
          <br />
          更提供<strong>全周期服务</strong>
        </SectionTitle>
        <div className="process-grid">
          {productServices.map(([step, copy], index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              <h3>{step}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductDetailPage({ id }: { id: string }) {
  const product = products.find((item) => item.id === id);
  if (!product) {
    return (
      <section className="not-found shell">
        <span>404</span>
        <h1>产品不存在</h1>
        <a className="primary-button" href="#/products">
          返回产品与服务 <Arrow />
        </a>
      </section>
    );
  }
  const detail = productDetails[product.id];
  const relatedIndustries = industries
    .filter((industry) => industry.equipment.includes(product.id))
    .slice(0, 4);
  const related = products.filter((item) => item.id !== product.id);

  return (
    <>
      <section className="product-hero">
        <div className="product-hero-grid" />
        <div className="shell product-hero-inner">
          <div className="product-hero-copy">
            <div className="breadcrumbs">
              <a href="#/">首页</a>
              <a href="#/products">产品与服务</a>
              <span>{product.name}</span>
            </div>
            <div className="eyebrow light">
              <span />
              {product.category}
            </div>
            <h1>{product.name}</h1>
            <small>{product.en}</small>
            <p>{product.summary}</p>
            <div className="product-hero-actions">
              <a className="primary-button" href="#/contact">
                获取设备方案 <Arrow />
              </a>
              <button
                className="text-button"
                onClick={() =>
                  document
                    .getElementById("specs")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                查看技术参数 <Arrow />
              </button>
            </div>
          </div>
          <div className="product-hero-media">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      </section>
      <ProductAnchorNav />

      <section className="section shell service-overview" id="overview">
        <div className="product-overview-media">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <div className="eyebrow">
            <span />
            PRODUCT OVERVIEW
          </div>
          <h2>{detail.headline}</h2>
          {detail.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="product-highlights">
            {detail.highlights.map(([title, copy], index) => (
              <div key={title}>
                <span>0{index + 1}</span>
                <b>{title}</b>
                <small>{copy}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="spec-section" id="specs">
        <div className="shell spec-layout">
          <SectionTitle
            eyebrow="TECHNICAL DATA"
            copy="具体技术参数可根据工件规格、工艺要求和产能目标定制。"
          >
            技术参数
            <br />
            <strong>按需配置</strong>
          </SectionTitle>
          <dl className="spec-table">
            {product.specs.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
            <div>
              <dt>可选配置</dt>
              <dd>
                <span className="spec-tags">
                  {detail.configurations.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section shell" id="advantages">
        <SectionTitle
          eyebrow="KEY ADVANTAGES"
          copy="围绕效率、精度、可靠性和长期使用价值进行系统设计。"
        >
          为严苛工况
          <br />
          打造<strong>核心优势</strong>
        </SectionTitle>
        <div className="advantage-grid">
          {detail.advantages.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="shell">
          <SectionTitle eyebrow="WORKING PROCESS">
            清晰的作业流程
            <br />
            <strong>稳定的生产结果</strong>
          </SectionTitle>
          <div className="workflow-steps">
            {detail.workflow.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{step}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="applications">
        <SectionTitle eyebrow="APPLICATIONS">
          适用<strong>行业</strong>
        </SectionTitle>
        <div className="detail-industries">
          {relatedIndustries.map((industry) => (
            <a href={`#/applications?industry=${industry.id}`} key={industry.id}>
              <img src={industry.image} alt="" />
              <span>
                <small>{industry.en}</small>
                <b>{industry.cn}</b>
              </span>
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </section>

      <ServiceSection id="services" />

      <section className="related-products-section">
        <div className="shell">
          <h2>其他产品</h2>
          <div className="related-product-list">
            {related.map((item) => (
              <a href={`#/products/${item.id}`} key={item.id}>
                <span className="related-product-image">
                  <img src={item.image} alt="" />
                </span>
                <span>
                  <small>{item.category}</small>
                  <b>{item.name}</b>
                  <em>
                    查看详情 <Arrow />
                  </em>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

const productSections = [
  ["overview", "产品概述"],
  ["specs", "技术参数"],
  ["advantages", "核心优势"],
  ["workflow", "作业流程"],
  ["applications", "应用行业"],
  ["services", "服务支持"],
] as const;

function ProductAnchorNav() {
  const [active, setActive] = useState<string>(productSections[0][0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    productSections.forEach(([id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    setActive(id);
    const offset = window.matchMedia("(max-width: 820px)").matches ? 128 : 146;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  };

  return (
    <nav className="detail-anchor-nav sticky-section-nav shell" aria-label="产品详情目录">
      {productSections.map(([id, label], index) => (
        <button
          className={active === id ? "active" : ""}
          key={id}
          onClick={() => jumpTo(id)}
          aria-current={active === id ? "true" : undefined}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          {label}
        </button>
      ))}
    </nav>
  );
}
