interface Internship {
  date: string;
  company: string;
  description: string;
}

const INTERNSHIPS: Internship[] = [
  {
    date: "長期",
    company: "NAXA",
    description: "詳細は後で追加",
  },
  {
    date: "",
    company: "Medley",
    description: "詳細は後で追加",
  },
  {
    date: "",
    company: "3-shake",
    description: "詳細は後で追加",
  },
  {
    date: "",
    company: "Sansan",
    description: "詳細は後で追加",
  },
  {
    date: "",
    company: "kubell",
    description: "詳細は後で追加",
  },
  {
    date: "",
    company: "DMM.com",
    description: "詳細は後で追加",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">インターン</h2>
        <p className="section-subtitle">Internship</p>

        <div className="timeline">
          {INTERNSHIPS.map((intern) => (
            <div key={intern.company} className="timeline-item">
              <div className="timeline-date">{intern.date}</div>
              <div className="timeline-title">{intern.company}</div>
              <div className="timeline-desc">{intern.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
