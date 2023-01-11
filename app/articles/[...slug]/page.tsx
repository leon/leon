import { run } from '@mdx-js/mdx'
import { notFound } from 'next/navigation'
import { HeroBlock } from '~/blocks/hero.block'
import { mdxComponentMap } from '~/components/mdx'
import { Prose } from '~/components/prose'
import { Article, ARTICLE_CACHE, getArticle, getArticles } from '~/data/articles'
// import { imageUrl } from '~/utils/image'
import * as runtime from 'react/jsx-runtime'

// force static rendering
export const dynamic = 'force-static'

export interface ArticlePageProps {
  params: {
    slug: string[]
  }
}
export default async function ArticlePage({ params: { slug } }: ArticlePageProps) {
  const article = await getArticle(`/articles/${slug.join('/')}`)
  if (!article) {
    return notFound()
  }

  const { default: MdxArticle } = await run(String(article?.mdx), runtime)

  return (
    <Prose>
      {!article.customHeader && <HeroBlock {...article} />}
      <MdxArticle components={mdxComponentMap} />
    </Prose>
  )
}

export async function generateStaticParams() {
  const articles = await getArticles({
    sortBy: 'date',
    sortByOrder: 'desc',
  })

  return articles.map((article) => ({
    slug: article.url.split('/').slice(2),
  }))
}
