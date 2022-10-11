import { Link } from '@remix-run/react'
import clsx from 'clsx'
import type { Project } from '~/data/projects'

export interface ProjectCardProps {
  article: Project
  className?: string
}
export function ProjectCard({ article: { url, topic, title, intro, image }, className }: ProjectCardProps) {
  return (
    <Link className={clsx('block transition-colors hover:text-accent', className)} to={url}>
      {image && <img className="block mb-2" alt="" {...image} />}
      <div className="badge">{topic}</div>
      <h4 className="text-2xl font-extrabold font-heading">{title}</h4>
      <p className="text-sm">{intro}</p>
    </Link>
  )
}
