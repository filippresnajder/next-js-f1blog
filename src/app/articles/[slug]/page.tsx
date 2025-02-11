import Articles from "@/app/json/articles.json";
import Image from "next/image";
import Article from "@/components/Article";

const ArticleView = async ({params} : {params : Promise<{slug : string}>}) => {
    const slug = (await params).slug;
    const article = Articles.articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <div>
                <p>Invalid Article</p>
            </div>
        );
    }

    const next_article = Articles.articles.find(a => a.id === article.id+1);

    return (
      <div className="flex flex-col items-center mt-16 md:mt-32 p-4 font-formula dark:text-white">
          <h1 className="text-2xl">{article.title} <span className="text-sm text-gray-400">{article.date}</span></h1>
          <Image
              className="mt-4"
              src={`/articles/${article.image}`}
              alt={article.slug}
              width={800}
              height={400}
          />
          <p className="w-[70vw] mt-12">{article.entry}</p>
          <p className="w-[70vw] mt-4">{article.core}</p>
          <p className="w-[70vw] mt-4">{article.end}</p>
          {next_article &&
              (
                  <div className="text-center mt-12">
                      <p>Next article:</p>
                      <Article key={next_article.id} props={next_article}/>
                  </div>
              )
          }
      </div>
    );
};

export default ArticleView