import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import { Image } from '~/components/image'
import { useRandomValue } from '~/utils/useRandomValue'

export interface RandomImageBlockProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  images: string[]
}
export function RandomImageBlock({ title, images, className }: RandomImageBlockProps) {
  const randomImage = images && images.length > 0 ? useRandomValue(images) : null
  return (
    <div
      className={clsx(
        // place under header, and make full width
        'not-prose relative w-prose-full min-h-[50vh] header-offset-mobile lg:header-offset-desktop',
        'flex justify-center items-end',
        className,
      )}
    >
      {randomImage && (
        <Image className="absolute object-cover w-full h-full" src={randomImage} width={2048} />
      )}
      <div className="z-10 flex flex-col items-center my-8">
        <h1 className="text-white heading-1">{title}</h1>
      </div>
    </div>
  )
}
