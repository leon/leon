import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import { Image } from '~/components/image'
import { useRandomValue } from '~/utils/useRandomValue'

export interface RandomImageBlockProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  images: string[]
}
export function RandomImageBlock({ title, images, className }: RandomImageBlockProps) {
  const randomImage = images && images.length > 0 ? useRandomValue(images) : null
  return (
    <div
      className={clsx(
        // place under header, and make full width
        'not-prose w-prose-full header-offset-mobile lg:header-offset-desktop relative min-h-[50vh]',
        'flex items-end justify-center',
        className,
      )}
    >
      {randomImage && <Image className="absolute h-full w-full object-cover" src={randomImage} width={2048} />}
      {title && (
        <div className="z-10 my-8 flex flex-col items-center">
          <h1 className="heading-1 text-white">{title}</h1>
        </div>
      )}
    </div>
  )
}
