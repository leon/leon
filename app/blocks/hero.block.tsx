import clsx from 'clsx'
import { format, parseISO } from 'date-fns'
import { GithubIcon } from '~/components/icons'
import { TagList } from '~/components/tag-list'
import type { ImageRef } from '~/data/domain'
import { useRandomColor } from '~/utils'

export interface HeroBlockProps {
  title: string
  date?: string
  tags?: string[]
  image?: ImageRef
  className?: string
  githubUrl?: string
}
export function HeroBlock({ title, date, tags, image, className, githubUrl }: HeroBlockProps) {
  const parsedDate = date && parseISO(date)
  const dateFormatted = parsedDate && format(parsedDate, 'MMMM yyy')
  const randomColor = useRandomColor()
  return (
    <div
      className={clsx(
        // place under header, and make full width
        'not-prose relative w-prose-full header-offset-mobile lg:header-offset-desktop',
        'flex justify-center items-end min-h-fit h-[30vh]',
        className,
      )}
      style={{
        backgroundColor: randomColor,
      }}
    >
      {image && (
        <img
          className="absolute object-cover w-full h-full"
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      )}
      <div className="z-10 flex flex-col items-center my-8">
        {tags && <TagList url="/articles" tags={tags} />}
        <h1 className="heading-1">{title}</h1>
        <time className="text-2xl font-bold" dateTime={date}>
          {dateFormatted}
        </time>
      </div>

      {githubUrl && (
        <a
          className="absolute flex items-center gap-2 px-3 py-2 text-xs font-bold bg-gray-200 rounded-md right-3 -bottom-4"
          href={githubUrl}
        >
          <GithubIcon />
          <span className="hidden md:inline">View on Github</span>
        </a>
      )}
    </div>
  )
}
