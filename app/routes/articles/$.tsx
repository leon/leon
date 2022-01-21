import {
  HeadersFunction,
  json,
  LoaderFunction,
  MetaFunction,
  useCatch,
  useLoaderData,
  useParams,
} from 'remix'
import { HeroBlock } from '~/blocks/hero.block'
import { Mdx } from '~/components/mdx'
import { NotFound } from '~/components/not-found'
import { Prose } from '~/components/prose'
import { Article, getArticle } from '~/data/articles'

const ARTICLE_CACHE =
  'public, s-maxage=86400, max-age=84600, stale-while-revalidate=86400, stale-if-error=72400'

type ArticleData = {
  article: Article
}
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const article = await getArticle(url.pathname)

  if (!article) {
    throw new Response('Not Found', { status: 404 })
  }

  return json(
    { article },
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

export const meta: MetaFunction = ({ data }: { data: ArticleData }) => {
  if (!data?.article) {
    return {}
  }

  const { article } = data
  const title = [article.title, article.topic, 'Leon Radley'].filter(Boolean).join(' - ')
  return {
    title,
    description: article.description,
    'og:title': title,
    ...(article.image
      ? {
          'og:image': article.image.src,
          'og:image:width': `${article.image.width}`,
          'og:image:height': `${article.image.height}`,
        }
      : {}),
  }
}

export function CatchBoundary() {
  const caught = useCatch()
  const params = useParams()

  switch (caught.status) {
    case 404: {
      return (
        <NotFound>
          Article <strong>{params['*']}</strong> not found!
        </NotFound>
      )
    }
    default: {
      // if we don't handle this then all bets are off. Just throw an error
      // and let the nearest ErrorBoundary handle this
      throw new Error(`${caught.status} not handled`)
    }
  }
}

export default function ArticlePage() {
  const { article } = useLoaderData<ArticleData>()
  return (
    <Prose>
      {!article.customHeader && <HeroBlock {...article} />}
      {article.mdx && <Mdx mdx={article.mdx} />}
    </Prose>
  )
}