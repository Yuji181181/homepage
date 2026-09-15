import { FaGithub, FaXTwitter, FaEnvelope, FaArrowDown } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/Yuji181181",
    label: "GitHub",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/a_su114514",
    label: "X (Twitter)",
  },
  {
    icon: FaEnvelope,
    href: "mailto:hasegawa.iniad@gmail.com",
    label: "Email",
  },
] as const;

const BADGES = ["フルスタックエンジニア", "機械学習エンジニア", "AIセキュリティエンジニア"];

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: "clamp(5rem, 12vw, 8rem)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Left: Text content */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--color-text)",
                marginBottom: "1rem",
              }}
            >
              Yuji
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                東洋大学 情報連携学部 (INIAD) 学部3年生。
              </p>
              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                ソフトウェアとデータサイエンスを専攻。
              </p>
              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                AIエンジニアとして、インターンや個人開発で技術力を磨いています。
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              {BADGES.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={
                    href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="btn btn-outline"
                  style={{ padding: "0.6rem 1rem" }}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: "3rem" }}>
              <a
                href="#experience"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  animation: "bounce 2s infinite",
                }}
              >
                <FaArrowDown size={16} />
                詳しく見る
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div
            style={{
              width: "clamp(200px, 25vw, 300px)",
              height: "clamp(200px, 25vw, 300px)",
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              flexShrink: 0,
            }}
          >
            <img
              src="/images/167530002.jpg"
              alt="Yuji"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
