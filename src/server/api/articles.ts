const QIITA_USERNAME = "Yuji181181";
const ZENN_USERNAME = "yuji181181";

interface QiitaArticle {
  title: string;
  url: string;
  likes_count: number;
}

interface ZennArticle {
  title: string;
  path: string;
  liked_count?: number;
}

interface Article {
  title: string;
  url: string;
  platform: "qiita" | "zenn";
  likes?: number;
}

export async function fetchArticles(): Promise<Article[]> {
  try {
    const [qiitaRes, zennRes] = await Promise.all([
      fetch(
        `https://qiita.com/api/v2/users/${QIITA_USERNAME}/items?page=1&per_page=100`,
      ),
      fetch(
        `https://zenn.dev/api/articles?username=${ZENN_USERNAME}&order=latest`,
      ),
    ]);

    const qiitaData: QiitaArticle[] = qiitaRes.ok
      ? await qiitaRes.json()
      : [];
    const zennData: { articles?: ZennArticle[] } = zennRes.ok
      ? await zennRes.json()
      : {};

    const qiitaArticles: Article[] = qiitaData.map((item) => ({
      title: item.title,
      url: item.url,
      platform: "qiita" as const,
      likes: item.likes_count,
    }));

    const zennArticles: Article[] = (zennData.articles || []).map((item) => ({
      title: item.title,
      url: `https://zenn.dev${item.path}`,
      platform: "zenn" as const,
      likes: item.liked_count,
    }));

    return [...qiitaArticles, ...zennArticles];
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}
