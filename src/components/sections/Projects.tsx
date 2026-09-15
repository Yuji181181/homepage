import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiGo, SiPython } from "react-icons/si";

interface Project {
  title: string;
  description: string;
  icon: typeof SiTypescript;
  iconColor: string;
  tech: string[];
  github: string;
  link?: string;
}

const PROJECTS: Project[] = [
  {
    title: "MutualSwap",
    description:
      "相互にアンケート共有を回答する仕組みを実現した新しいプラットフォーム。",
    icon: SiTypescript,
    iconColor: "#3178c6",
    tech: ["TypeScript", "Next.js", "React"],
    github: "https://github.com/Yuji181181/MutualSwap",
  },
  {
    title: "AnifusionCanvas",
    description:
      "アニメ制作現場のDXをテーマにした、AI中割り支援デモアプリケーション。",
    icon: SiGo,
    iconColor: "#00add8",
    tech: ["Go", "AI", "Web App"],
    github: "https://github.com/Yuji181181/AnifusionCanvas",
  },
  {
    title: "Security-Demonstration",
    description:
      "LLMを統合したアプリケーションの脆弱性のレッドチーミングのデモ。",
    icon: SiPython,
    iconColor: "#3776ab",
    tech: ["Python", "LLM", "Security"],
    github:
      "https://github.com/Yuji181181/Security-Demonstration_for_Tax-Mate-AutoPay",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">制作物</h2>
        <p className="section-subtitle">Projects</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map((project) => (
            <div key={project.title} className="card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <project.icon size={28} color={project.iconColor} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                  {project.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginBottom: "1rem",
                }}
              >
                {project.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
                  >
                    <FaExternalLinkAlt size={14} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
