import { ArticleItem } from '~/components/article-item'
import { MoreButton } from '~/components/more-button'
import type { Article } from '~/data/articles'

export interface ArticlesBlockProps {
  title?: string
  articles: Article[]
  moreLink?: string
}
export function ArticleBlock({ title, articles, moreLink }: ArticlesBlockProps) {
  return (
    <div className="container my-12 max-w-prose">
      {(title || moreLink) && (
        <h2 className="heading-2 flex items-center justify-between">
          <span className="capitalize">{title}</span>
          {moreLink && (
            <MoreButton className="hidden md:flex" href={moreLink} title="View More Articles" />
          )}
        </h2>
      )}
      <div className="mt-8 flex flex-col gap-8">
        {articles.map((article) => (
          <ArticleItem key={article.url} article={article} />
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
