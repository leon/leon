import { json, LoaderFunction, useLoaderData } from 'remix'
import { ArticleBlock } from '~/blocks/article.block'
import { Article, getArticles } from '~/data/articles'

export interface ArticlesPageData {
  articles: Article[]
}

export const loader: LoaderFunction = async () => {
  const articles = await getArticles({
    sortBy: 'date',
    sortByOrder: 'desc',
    limit: 4,
  })

  return { articles }
}

export default function ArticlesPage() {
  const { articles } = useLoaderData<ArticlesPageData>()
  return <ArticleBlock title="Articles" articles={articles} />
}
