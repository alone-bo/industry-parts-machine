import { useRef, useState, type DragEvent, type FormEvent } from "react";
import { Arrow, Close, PageHero } from "../components";
import { offices } from "../data";
import contactHeroImage from "../assets/pexels-ketut-subiyanto-4963437.jpg";

const emptyForm = { name: "", company: "", email: "", phone: "", country: "", message: "" };
const allowed = [
  "pdf",
  "dwg",
  "dxf",
  "step",
  "stp",
  "jpg",
  "jpeg",
  "png",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "zip",
];
const maxSize = 20 * 1024 * 1024;

const formatSize = (size: number) =>
  size > 1024 * 1024 ? `${(size / 1024 / 1024).toFixed(1)} MB` : `${Math.ceil(size / 1024)} KB`;

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [activeOffice, setActiveOffice] = useState(offices[0].id);
  const fileInput = useRef<HTMLInputElement>(null);
  const office = offices.find((item) => item.id === activeOffice) ?? offices[0];

  const update = (key: keyof typeof emptyForm, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  };

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const accepted: File[] = [];
    const rejected: string[] = [];
    Array.from(list).forEach((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (!allowed.includes(extension) || file.size > maxSize) rejected.push(file.name);
      else accepted.push(file);
    });
    setFiles((current) => {
      const merged = [...current];
      accepted.forEach((file) => {
        if (!merged.some((item) => item.name === file.name && item.size === file.size))
          merged.push(file);
      });
      return merged.slice(0, 5);
    });
    setErrors((current) => ({
      ...current,
      files: rejected.length
        ? `以下文件格式不支持或超过 20 MB：${rejected.join("、")}`
        : files.length + accepted.length > 5
          ? "最多上传 5 个文件"
          : "",
    }));
    if (fileInput.current) fileInput.current.value = "";
  };

  const onDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(false);
    addFiles(event.dataTransfer.files);
  };

  const requestContact = (name: string) => {
    update("message", `Request contact information for ${name}.`);
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "请输入联系人姓名";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "请输入有效邮箱";
    if (form.message.trim().length < 10) nextErrors.message = "请至少输入 10 个字符的需求说明";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const body = [
      `姓名：${form.name}`,
      `公司：${form.company}`,
      `邮箱：${form.email}`,
      `电话：${form.phone}`,
      `国家/地区：${form.country}`,
      `附件：${files.length ? files.map((file) => file.name).join(", ") : "无"}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:sales@ezhonggroup.com?subject=${encodeURIComponent(`EZHONG 项目咨询 - ${form.company || form.name}`)}&body=${encodeURIComponent(body)}`;
    setStatus(
      files.length
        ? "已为您打开邮件草稿。请在邮件中添加列表中的附件后发送。"
        : "已为您打开邮件客户端，请确认并发送询盘。",
    );
  };

  return (
    <>
      <PageHero
        image={contactHeroImage}
        imagePosition="62% center"
        eyebrow="CONTACT EZHONG"
        crumbs={["联系我们"]}
        title={
          <>
            与工程团队对话
            <br />
            <em>开启您的项目</em>
          </>
        }
        copy="告诉我们您的材料、工件与产能要求，EZHONG 将为您提供专业设备选型与解决方案。"
      />
      <section className="section shell contact-page">
        <div className="contact-info">
          <div className="eyebrow">
            <span />
            GET IN TOUCH
          </div>
          <h2>
            全球项目
            <br />
            <strong>专业响应</strong>
          </h2>
          <a href="mailto:sales@ezhonggroup.com">
            <span>销售邮箱</span>
            <b>sales@ezhonggroup.com</b>
          </a>
          <a href="tel:+8613929593079">
            <span>销售热线 / WhatsApp</span>
            <b>0086-13929593079</b>
          </a>
          <div>
            <span>国际贸易运营中心</span>
            <b>
              212 Baiyun Time Commercial Building, Jichang Road, Baiyun District, Guangzhou, China
            </b>
          </div>
          <div>
            <span>总部地址</span>
            <b>中国湖北省鄂州市四海大道 1 号</b>
          </div>
        </div>
        <form className="inquiry-form" id="inquiry-form" onSubmit={submit} noValidate>
          <div className="form-title">
            <span>项目询盘</span>
            <p>带 * 为必填项</p>
          </div>
          <label>
            <span>姓名 *</span>
            <input
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <small>{errors.name}</small>}
          </label>
          <label>
            <span>公司名称</span>
            <input
              value={form.company}
              onChange={(event) => update("company", event.target.value)}
            />
          </label>
          <label>
            <span>邮箱 *</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <small>{errors.email}</small>}
          </label>
          <label>
            <span>电话 / WhatsApp</span>
            <input value={form.phone} onChange={(event) => update("phone", event.target.value)} />
          </label>
          <label className="full">
            <span>国家 / 地区</span>
            <input
              value={form.country}
              onChange={(event) => update("country", event.target.value)}
            />
          </label>
          <div className="full upload-field">
            <span>上传文件</span>
            <label
              className={dragging ? "upload-zone dragging" : "upload-zone"}
              onDragOver={(event) => {
                event.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
            >
              <input
                ref={fileInput}
                type="file"
                multiple
                accept={allowed.map((item) => `.${item}`).join(",")}
                onChange={(event) => addFiles(event.target.files)}
              />
              <span className="upload-icon">
                <Arrow diagonal />
              </span>
              <b>拖放图纸或文件到这里，或点击选择</b>
              <small>
                支持 PDF、DWG、DXF、STEP、图片、Office、ZIP；单个文件不超过 20 MB，最多 5 个
              </small>
            </label>
            {errors.files && <small className="field-error">{errors.files}</small>}
            {files.length > 0 && (
              <ul className="file-list">
                {files.map((file) => (
                  <li key={`${file.name}-${file.size}`}>
                    <span>
                      <b>{file.name}</b>
                      <small>{formatSize(file.size)}</small>
                    </span>
                    <button
                      type="button"
                      onClick={() => setFiles((current) => current.filter((item) => item !== file))}
                      aria-label={`移除 ${file.name}`}
                    >
                      <Close />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <label className="full">
            <span>需求描述 *</span>
            <textarea
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              placeholder="请描述材料、板厚、宽度、成形直径、产能等要求"
            />
            {errors.message && <small>{errors.message}</small>}
          </label>
          <button className="primary-button" type="submit">
            发送询盘 <Arrow />
          </button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </section>

      <section className="sales-office-section">
        <div className="shell sales-office-layout">
          <div className="office-copy" key={office.id}>
            <div className="eyebrow">
              <span />
              SALES OFFICE
            </div>
            <h2>
              全球销售网络
              <br />
              <strong>就近响应您的项目</strong>
            </h2>
            <div className="office-card">
              <span>{office.country}</span>
              <h3>{office.name}</h3>
              {office.title && <p className="office-title">{office.title}</p>}
              {office.contact && <p className="office-person">{office.contact}</p>}
              <dl>
                {office.address && (
                  <div>
                    <dt>Add</dt>
                    <dd>{office.address}</dd>
                  </div>
                )}
                {office.mobile && (
                  <div>
                    <dt>Mobile</dt>
                    <dd>
                      <a href={`tel:${office.mobile.replace(/^00/, "+")}`}>{office.mobile}</a>
                    </dd>
                  </div>
                )}
                {office.email && (
                  <div>
                    <dt>E-mail</dt>
                    <dd>
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </dd>
                  </div>
                )}
              </dl>
              {office.request && (
                <div className="office-request">
                  <span>Request contact information:</span>
                  <button onClick={() => requestContact(office.name)}>
                    Contact Information <Arrow />
                  </button>
                </div>
              )}
            </div>
            <div className="office-switcher" aria-label="选择销售办事处">
              {offices.map((item) => (
                <button
                  className={item.id === office.id ? "active" : ""}
                  key={item.id}
                  onClick={() => setActiveOffice(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="world-map" aria-label="EZHONG Sales Office 世界地图">
            <img src="/images/world-map.svg" alt="" />
            {offices.map((item) => (
              <button
                className={item.id === office.id ? "map-pin active" : "map-pin"}
                key={item.id}
                style={{
                  left: `${((item.lon + 180) / 360) * 100}%`,
                  top: `${((85 - item.lat) / 145) * 100}%`,
                }}
                onClick={() => setActiveOffice(item.id)}
                aria-label={`${item.name}, ${item.country}`}
                aria-pressed={item.id === office.id}
              >
                <i />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
