import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { HTMLAttributes } from 'react'
import { useRandomValue } from '~/utils'

export interface RandomImageBlockProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  images: string[] | StaticImageData[]
}
export function RandomImageBlock({ title, images, className }: RandomImageBlockProps) {
  const randomImage: any = useRandomValue(images as any)
  return (
    <div
      className={clsx(
        // place under header, and make full width
        'not-prose w-prose-full header-offset-mobile lg:header-offset-desktop relative min-h-[50vh]',
        'flex items-end justify-center',
        className,
      )}
    >
      <Image
        className="absolute h-full w-full object-cover"
        src={randomImage}
        alt={title ?? 'Hero Image'}
        width={2048}
        height={1024}
        priority
      />
      {title && (
        <div className="z-10 my-8 flex flex-col items-center">
          <h1 className="heading-1 text-white">{title}</h1>
        </div>
      )}
    </div>
  )
}
