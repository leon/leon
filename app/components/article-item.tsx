import { Link } from '@remix-run/react'
import clsx from 'clsx'
import type { Article } from '~/data/articles'
import { TagList } from './tag-list'
import { Time } from './time'

export interface ArticleItemProps {
  article: Article
  className?: string
}
export function ArticleItem({ article: { url, date, tags, title, description, intro, image }, className }: ArticleItemProps) {
  return (
    <Link className={clsx('block transition-colors hover:text-accent', className)} to={url}>
      <h4 className="text-2xl font-extrabold font-heading">{title}</h4>
      <div className="flex items-center gap-2">
        <Time date={date} />
        <TagList tags={tags} />
      </div>

      <p className="text-sm">{intro ?? description}</p>
    </Link>
  )
}
