import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";

interface Article {
  title: string;
  url: string;
  platform: "qiita" | "zenn";
  likes?: number;
}

const QIITA_USERNAME = "Yuji181181";
const ZENN_USERNAME = "yuji181181";

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const [qiitaRes, zennRes] = await Promise.all([
          fetch(
            `https://qiita.com/api/v2/users/${QIITA_USERNAME}/items?page=1&per_page=100`,
          ),
          fetch(
            `https://zenn.dev/api/articles?username=${ZENN_USERNAME}&order=latest`,
          ),
        ]);

        const qiitaData: Array<{ title: string; url: string; likes_count: number }> = qiitaRes.ok ? await qiitaRes.json() : [];
        const zennData: { articles?: Array<{ title: string; path: string; liked_count?: number }> } = zennRes.ok ? await zennRes.json() : {};

        const qiitaArticles: Article[] = qiitaData.map((item) => ({
          title: item.title,
          url: item.url,
          platform: "qiita" as const,
          likes: item.likes_count,
        }));

        const zennArticles: Article[] = (zennData.articles || []).map(
          (item) => ({
            title: item.title,
            url: `https://zenn.dev${item.path}`,
            platform: "zenn" as const,
            likes: item.liked_count,
          }),
        );

        setArticles([...qiitaArticles, ...zennArticles]);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <section
      id="articles"
      className="section"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div className="container">
        <h2 className="section-title">技術記事</h2>
        <p className="section-subtitle">Tech Articles</p>

        {loading ? (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              color: "var(--color-text-secondary)",
            }}
          >
            読み込み中...
          </div>
        ) : articles.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              color: "var(--color-text-secondary)",
            }}
          >
            記事が見つかりませんでした。
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1rem",
            }}
          >
            {articles.map((article) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-card"
              >
                <div
                  className={`article-platform ${
                    article.platform === "qiita"
                      ? "article-platform-qiita"
                      : "article-platform-zenn"
                  }`}
                >
                  {article.platform === "qiita" ? (
                    <>
                      <SiQiita size={12} />
                      Qiita
                    </>
                  ) : (
                    <>
                      <SiZenn size={12} />
                      Zenn
                    </>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    marginBottom: "0.5rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {article.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.8rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {article.likes !== undefined && (
                    <span>❤️ {article.likes}</span>
                  )}
                  <FaExternalLinkAlt size={12} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
