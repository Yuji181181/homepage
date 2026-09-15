import { FaGraduationCap, FaAward } from "react-icons/fa6";

const EDUCATION = {
  university: "東洋大学 情報連携学部 (INIAD)",
  year: "学部3年生",
  majors: ["ソフトウェア", "データサイエンス"],
};

const CERTIFICATIONS = [
  { name: "統計検定2級", date: "2025年3月" },
  { name: "東京大学 松尾研 AI&半導体2025", date: "修了" },
  { name: "東京大学 松尾研 LLM講座2025", date: "修了" },
  {
    name: "セキュリティ・キャンプ2026 コネクト AIレッドチーミングクラス",
    date: "修了",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="container">
        <h2 className="section-title">自己紹介</h2>
        <p className="section-subtitle">About Me</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Education Card */}
          <div className="card">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <FaGraduationCap size={24} color="var(--color-primary)" />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>学歴</h3>
            </div>
            <p style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.25rem" }}>
              {EDUCATION.university}
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", marginBottom: "0.75rem" }}>
              {EDUCATION.year}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {EDUCATION.majors.map((major) => (
                <span key={major} className="badge">
                  {major}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="card">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <FaAward size={24} color="var(--color-primary)" />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>資格・受講歴</h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert.name}
                  style={{
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--color-border-light)",
                    fontSize: "0.9rem",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{cert.name}</span>
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      color: "var(--color-text-secondary)",
                      fontSize: "0.8rem",
                    }}
                  >
                    {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
