import clsx from 'clsx'
import { Gradient } from '~/components/gradient'

export interface GradientHeroBlockProps {
  title: string
}
export function GradientHeroBlock({ title }: GradientHeroBlockProps) {
  return (
    <Gradient
      className={clsx([
        'no-prose relative header-offset-mobile lg:header-offset-desktop',
        'flex justify-center items-end min-h-[30vh]',
      ])}
    >
      <h1 className="my-16 capitalize heading-1">{title}</h1>
    </Gradient>
  )
}
