import { ReactNode } from 'react'
import { Prose } from '~/components/prose'

interface PagesLayoutProps {
  children: ReactNode
}
export default function PagesLayout({ children }: PagesLayoutProps) {
  return <Prose>{children}</Prose>
}
