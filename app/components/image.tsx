import { HTMLAttributes } from 'react'
import type { FitEnum } from 'sharp'
import { imageUrl } from '~/utils/image'

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string // a path within the assets/images directory, can be a nested path
  width?: number // either width or height is required
  height?: number
  fit?: keyof FitEnum // contain is default
}
export function Image({ src, width, height, fit, ...other }: ImageProps) {
  return <img src={imageUrl(src, width, height, fit)} {...{ width, height, ...other }} />
}
