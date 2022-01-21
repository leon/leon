import type { Article } from '~/data/articles'
import { Link } from 'remix'
import clsx from 'clsx'

export interface ArticleCardProps {
  article: Article
  className?: string
}
export function ArticleCard({
  article: { url, topic, title, intro, image },
  className,
}: ArticleCardProps) {
  return (
    <Link className={clsx('block transition-colors hover:text-accent', className)} to={url}>
      {image && <img className="block mb-2" alt="" {...image} />}
      <div className="badge">{topic}</div>
      <h4 className="text-2xl font-extrabold font-heading">{title}</h4>
      <p className="text-sm">{intro}</p>
    </Link>
  )
}
