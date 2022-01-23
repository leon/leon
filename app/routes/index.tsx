import type { HeadersFunction, LoaderFunction, MetaFunction } from 'remix'
import { json, useLoaderData } from 'remix'
import { ArticleBlock } from '~/blocks/article.block'
import { IntroBlock } from '~/blocks/intro.block'
import { DEFAULT_CACHE } from '~/data'
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

  return json(
    { articles },
    {
      headers: {
        'Cache-Control': DEFAULT_CACHE,
      },
    },
  )
}

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Leon Radley',
    description:
      'Leon Radley - articles and labs about web development and other things related to tech',
  }
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    'Cache-Control': loaderHeaders.get('Cache-Control')!,
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
