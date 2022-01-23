import type { FitEnum } from 'sharp'

export function imageUrl(
  src: string,
  width?: number,
  height?: number,
  fit?: keyof FitEnum,
): string {
  const query = new URLSearchParams()
  width && query.set('w', width.toString())
  height && query.set('h', height.toString())
  fit && query.set('fit', fit)

  return `/image${src}?${query.toString()}`
}
