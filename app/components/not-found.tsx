import { ReactNode } from 'react'

export interface NotFoundProps {
  children: ReactNode
}
export function NotFound({ children }: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-grow gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl">{children}</p>
    </div>
  )
}
