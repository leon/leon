import { ArticleBlock } from '~/blocks/article.block'
import { RandomImageBlock } from '~/blocks/random-image.block'
import { Article, ARTICLE_CACHE, getArticles } from '~/data/articles'
import deskImg from '~/content/images/bgs/desk.jpg'
import pcImg from '~/content/images/bgs/pc.jpg'
import reactImg from '~/content/images/bgs/react.jpg'

export default async function ArticlesPage() {
  const articles = await getArticles({
    sortBy: 'date',
    sortByOrder: 'desc',
    limit: 4,
  })

  return (
    <>
      <RandomImageBlock images={[deskImg, pcImg, reactImg]} />
      <ArticleBlock title="Articles" articles={articles} />
    </>
  )
}
