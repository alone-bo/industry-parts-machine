import { useEffect, useState, type ReactNode } from "react";

export const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14m-5-5 5 5-5 5"} />
  </svg>
);

export const Chevron = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="m6 8 4 4 4-4" />
  </svg>
);

export const Close = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Logo = () => (
  <a className="logo" href="#/" aria-label="EZHONG 首页">
    <span className="logo-mark">
      <i />
      <i />
      <i />
    </span>
    <span className="logo-copy">
      <b>EZHONG</b>
      <small>HEAVY MACHINERY</small>
    </span>
  </a>
);

export const jumpWithinAbout = (event: { preventDefault: () => void }, section: string) => {
  if (window.location.hash !== `#/about/${section}`) return;
  event.preventDefault();
  window.dispatchEvent(new CustomEvent("ezhong:about-jump", { detail: section }));
};

export function Header({ path }: { path: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [path]);

  const active = (route: string) =>
    route === "/" ? path === "/" : path === route || path.startsWith(`${route}/`);

  return (
    <header className={scrolled || menuOpen ? "site-header scrolled" : "site-header"}>
      <div className="header-inner">
        <Logo />
        <nav
          className={menuOpen ? "main-nav open" : "main-nav"}
          aria-label="主导航"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
          }}
        >
          <a className={active("/") ? "active" : ""} href="#/">
            首页
          </a>
          <a className={active("/products") ? "active" : ""} href="#/products">
            产品与服务
          </a>
          <a className={active("/applications") ? "active" : ""} href="#/applications">
            应用领域
          </a>
          <div className={active("/about") ? "nav-dropdown active" : "nav-dropdown"}>
            <a href="#/about">
              关于 <Chevron />
            </a>
            <div className="dropdown-panel">
              <a
                href="#/about/architecture"
                onClick={(event) => jumpWithinAbout(event, "architecture")}
              >
                企业架构
              </a>
              <a href="#/about/strength" onClick={(event) => jumpWithinAbout(event, "strength")}>
                公司实力
              </a>
              <a href="#/about/workshop" onClick={(event) => jumpWithinAbout(event, "workshop")}>
                车间介绍
              </a>
            </div>
          </div>
          <a className={active("/news") ? "active" : ""} href="#/news">
            新闻
          </a>
          <a className={active("/contact") ? "active" : ""} href="#/contact">
            联系
          </a>
        </nav>
        <div className="header-actions">
          <button className="language" aria-label="当前语言：中文">
            CN <Chevron />
          </button>
          <a className="header-quote" href="#/contact">
            获取方案 <Arrow />
          </a>
          <button
            className={menuOpen ? "menu-button active" : "menu-button"}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imagePosition = "center",
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  image: string;
  imagePosition?: string;
  crumbs: string[];
}) {
  return (
    <section className="page-hero">
      <img src={image} alt="" style={{ objectPosition: imagePosition }} />
      <div className="page-hero-overlay" />
      <div className="shell page-hero-content">
        <div className="breadcrumbs">
          <a href="#/">首页</a>
          {crumbs.map((crumb) => (
            <span key={crumb}>{crumb}</span>
          ))}
        </div>
        <div className="eyebrow light">
          <span />
          {eyebrow}
        </div>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  children,
  copy,
}: {
  eyebrow: string;
  children: ReactNode;
  copy?: string;
}) {
  return (
    <div className="section-title">
      <div>
        <div className="eyebrow">
          <span />
          {eyebrow}
        </div>
        <h2>{children}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="contact">
      <div className="shell contact-inner">
        <div>
          <span>START YOUR PROJECT</span>
          <h2>
            下一个重型工程
            <br />
            从一次专业对话开始
          </h2>
        </div>
        <a href="#/contact" className="contact-link">
          联系我们的工程团队 <Arrow />
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell footer-top">
        <div className="footer-brand">
          <Logo />
          <p>专注重型金属成形设备与系统解决方案</p>
          <a href="mailto:sales@ezhongmachine.com">sales@ezhongmachine.com</a>
          <a href="tel:+8613929593079">+86 139 2959 3079</a>
        </div>
        <div className="footer-links">
          <div>
            <b>产品与服务</b>
            <a href="#/products/cnc-gantry-boring-milling">数控龙门镗铣床</a>
            <a href="#/products/j2-sand-mixer">J2系列移动式双臂连续混砂机</a>
            <a href="#/products/high-speed-stamping-line">大型高速自动化冲压生产线</a>
            <a href="#/products">服务支持</a>
          </div>
          <div>
            <b>应用领域</b>
            <a href="#/applications?industry=wind-towers">风电塔筒</a>
            <a href="#/applications?industry=pressure-vessel">压力容器</a>
            <a href="#/applications?industry=marine">船舶装备</a>
            <a href="#/applications?industry=nuclear">核电装备</a>
          </div>
          <div>
            <b>关于 EZHONG</b>
            <a
              href="#/about/architecture"
              onClick={(event) => jumpWithinAbout(event, "architecture")}
            >
              企业架构
            </a>
            <a href="#/about/strength" onClick={(event) => jumpWithinAbout(event, "strength")}>
              公司实力
            </a>
            <a href="#/about/workshop" onClick={(event) => jumpWithinAbout(event, "workshop")}>
              车间介绍
            </a>
            <a href="#/news">新闻中心</a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2025 EZHONG Heavy Machinery. All rights reserved.</span>
        <div>
          <a href="#/contact">隐私政策</a>
          <a href="#/contact">使用条款</a>
        </div>
      </div>
    </footer>
  );
}
