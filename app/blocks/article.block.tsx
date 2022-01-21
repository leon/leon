import type { Article } from '~/data/articles'
import { ArticleCard } from '~/components/article-card'
import { MoreButton } from '~/components/more-button'

export interface ArticlesBlockProps {
  title: string
  articles: Article[]
  moreLink?: string
}
export function ArticleBlock({ title, articles, moreLink }: ArticlesBlockProps) {
  return (
    <div className="container my-12">
      <h2 className="flex items-center justify-between heading-2">
        {title}
        {moreLink && (
          <MoreButton className="hidden md:flex" href={moreLink} title="View More Articles" />
        )}
      </h2>
      <div className="grid grid-cols-1 gap-x-4 gap-y-12 lg:gap-x-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
        {moreLink && (
          <MoreButton
            className="mt-8 justify-self-end md:hidden"
            href={moreLink}
            title="View More Articles"
          />
        )}
      </div>
    </div>
  )
}