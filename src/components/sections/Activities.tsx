interface Activity {
  date: string;
  title: string;
  description: string;
}

const ACTIVITIES: Activity[] = [
  {
    date: "2025年3月",
    title: "統計検定2級 取得",
    description: "統計学の基礎知識を証明する資格を取得。",
  },
  {
    date: "2025年",
    title: "東京大学 松尾研 AI&半導体2025 修了",
    description: "AIと半導体に関するセミナーを修了。",
  },
  {
    date: "2025年",
    title: "東京大学 松尾研 LLM講座2025 修了",
    description: "大規模言語モデルの基礎を学ぶ講座を修了。",
  },
  {
    date: "2026年",
    title: "セキュリティ・キャンプ2026 コネクト AIレッドチーミングクラス 修了",
    description: "AIセキュリティとレッドチーミングを学ぶクラスを修了。",
  },
  {
    date: "2025年〜",
    title: "個人開発・OSS活動",
    description:
      "Next.jsテンプレート、LLMファインチューニング、AIエージェント開発など、幅広い技術領域で個人開発を継続。",
  },
];

export default function Activities() {
  return (
    <section
      id="activities"
      className="section"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div className="container">
        <h2 className="section-title">活動経歴</h2>
        <p className="section-subtitle">Activities</p>

        <div className="timeline">
          {ACTIVITIES.map((activity) => (
            <div key={activity.title} className="timeline-item">
              <div className="timeline-date">{activity.date}</div>
              <div className="timeline-title">{activity.title}</div>
              <div className="timeline-desc">{activity.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
