import { json, LoaderFunction, MetaFunction, Outlet, useLoaderData } from 'remix'
import { Prose } from '~/components/prose'
import { getArticle, Article } from '~/data/articles'

type ArticleData = {
  article: Article
}
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const article = await getArticle(url.pathname)
  return json(article)
}

export const meta: MetaFunction = ({ data: article }: { data: Article }) => {
  if (!article) return {}
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

export default function Article() {
  const article = useLoaderData<ArticleData>()
  return (
    <Prose className="container flex-grow">
      <Outlet />
    </Prose>
  )
}
