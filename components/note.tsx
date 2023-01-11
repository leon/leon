import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface NoteProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}
export function Note({ className, children, ...props }: NoteProps) {
  return (
    <div className={clsx('not-prose rounded-md bg-blue-100 p-4', className)} {...props}>
      {children}
    </div>
  )
}
