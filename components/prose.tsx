import clsx from 'clsx'
import { ReactNode } from 'react'

export interface ProseProps {
  className?: string
  children: ReactNode
}
export function Prose({ className, children }: ProseProps) {
  return (
    <div
      className={clsx([
        'container flex-grow',
        'prose md:prose-lg lg:prose-xl',
        'prose-headings:font-heading',
        'prose-a:text-accent-dark',
        className,
      ])}
    >
      {children}
    </div>
  )
}
