interface Internship {
  date: string;
  title: string;
  description: string;
}

const INTERNSHIPS: Internship[] = [
  {
    date: "長期",
    title: "NAXA",
    description: "詳細は後で追加",
  },
  {
    date: "",
    title: "Medley",
    description: "詳細は後で追加",
  },
  {
    date: "",
    title: "3-shake",
    description: "詳細は後で追加",
  },
  {
    date: "",
    title: "Sansan",
    description: "詳細は後で追加",
  },
  {
    date: "",
    title: "kubell",
    description: "詳細は後で追加",
  },
  {
    date: "",
    title: "DMM.com",
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
