import { ReactNode } from 'react'
import { Prose } from '~/components/prose'

export interface ArticleProps {
  children: ReactNode
}
export function ArticleLayout({ children }: ArticleProps) {
  return <Prose>{children}</Prose>
}
