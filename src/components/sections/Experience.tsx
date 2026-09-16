interface Internship {
  date: string;
  company: string;
  description: string;
}

const INTERNSHIPS: Internship[] = [
  {
    date: "2025/9 ~ 2026/4",
    company: "NAXA株式会社（長期インターン）",
    description:
      "主に放送業界向けにAI字幕生成のプロダクトを開発。AI側は音声認識モデルやLLMを組み合わせたりチューニングなどを担当。ソフトウェア側はffmpegを用いた動画編集機能などを担当。その他に、ポイ活サイトのレコメンド、検索機能、案件を定期更新するスクレーパーの開発なども担当。",
  },
  {
    date: "2026/3",
    company: "株式会社メドレー",
    description:
      "医療業界の転職サイトのオペレーター向けソフトにAI機能の搭載",
  },
  {
    date: "2026/3",
    company: "株式会社3-shake",
    description:
      "SREのワークショップに参加。コンテナやk8sの講義、TDDの講義を受ける",
  },
  {
    date: "2026/8",
    company: "Sansan株式会社",
    description:
      "契約書管理SaaSのAIエージェントの検索機能を開発。Elasticsearchで全文検索、ベクトルを用いたハイブリッド検索機能の開発を担当。",
  },
  {
    date: "2026/9",
    company: "株式会社kubell",
    description:
      "DDDやQAの講義の受講、5日間のチーム開発",
  },
  {
    date: "2026/10 ~ 2026/11",
    company: "合同会社DMM.com",
    description: "",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      style={{ background: "rgba(255, 255, 255, 0.03)" }}
    >
      <div className="container">
        <h2 className="section-title">インターン</h2>
        <p className="section-subtitle">Internship</p>

        <div className="timeline">
          {INTERNSHIPS.map((intern) => (
            <div key={intern.company} className="timeline-item">
              <div className="timeline-date">{intern.date}</div>
              <div className="timeline-title">{intern.company}</div>
              {intern.description && (
                <div className="timeline-desc">{intern.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
