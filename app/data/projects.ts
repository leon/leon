import { getMdxFiles, extractMeta } from './mdx.server'
import { ImageRef, Meta } from './domain'
import { sortBy } from 'lodash'

export interface Project extends Meta {
  description: string
  intro: string
  topic?: string
  githubUrl?: string
  tags?: string[]

  image?: ImageRef
}

export const PROJECT_PATH = 'projects'
export const PROJECT_URL = 'projects'

export interface GetProjectOptions {
  // filters
  topic?: string
  tag?: string

  // sorting
  sortBy?: keyof Project
  sortByOrder?: 'asc' | 'desc'

  // limit
  limit?: number
}
export async function getProjects(options?: GetProjectOptions): Promise<Project[]> {
  let files = await getMdxFiles(PROJECT_PATH)

  files = files.filter((f) => f.startsWith(PROJECT_PATH))

  let articles = await Promise.all(
    files.map((filePath) => extractMeta<Project>(PROJECT_PATH, filePath, PROJECT_URL)),
  )

  // filters
  if (options?.topic) {
    articles = articles.filter((i) => i.topic === options.topic)
  }
  if (options?.tag) {
    articles = articles.filter((i) => i.tags?.includes(options.tag!))
  }

  // sorting
  if (options?.sortBy) {
    articles = sortBy(articles, [options.sortBy], [options.sortByOrder ?? 'asc'])
  }

  // limit
  if (options?.limit) {
    articles = articles.slice(0, options.limit)
  }

  return articles
}
