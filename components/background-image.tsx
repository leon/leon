import clsx from 'clsx'
import { ImageRef } from '~/data/domain'

export interface BackgroundImageProps {
  image: ImageRef
  className?: string
}
export function BackgroundImage({ image, className }: BackgroundImageProps) {
  return (
    <div className={clsx('relative w-full h-full shadow-inner', className)}>
      <img src={image.src} width={image.width} height={image.height} alt="" />
    </div>
  )
}
