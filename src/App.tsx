import { useEffect, useMemo, useState } from "react";
import { Footer, Header } from "./components";
import { AboutPage, OrgDetailPage } from "./pages/AboutPages";
import ApplicationsPage from "./pages/ApplicationsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { NewsDetailPage, NewsPage } from "./pages/NewsPages";
import ProductsPage, { ProductDetailPage } from "./pages/ProductsPage";

const titles: Record<string, string> = {
  "/": "首页",
  "/products": "产品与服务",
  "/applications": "应用领域",
  "/about": "关于 EZHONG",
  "/about/architecture": "企业架构",
  "/about/strength": "公司实力",
  "/about/workshop": "车间介绍",
  "/news": "新闻中心",
  "/contact": "联系我们",
};

const readHash = () => window.location.hash.slice(1) || "/";

export default function App() {
  const [hash, setHash] = useState(readHash);
  const [rawPath, queryString = ""] = hash.split("?");
  const path = rawPath || "/";
  const query = useMemo(() => new URLSearchParams(queryString), [queryString]);

  useEffect(() => {
    const onHashChange = () => setHash(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (!["/about/architecture", "/about/strength", "/about/workshop"].includes(path))
      window.scrollTo({ top: 0, behavior: "instant" });
    const pageTitle = path.startsWith("/news/")
      ? "新闻详情"
      : path.startsWith("/products/")
        ? "产品详情"
        : path.startsWith("/about/architecture/")
          ? "组织详情"
          : (titles[path] ?? "页面未找到");
    document.title = `${pageTitle} | EZHONG Heavy Machinery`;
  }, [path]);

  let page;
  if (path === "/") page = <HomePage />;
  else if (path === "/products") page = <ProductsPage />;
  else if (path.startsWith("/products/"))
    page = <ProductDetailPage id={decodeURIComponent(path.slice(10))} />;
  else if (path === "/applications") page = <ApplicationsPage query={query} />;
  else if (path === "/about") page = <AboutPage />;
  else if (["/about/architecture", "/about/strength", "/about/workshop"].includes(path))
    page = <AboutPage key="about" section={path.slice(7)} />;
  else if (path.startsWith("/about/architecture/"))
    page = <OrgDetailPage id={decodeURIComponent(path.slice(20))} />;
  else if (path === "/news") page = <NewsPage />;
  else if (path.startsWith("/news/"))
    page = <NewsDetailPage id={decodeURIComponent(path.slice(6))} />;
  else if (path === "/contact") page = <ContactPage />;
  else
    page = (
      <section className="not-found shell">
        <span>404</span>
        <h1>页面未找到</h1>
        <a className="primary-button" href="#/">
          返回首页
        </a>
      </section>
    );

  return (
    <>
      <Header path={path} />
      <main>{page}</main>
      <Footer />
    </>
  );
}
