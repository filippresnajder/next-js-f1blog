import Article from "@/components/Article";
import Articles from "@/app/json/articles.json";

interface ArticleData {
    id: number,
    date: string,
    title: string,
    entry: string,
    core: string,
    end: string,
    image: string,
    slug: string
}
export default function Home() {
  const articles: Array<ArticleData> = Articles.articles;

  return (
      <div className="grid md:grid-cols-2 place-items-center max-w-screen-lg mx-auto mt-20 md:mt-32 gap-y-4">
          {articles.map(a =>
              <Article key={a.id} props={a}/>
          )}
      </div>
  );
}
