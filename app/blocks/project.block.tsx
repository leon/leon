import type { Project } from '~/data/projects'
import { ProjectCard } from '~/components/project-card'
import { MoreButton } from '~/components/more-button'

export interface ProjectsBlockProps {
  title: string
  projects: Project[]
  moreLink?: string
}
export function ProjectBlock({ title, projects, moreLink }: ProjectsBlockProps) {
  return (
    <div className="container my-12">
      <h2 className="flex items-center justify-between heading-2">
        {title}
        {moreLink && (
          <MoreButton className="hidden md:flex" href={moreLink} title="View More Projects" />
        )}
      </h2>
      <div className="grid grid-cols-1 gap-x-4 gap-y-12 lg:gap-x-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {projects.map((article) => (
          <ProjectCard key={article.url} article={article} />
        ))}
        {moreLink && (
          <MoreButton
            className="mt-8 justify-self-end md:hidden"
            href={moreLink}
            title="View More Projects"
          />
        )}
      </div>
    </div>
  )
}
