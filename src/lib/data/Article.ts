import type { ImageRef } from './ImageRef'

export interface Article {
  url: string
  title: string
  description: string
  date: string
  image?: ImageRef
  tags?: string[]
  githubUrl?: string
  customHeader?: boolean
  draft?: boolean
  // the md html content
  content?: string
}
