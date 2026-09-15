interface Internship {
  date: string;
  title: string;
  description: string;
}

const INTERNSHIPS: Internship[] = [
  {
    date: "2025年12月〜",
    title: "NAXA",
    description: "詳細は後で追加",
  },
  {
    date: "2025年10月〜12月",
    title: "Medley",
    description: "詳細は後で追加",
  },
  {
    date: "2025年9月〜10月",
    title: "3-shake",
    description: "詳細は後で追加",
  },
  {
    date: "2025年8月〜9月",
    title: "Sansan",
    description: "詳細は後で追加",
  },
  {
    date: "2025年7月〜8月",
    title: "kubell",
    description: "詳細は後で追加",
  },
  {
    date: "2025年6月〜7月",
    title: "DMM.com",
    description: "詳細は後で追加",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
      <div className="container">
        <h2 className="section-title">インターン</h2>
        <p className="section-subtitle">Internship</p>

        <div className="timeline">
          {INTERNSHIPS.map((intern) => (
            <div key={intern.title} className="timeline-item">
              <div className="timeline-date">{intern.date}</div>
              <div className="timeline-title">{intern.title}</div>
              <div className="timeline-desc">{intern.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
