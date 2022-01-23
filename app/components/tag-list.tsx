import { Link } from 'remix'

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
      <Link key={tag} className="badge" to={`${url}/${tag}`}>
        {tag}
      </Link>
    ) : (
      <div key={tag} className="badge">
        {tag}
      </div>
    )

  return <div className="flex gap-1">{tags.map(items)}</div>
}
