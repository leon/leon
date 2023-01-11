import { ReactNode } from 'react'

export interface NotFoundProps {
  children: ReactNode
}
export function NotFound({ children }: NotFoundProps) {
  return (
    <div className="grid place-items-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl">{children}</p>
    </div>
  )
}
