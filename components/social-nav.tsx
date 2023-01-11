import type { ReactNode } from 'react'

export interface SocialNavItemProps {
  href: string
  title: string
  children: ReactNode
}
export function SocialNavItem({ href, title, children }: SocialNavItemProps) {
  return (
    <a
      className="flex items-center p-2 hover:text-accent"
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
