import clsx from 'clsx'
import { Link } from 'remix'
import type { Article } from '~/data/articles'
import { TagList } from './tag-list'

export interface ArticleItemProps {
  article: Article
  className?: string
}
export function ArticleItem({
  article: { url, tags, title, description, intro, image },
  className,
}: ArticleItemProps) {
  return (
    <Link className={clsx('block transition-colors hover:text-accent', className)} to={url}>
      <h4 className="text-2xl font-extrabold font-heading">{title}</h4>
      <TagList tags={tags} />

      <p className="text-sm">{intro ?? description}</p>
    </Link>
  )
}
