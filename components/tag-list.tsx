import Link from 'next/link'

export interface TagListProps {
  tags?: string[]
  url?: string
}
export function TagList({ tags, url }: TagListProps) {
  if (!tags || tags.length === 0) {
    return null
  }

  const items = (tag: string) =>
    url ? (
      <Link key={tag} className="badge" href={`${url}/${tag}`}>
        {tag}
      </Link>
    ) : (
      <div key={tag} className="badge">
        {tag}
      </div>
    )

  return <div className="my-2 flex gap-1">{tags.map(items)}</div>
}
