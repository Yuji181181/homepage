import { useEffect, useState } from "react";
import { SiQiita, SiZenn } from "react-icons/si";
import { fetchArticles } from "@/server/articles";

interface Article {
  title: string;
  url: string;
  platform: "qiita" | "zenn";
  date: string;
  tags: string[];
  summary: string;
  image?: string;
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="article-card"
    >
      {article.image && (
        <div
          style={{
            width: "100%",
            height: "180px",
            borderRadius: "0.75rem",
            overflow: "hidden",
            marginBottom: "1rem",
          }}
        >
          <img
            src={article.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <div
        style={{
          fontSize: "0.8rem",
          color: "var(--color-text-secondary)",
          marginBottom: "0.5rem",
        }}
      >
        {article.date}
      </div>

      <h3
        style={{
          fontSize: "1rem",
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

      {article.summary && (
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
            marginBottom: "0.75rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.summary}
        </p>
      )}

      {article.tags.length > 0 && (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {article.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="badge"
              style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem" }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}

export default function Articles() {
  const [qiitaArticles, setQiitaArticles] = useState<Article[]>([]);
  const [zennArticles, setZennArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((data) => {
      setQiitaArticles(data.qiita);
      setZennArticles(data.zenn);
      setLoading(false);
    });
  }, []);

  return (
    <section id="articles" className="section">
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
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          >
            {/* Qiita Section */}
            {qiitaArticles.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <SiQiita size={24} color="#55c637" />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                    Qiita
                  </h3>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {qiitaArticles.map((article) => (
                    <ArticleCard key={article.url} article={article} />
                  ))}
                </div>
              </div>
            )}

            {/* Zenn Section */}
            {zennArticles.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <SiZenn size={24} color="#3ea8ff" />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                    Zenn
                  </h3>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {zennArticles.map((article) => (
                    <ArticleCard key={article.url} article={article} />
                  ))}
                </div>
              </div>
            )}

            {qiitaArticles.length === 0 && zennArticles.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                記事が見つかりませんでした。
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
