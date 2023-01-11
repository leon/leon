import Image from 'next/image'
import { ArticleBlock } from '~/blocks/article.block'
import { IntroBlock } from '~/blocks/intro.block'
import { getArticles } from '~/data/articles'
import { GradientMorphBlock } from './projects/gradient-morph/gradient-morph.block'

export default async function StartPage() {
  const articles = await getArticles({
    sortBy: 'date',
    sortByOrder: 'desc',
    limit: 4,
  })

  return (
    <>
      <IntroBlock />
      <GradientMorphBlock />
      <ArticleBlock title="Articles" articles={articles} moreLink="/articles" />
    </>
  )
}
