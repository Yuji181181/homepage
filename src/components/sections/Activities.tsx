interface Activity {
  date: string;
  title: string;
  description: string;
}

const ACTIVITIES: Activity[] = [
  {
    date: "2025/3",
    title: "統計検定2級 取得",
    description: "",
  },
  {
    date: "2025/8",
    title: "東京大学 松尾研 AI&半導体2025 修了",
    description:
      "AIと半導体の講座を修了。半導体の基礎知識やCUDAを使ったGPUプログラミングなどを勉強。",
  },
  {
    date: "2025/12",
    title: "東京大学 松尾研 LLM講座2025 修了",
    description:
      "LLMの講座を修了。LLMの仕組みの勉強からAIエージェントの仕組みまで幅広く勉強。最後にはLLMの性能を上げるコンペに出場し、講座を修了する。",
  },
  {
    date: "2026/3",
    title: "セキュリティ・キャンプ2026 コネクト AIレッドチーミングクラス 修了",
    description:
      "IPAが主催する3泊4日でセキュリティを学ぶ合宿に参加。応募課題を提出し、高い倍率の選考を突破。参加したAIクラスでは、LLMやAIエージェントに関わるセキュリティを攻撃面、防御面の両方から学んだ。",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="section">
      <div className="container">
        <h2 className="section-title">活動経歴</h2>
        <p className="section-subtitle">Activities</p>

        <div className="timeline">
          {ACTIVITIES.map((activity) => (
            <div key={activity.title} className="timeline-item">
              <div className="timeline-date">{activity.date}</div>
              <div className="timeline-title">{activity.title}</div>
              {activity.description && (
                <div className="timeline-desc">{activity.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
