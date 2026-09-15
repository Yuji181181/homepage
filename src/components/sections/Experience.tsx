interface Internship {
  company: string;
  period: string;
  description: string;
}

const INTERNSHIPS: Internship[] = [
  {
    company: "NAXA",
    period: "長期インターン",
    description: "詳細は後で追加",
  },
  {
    company: "Medley",
    period: "",
    description: "詳細は後で追加",
  },
  {
    company: "3-shake",
    period: "",
    description: "詳細は後で追加",
  },
  {
    company: "Sansan",
    period: "",
    description: "詳細は後で追加",
  },
  {
    company: "kubell",
    period: "",
    description: "詳細は後で追加",
  },
  {
    company: "DMM.com",
    period: "",
    description: "詳細は後で追加",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">実務経験</h2>
        <p className="section-subtitle">Work Experience</p>

        <div className="timeline">
          {INTERNSHIPS.map((intern) => (
            <div key={intern.company} className="timeline-item">
              <div className="timeline-date">{intern.period}</div>
              <div className="timeline-company">{intern.company}</div>
              <div className="timeline-desc">{intern.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
