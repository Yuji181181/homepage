export default function About() {
  return (
    <section id="about" className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
      <div className="container">
        <h2 className="section-title">自己紹介</h2>
        <p className="section-subtitle">About Me</p>

        <div style={{ maxWidth: "640px" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-text-secondary)" }}>
            東洋大学 情報連携学部 (INIAD) でソフトウェアとデータサイエンスを専攻している学部3年生です。
            AIエンジニアとして、6社のインターンでの実務経験と、幅広い個人開発を通じて技術力を磨いています。
            大規模言語モデルのファインチューニングやAIエージェントの開発に興味があり、
            東京大学松尾研のセミナーやセキュリティ・キャンプなどで学びを深めています。
          </p>
        </div>
      </div>
    </section>
  );
}
