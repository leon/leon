import clsx from 'clsx'
import { Link } from 'remix'
import type { Article } from '~/data/articles'
import { Image } from './image'

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
      {image && <Image className="block mb-2" src={image.src} width={320} height={200} />}
      <div className="badge">{topic}</div>
      <h4 className="text-2xl font-extrabold font-heading">{title}</h4>
      <p className="text-sm">{intro}</p>
    </Link>
  )
}
