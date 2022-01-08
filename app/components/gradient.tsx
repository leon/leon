import clsx from 'clsx'
import type { ReactNode } from 'react'

export interface GradientProps {
  className?: string
  children?: ReactNode
}
export function Gradient({ className, children }: GradientProps) {
  return <div className={clsx(className, 'gradient')}>{children}</div>
}
