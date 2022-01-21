import { Link } from 'remix'
import clsx from 'clsx'
import { RightArrowIcon } from './icons'

export interface MoreButtonProps {
  href: string
  title: string
  className?: string
}
export function MoreButton({ href, title, className }: MoreButtonProps) {
  return (
    <Link className={clsx('flex gap-2 items-center hover:text-accent', className)} to={href}>
      <span className="text-sm font-medium uppercase font-heading">{title}</span>
      <RightArrowIcon className="w-5 h-5 p-1 bg-white border border-current rounded-full bg-opacity-90" />
    </Link>
  )
}
