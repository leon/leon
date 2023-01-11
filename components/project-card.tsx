/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import Link from 'next/link'
import type { Project } from '~/data/projects'

export interface ProjectCardProps {
  article: Project
  className?: string
}
export function ProjectCard({
  article: { url, topic, title, intro, image },
  className,
}: ProjectCardProps) {
  return (
    <Link className={clsx('block transition-colors hover:text-accent', className)} href={url}>
      {image && <img className="mb-2 block" alt="" {...image} />}
      <div className="badge">{topic}</div>
      <h4 className="font-heading text-2xl font-bold">{title}</h4>
      <p className="text-sm">{intro}</p>
    </Link>
  )
}
