import { useMemo, useState } from "react";
import { Arrow, ContactBand, PageHero } from "../components";
import { news, newsCategories } from "../data";

export function NewsPage() {
  const [category, setCategory] = useState("全部");
  const [search, setSearch] = useState("");
  const filtered = useMemo(
    () =>
      news.filter(
        (item) =>
          (category === "全部" || item.category === category) &&
          `${item.title}${item.excerpt}`.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [category, search],
  );

  return (
    <>
      <PageHero
        image="/images/news-wind.webp"
        eyebrow="NEWS & INSIGHTS"
        crumbs={["新闻中心"]}
        title={
          <>
            EZHONG 动态
            <br />
            <em>见证工程前沿</em>
          </>
        }
        copy="了解 EZHONG 最新项目交付、技术观点、企业发展与全球服务实践。"
      />
      <section className="section shell">
        <div className="news-toolbar">
          <div className="filter-tabs">
            {newsCategories.map((item) => (
              <button
                className={category === item ? "active" : ""}
                key={item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="search-box">
            <span>搜索新闻</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="输入关键词"
            />
          </label>
        </div>
        {filtered.length ? (
          <div className="news-grid">
            {filtered.map((item, index) => (
              <a
                className={index === 0 ? "news-card featured" : "news-card"}
                href={`#/news/${item.id}`}
                key={item.id}
              >
                <div>
                  <img src={item.image} alt="" />
                </div>
                <span>
                  <small>
                    {item.date} · {item.category}
                  </small>
                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>
                  <b>
                    阅读全文 <Arrow />
                  </b>
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>没有找到相关新闻</h2>
            <button
              className="line-button"
              onClick={() => {
                setSearch("");
                setCategory("全部");
              }}
            >
              清除筛选 <Arrow />
            </button>
          </div>
        )}
      </section>
      <ContactBand />
    </>
  );
}

export function NewsDetailPage({ id }: { id: string }) {
  const article = news.find((item) => item.id === id);
  if (!article) {
    return (
      <section className="not-found shell">
        <span>404</span>
        <h1>文章不存在</h1>
        <a className="primary-button" href="#/news">
          返回新闻中心 <Arrow />
        </a>
      </section>
    );
  }
  const related = news.filter((item) => item.id !== article.id).slice(0, 3);
  return (
    <>
      <article>
        <header className="article-hero">
          <img src={article.image} alt="" />
          <div className="page-hero-overlay" />
          <div className="shell article-hero-content">
            <a href="#/news">返回新闻中心</a>
            <span>
              {article.date} · {article.category}
            </span>
            <h1>{article.title}</h1>
          </div>
        </header>
        <div className="article-body shell">
          <aside>
            <span>分类</span>
            <b>{article.category}</b>
            <span>发布日期</span>
            <b>{article.date}</b>
          </aside>
          <div>
            <p className="article-lead">{article.excerpt}</p>
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a className="primary-button" href="#/contact">
              咨询 EZHONG 工程团队 <Arrow />
            </a>
          </div>
        </div>
      </article>
      <section className="related-news section">
        <div className="shell">
          <h2>相关新闻</h2>
          <div className="related-grid">
            {related.map((item) => (
              <a href={`#/news/${item.id}`} key={item.id}>
                <img src={item.image} alt="" />
                <small>{item.date}</small>
                <h3>{item.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
