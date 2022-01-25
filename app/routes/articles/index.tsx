import { HeadersFunction, json, LoaderFunction, useLoaderData } from 'remix'
import { ArticleBlock } from '~/blocks/article.block'
import { RandomImageBlock } from '~/blocks/random-image.block'
import { Article, ARTICLE_CACHE, getArticles } from '~/data/articles'

export interface ArticlesPageData {
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
        'Cache-Control': ARTICLE_CACHE,
      },
    },
  )
}

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': ARTICLE_CACHE,
  }
}

export default function ArticlesPage() {
  const { articles } = useLoaderData<ArticlesPageData>()
  return (
    <>
      <RandomImageBlock images={['/photos/bgs/desk.jpg', '/photos/bgs/pc.jpg', '/photos/bgs/react.jpg']} />
      <ArticleBlock title="Articles" articles={articles} />
    </>
  )
}
