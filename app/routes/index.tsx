import type { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, json } from 'remix'
import { ArticleBlock } from '~/blocks/article.block'
import { IntroBlock } from '~/blocks/intro.block'
import { Article, getArticles } from '~/data/articles'

type IndexData = {
  articles: Article[]
}
export const loader: LoaderFunction = async () => {
  const articles = await getArticles({
    sortBy: 'date',
    sortByOrder: 'desc',
    limit: 4,
  })

  return json({ articles })
}

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Leon Radley',
    description: 'Leon Radleys website',
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const { articles } = useLoaderData<IndexData>()

  return (
    <div>
      <IntroBlock />
      <ArticleBlock title="Articles" articles={articles} moreLink="/articles" />
    </div>
  )
}
