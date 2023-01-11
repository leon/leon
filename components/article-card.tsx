import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '~/data/articles'

export interface ArticleCardProps {
  article: Article
  className?: string
}
export function ArticleCard({
  article: { url, topic, title, intro, image },
  className,
}: ArticleCardProps) {
  return (
    <Link className={clsx('block transition-colors hover:text-accent', className)} href={url}>
      {image && (
        <Image className="mb-2 block" src={image.src} alt={title} width={320} height={200} />
      )}
      <div className="badge">{topic}</div>
      <h4 className="font-heading text-2xl font-bold">{title}</h4>
      <p className="text-sm">{intro}</p>
    </Link>
  )
}
