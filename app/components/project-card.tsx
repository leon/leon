import { Project } from '~/data/projects'
import { Link } from 'remix'
import clsx from 'clsx'

export interface ProjectCardProps {
  article: Project
  className?: string
}
export function ProjectCard({
  article: { url, topic, title, intro, image },
  className,
}: ProjectCardProps) {
  return (
    <Link className={clsx('block transition-colors hover:text-accent', className)} to={url}>
      {image && <img className="block mb-2" alt="" {...image} />}
      <div className="badge">{topic}</div>
      <h4 className="font-heading font-extrabold text-2xl">{title}</h4>
      <p className="text-sm">{intro}</p>
    </Link>
  )
}
