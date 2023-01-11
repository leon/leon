import { notFound } from 'next/navigation'
import { ArticleBlock } from '~/blocks/article.block'
import { GradientHeroBlock } from '~/blocks/gradient-hero.block'
import { RandomImageBlock } from '~/blocks/random-image.block'
import { Article, ARTICLE_CACHE, getArticles } from '~/data/articles'

// force static rendering
export const dynamic = 'force-static'

const TAGS = ['news', 'css', 'typescript', 'react', 'angular', 'rxjs']

interface ArticlesPageProps {
  params: {
    tag: string
  }
}
export default async function ArticlesPage({ params }: ArticlesPageProps) {
  const tag = params.tag?.toLowerCase() ?? ''
  if (!TAGS.includes(tag)) {
    return notFound()
  }

  const articles = await getArticles({
    tag,
    sortBy: 'date',
  })

  return (
    <>
      <GradientHeroBlock title={`${tag} Articles`} />
      <ArticleBlock articles={articles} />
    </>
  )
}

export async function generateStaticParams() {
  return TAGS.map((tag) => ({
    tag,
  }))
}
