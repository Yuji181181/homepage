export interface Article {
  title: string;
  url: string;
  date: string;
  tags: string[];
  summary: string;
  image: string;
}

const TECH_IMAGES = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&h=400&fit=crop",
];

export const QIITA_ARTICLES: Article[] = [
  {
    title: "AIと個人情報保護",
    url: "https://qiita.com/Yuji181181/items/...",
    date: "2025/...",
    tags: ["AI", "個人情報保護", "法律"],
    summary: "近年、生成AIの普及により、業務や開発でAIを利用する機会が激増しています。しかし、AIを扱う上で避けて通れないのが「個人情報保護」の観点です。",
    image: TECH_IMAGES[0],
  },
  {
    title: "AIと人間中心主義の崩壊",
    url: "https://qiita.com/Yuji181181/items/...",
    date: "2025/...",
    tags: ["AI", "倫理", "社会"],
    summary: "AI技術の発展により、人間中心主義の考え方が変化を迎えています。テクノロジーと人間の関係性を再考する必要があります。",
    image: TECH_IMAGES[1],
  },
  {
    title: "内閣府の「プリンシプル・コード（仮称）（案）」についての考察",
    url: "https://qiita.com/Yuji181181/items/...",
    date: "2025/...",
    tags: ["AI", "ガバナンス", "政策"],
    summary: "内閣府が公開した「プリンシプル・コード（案）」について、AI倫理の観点から考察します。",
    image: TECH_IMAGES[2],
  },
  {
    title: "AIと著作権の基本",
    url: "https://qiita.com/Yuji181181/items/...",
    date: "2025/...",
    tags: ["AI", "著作権", "法律"],
    summary: "AIが生成したコンテンツの著作権はどうなるのか？AIと著作権の基本的な考え方を整理します。",
    image: TECH_IMAGES[3],
  },
  {
    title: "LLM推論入門",
    url: "https://qiita.com/Yuji181181/items/...",
    date: "2025/...",
    tags: ["LLM", "AI", "推論"],
    summary: "大規模言語モデル（LLM）の推論メカニズムについて、基礎から解説します。",
    image: TECH_IMAGES[4],
  },
  {
    title: "言語モデルの歴史",
    url: "https://qiita.com/Yuji181181/items/...",
    date: "2025/...",
    tags: ["LLM", "AI", "NLP"],
    summary: "言語モデルの発展の歴史を振り返り、現代のLLMに至るまでの流れを解説します。",
    image: TECH_IMAGES[5],
  },
  {
    title: "AIガバナンス入門",
    url: "https://qiita.com/Yuji181181/items/...",
    date: "2025/...",
    tags: ["AI", "ガバナンス", "規制"],
    summary: "AIガバナンスの基本概念と、企業が遵守すべきルールについて解説します。",
    image: TECH_IMAGES[0],
  },
  {
    title: "AI倫理入門",
    url: "https://qiita.com/Yuji181181/items/...",
    date: "2025/...",
    tags: ["AI", "倫理", "社会"],
    summary: "AI倫理の基本原則と、開発者が意識すべき倫理的課題について解説します。",
    image: TECH_IMAGES[1],
  },
];

export const ZENN_ARTICLES: Article[] = [
  {
    title: "セキュリティ・キャンプ受かってみた",
    url: "https://zenn.dev/yuji181181/articles/7f69c70da0b0ed",
    date: "2026/02/21",
    tags: ["セキュリティ", "イベント"],
    summary: "IPAが主催するセキュリティ・キャンプ2026コネクト AIレッドチーミングクラスに合格した体験記です。応募課題の作成過程や選考の様子をまとめています。",
    image: TECH_IMAGES[2],
  },
  {
    title: "日本学術会議のシンポジウムに行ってみた",
    url: "https://zenn.dev/yuji181181/articles/495f4e0b3343ef",
    date: "2026/02/21",
    tags: ["統計学", "シンポジウム"],
    summary: "日本学術会議のシンポジウム「統計学の役割の再考」に参加したレポートです。",
    image: TECH_IMAGES[3],
  },
];
