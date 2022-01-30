import { HeadersFunction, json, LoaderFunction, useLoaderData } from 'remix'
import { ArticleBlock } from '~/blocks/article.block'
import { GradientHeroBlock } from '~/blocks/gradient-hero.block'
import { Article, ARTICLE_CACHE, getArticles } from '~/data/articles'

export interface ArticlesPageData {
  tag: string
  articles: Article[]
}

const TAGS = ['news', 'css', 'typescript', 'react', 'angular']

export const loader: LoaderFunction = async ({ params }) => {
  const tag = (params.tag as string).toLowerCase()
  if (!TAGS.includes(tag)) {
    throw new Response(`${tag} Not Found`, { status: 404 })
  }

  const articles = await getArticles({
    tag,
    sortBy: 'date',
  })

  return json(
    {
      tag,
      articles,
    },
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

export default function CssArticlesPage() {
  const { tag, articles } = useLoaderData<ArticlesPageData>()
  return (
    <>
      <GradientHeroBlock title={`${tag} Articles`} />
      <ArticleBlock articles={articles} />
    </>
  )
}