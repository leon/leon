import clsx from 'clsx'
import { ImageRef } from '~/data/domain'
import { parseISO, format } from 'date-fns'
import { useRandomColor } from '~/utils'
import { GithubIcon } from '~/components/icons'

export interface HeroBlockProps {
  title: string
  date?: string
  topic?: string
  image?: ImageRef
  className?: string
  githubUrl?: string
}
export function HeroBlock({ title, date, topic, image, className, githubUrl }: HeroBlockProps) {
  const parsedDate = date && parseISO(date)
  const dateFormatted = parsedDate && format(parsedDate, 'MMMM yyy')
  const randomColor = useRandomColor()
  return (
    <div
      className={clsx(
        // place under header, and make full width
        'not-prose w-full-breakout !-mt-16 pt-24',
        'flex justify-center items-end',
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
      <div className="z-10 flex flex-col items-center my-6">
        {topic && <span className="text-base badge">{topic}</span>}
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
          <span>View on Github</span>
        </a>
      )}
    </div>
  )
}
