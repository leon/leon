import clsx from 'clsx'
import { useRandomColor } from '~/utils'

export interface GradientHeroBlockProps {
  title: string
}
export function ColorsHeroBlock({ title }: GradientHeroBlockProps) {
  const randomColor = useRandomColor()
  return (
    <div
      className={clsx([
        'no-prose relative header-offset-mobile lg:header-offset-desktop',
        'flex justify-center items-end min-h-[30vh]',
        'bg-no-repeat bg-cover',
      ])}
      style={{
        backgroundColor: randomColor,
        backgroundImage: `url(/backgrounds/light-glow.svg)`,
      }}
    >
      <h1 className="my-16 capitalize heading-1">{title}</h1>
    </div>
  )
}
