import type { ReactNode } from 'react'

export interface NoteProps {
  children: ReactNode
}
export function Note({ children, ...props }: NoteProps) {
  return <div className="p-4 bg-blue-100 rounded-md not-prose">{children}</div>
}
