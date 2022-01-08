import { HeadersFunction, json, LoaderFunction, useLoaderData } from 'remix'
import { ArticleBlock } from '~/blocks/article.block'
import { GradientHeroBlock } from '~/blocks/gradient-hero.block'
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
      <GradientHeroBlock title="Articles" />
      <ArticleBlock articles={articles} />
    </>
  )
}
