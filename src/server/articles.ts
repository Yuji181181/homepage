import { createServerFn } from "@tanstack/react-start";

const QIITA_USERNAME = "Yuji181181";
const ZENN_USERNAME = "yuji181181";

interface Article {
  title: string;
  url: string;
  platform: "qiita" | "zenn";
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

function extractTextFromHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const fetchArticles = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ qiita: Article[]; zenn: Article[] }> => {
    try {
      const [qiitaRes, zennRes] = await Promise.all([
        fetch(
          `https://qiita.com/api/v2/users/${QIITA_USERNAME}/items?page=1&per_page=100`,
        ),
        fetch(
          `https://zenn.dev/api/articles?username=${ZENN_USERNAME}&order=latest`,
        ),
      ]);

      const qiitaData: Array<{
        title: string;
        url: string;
        created_at: string;
        tags: Array<{ name: string }>;
        body: string;
      }> = qiitaRes.ok ? await qiitaRes.json() : [];

      const zennData: {
        articles?: Array<{
          title: string;
          slug: string;
          path: string;
          published_at: string;
        }>;
      } = zennRes.ok ? await zennRes.json() : {};

      const qiitaArticles: Article[] = qiitaData.map((item, index) => ({
        title: item.title,
        url: item.url,
        platform: "qiita" as const,
        date: item.created_at.split("T")[0].replace(/-/g, "/"),
        tags: item.tags.map((t) => t.name),
        summary:
          item.body
            .substring(0, 150)
            .replace(/[#*\n\r]/g, "")
            .trim() + "...",
        image: TECH_IMAGES[index % TECH_IMAGES.length],
      }));

      // Fetch Zenn article details for summaries
      const zennArticles: Article[] = await Promise.all(
        (zennData.articles || []).map(async (item, index) => {
          let summary = "";
          try {
            const detailRes = await fetch(
              `https://zenn.dev/api/articles/${item.slug}`,
            );
            if (detailRes.ok) {
              const detail = await detailRes.json();
              const bodyHtml = detail.article?.body_html || "";
              const bodyText = extractTextFromHtml(bodyHtml);
              if (bodyText.length > 0) {
                summary = bodyText.substring(0, 150).trim() + "...";
              }
            }
          } catch {
            summary = "";
          }

          return {
            title: item.title,
            url: `https://zenn.dev${item.path}`,
            platform: "zenn" as const,
            date: item.published_at.split("T")[0].replace(/-/g, "/"),
            tags: [],
            summary,
            image: TECH_IMAGES[(index + 3) % TECH_IMAGES.length],
          };
        }),
      );

      return { qiita: qiitaArticles, zenn: zennArticles };
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      return { qiita: [], zenn: [] };
    }
  },
);
