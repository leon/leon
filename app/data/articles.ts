import { getMdxFiles, extractMeta, bundleMdx } from './mdx.server'
import { sortBy } from 'lodash'
import { ImageRef, Meta } from './domain'

export interface Article extends Meta {
  description: string
  intro: string
  topic: string
  tags?: string[]

  customHeader?: boolean
  gradient?: boolean
  cover?: ImageRef
  image?: ImageRef

  mdx?: string
}

export const ARTICLE_PATH = 'articles'
export const ARTICLE_URL = 'articles'

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
  let files = await getMdxFiles(ARTICLE_PATH)

  // files = files.filter((f) => f.startsWith(ARTICLE_PATH))

  let articles = await Promise.all(
    files.map((filePath) => extractMeta<Article>(ARTICLE_PATH, filePath, ARTICLE_URL)),
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
  let articles = await getArticles()
  const article = articles.find((article) => article.url === url)

  if (!article) {
    return null
  }

  const mdx = await bundleMdx(ARTICLE_PATH, article.file, article)

  return {
    ...article,
    mdx,
  }
}
