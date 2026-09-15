import {
  FaGithub,
  FaXTwitter,
  FaEnvelope,
  FaPen,
  FaBookOpen,
} from "react-icons/fa6";

interface ContactLink {
  icon: typeof FaGithub;
  label: string;
  href: string;
  description: string;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Yuji181181",
    description: "プロジェクトやコードを確認できます",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    href: "https://x.com/a_su114514",
    description: "日頃のつぶやきを発信しています",
  },
  {
    icon: FaPen,
    label: "Qiita",
    href: "https://qiita.com/Yuji181181",
    description: "技術記事を投稿しています",
  },
  {
    icon: FaBookOpen,
    label: "Zenn",
    href: "https://zenn.dev/yuji181181",
    description: "インターンレポート等を投稿しています",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:hasegawa.iniad@gmail.com",
    description: "お問い合わせはこちらから",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: "640px" }}>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Contact
        </h2>
        <p className="section-subtitle" style={{ textAlign: "center" }}>
          お気軽にお問い合わせください
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {CONTACT_LINKS.map(({ icon: Icon, label, href, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={20} color="var(--color-primary)" />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "0.125rem",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
