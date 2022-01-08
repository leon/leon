import { getMdxFiles, extractMeta, getMdxFile } from './mdx'
import { sortBy } from 'lodash'
import { ImageRef, Meta, ROOT_PATH } from './domain'
import { join } from 'path'

export interface Article extends Meta {
  description: string
  intro: string
  topic: string
  tags?: string[]

  gradient?: boolean
  cover?: ImageRef
  image?: ImageRef
}

export const ARTICLE_URL_BASE = '/articles'
export const ARTICLE_PATH = 'articles/__article'

export interface GetArticleOptions {
  // filters
  topic?: string
  tag?: string

  // sorting
  sortBy?: keyof Article
  sortByOrder?: 'asc' | 'desc'

  // limit
  limit?: number
}
export async function getArticles(options?: GetArticleOptions): Promise<Article[]> {
  let files = await getMdxFiles(ROOT_PATH)

  files = files.filter((f) => f.startsWith(ARTICLE_PATH))

  let articles = await Promise.all(
    files.map((filePath) => extractMeta<Article>(ROOT_PATH, filePath)),
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

export async function getArticle(url: string): Promise<Article | null> {
  const articlePath = join(ROOT_PATH, ARTICLE_PATH)
  const articleUrl = url.replace(`${ARTICLE_URL_BASE}/`, '')
  const mdxFilePath = await getMdxFile(articlePath, articleUrl)
  if (!mdxFilePath) {
    return null
  }
  return extractMeta<Article>(articlePath, mdxFilePath)
}
