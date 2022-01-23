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
      <Link className="badge" to={`${url}/${tag}`}>
        {tag}
      </Link>
    ) : (
      <div className="badge">{tag}</div>
    )

  return <div className="flex gap-1">{tags.map(items)}</div>
}
