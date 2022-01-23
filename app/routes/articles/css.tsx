import { LoaderFunction, useLoaderData } from 'remix'
import { ArticleBlock } from '~/blocks/article.block'
import { Article, getArticles } from '~/data/articles'

export interface ArticlesPageData {
  articles: Article[]
}

export const loader: LoaderFunction = async () => {
  const articles = await getArticles({
    topic: 'css',
    sortBy: 'date',
  })

  return { articles }
}

export default function CssArticlesPage() {
  const { articles } = useLoaderData<ArticlesPageData>()
  return <ArticleBlock title="CSS Articles" articles={articles} />
}
