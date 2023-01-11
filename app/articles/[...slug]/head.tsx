import HeadBase from '~/app/head-base'
import { BASE_URL } from '~/data'
import { getArticle } from '~/data/articles'
import { ArticlePageProps } from './page'

export default async function Head({ params }: ArticlePageProps) {
  const slug = params?.slug
  const articleUrl = `/articles/${slug?.join('/')}`

  const article = await getArticle(articleUrl)
  if (!article) {
    return null
  }

  const title = [article.title, article.topic, 'Leon Radley'].filter(Boolean).join(' - ')

  let image = null
  // const image = article.image && {
  //   src: imageUrl(article.image.src, 720, 400, 'cover'),
  //   width: 720,
  //   height: 400,
  // }
  // if (article.image) {
  //   image = (
  //     <>
  //       <meta property="og:image" content={article.image.src} />
  //       <meta property="og:image:width" content={article.image.width.toFixed(0)} />
  //       <meta property="og:image:height" content={article.image.height.toFixed(0)} />
  //     </>
  //   )
  // }

  return (
    <>
      <HeadBase />
      <title>{`${article.title} | Leon Radley`}</title>
      <meta name="description" content={article.intro} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={article.intro} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${BASE_URL}${articleUrl}`} />
      {image}
    </>
  )
}
