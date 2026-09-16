import { SiQiita, SiZenn } from "react-icons/si";
import { QIITA_ARTICLES, ZENN_ARTICLES, type Article } from "@/data/articles";

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="article-card"
    >
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
  return (
    <section id="articles" className="section">
      <div className="container">
        <h2 className="section-title">技術記事</h2>
        <p className="section-subtitle">Tech Articles</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {/* Qiita Section */}
          {QIITA_ARTICLES.length > 0 && (
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
                {QIITA_ARTICLES.map((article) => (
                  <ArticleCard key={article.url} article={article} />
                ))}
              </div>
            </div>
          )}

          {/* Zenn Section */}
          {ZENN_ARTICLES.length > 0 && (
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
                {ZENN_ARTICLES.map((article) => (
                  <ArticleCard key={article.url} article={article} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
