export interface Meta {
  url: string
  title: string
  date: string
}

export const ROOT_PATH = 'app/routes'

export interface ImageRef {
  src: string
  width: number
  height: number
  alt?: string
}
