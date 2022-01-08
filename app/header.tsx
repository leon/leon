import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link, NavLink } from 'remix'
import { GithubIcon, LinkedInIcon, TwitterIcon } from '~/components/icons'
import { SocialNavItem } from '~/components/social-nav'

export interface HeaderProps {}
export function Header({}: HeaderProps) {
  return (
    <nav
      id="top"
      className="z-10 bg-white shadow-sm bg-opacity-30 backdrop-filter backdrop-blur-lg"
    >
      <div
        className={clsx(
          // mobile
          'flex flex-col items-center mt-4',
          // desktop
          'lg:grid grid-cols-3 lg:h-16 lg:mt-0 lg:px-4',
        )}
      >
        <Link
          className="flex items-center gap-4 no-underline font-heading text-primary-dark hover:text-primary-light hover:no-underline"
          to="/"
        >
          {/* <img
            className="block w-12 h-12 border border-gray-300 rounded-full"
            src="/images/leon-radley.jpg"
            alt="Leon Radley"
          /> */}
          <span className="text-2xl font-extrabold">Leon Radley</span>
          {/* <span className="text-sm uppercase">Article &bull; Labs &bull; Tips</span> */}
        </Link>
        <div className="flex justify-self-center">
          <HeaderNavItem href="/">Home</HeaderNavItem>
          <HeaderNavItem href="/articles">Articles</HeaderNavItem>
          {/* <HeaderNavItem href="/projects">Projects</HeaderNavItem>
          <HeaderNavItem href="/uses">Uses</HeaderNavItem> */}
          <HeaderNavItem href="/about">About</HeaderNavItem>
        </div>

        <div className="hidden lg:flex lg:justify-self-end">
          <SocialNavItem href="https://github.com/leon" title="Visit my Github Page">
            <GithubIcon />
          </SocialNavItem>
          <SocialNavItem href="https://www.twitter.com/leonradley" title="Visit my Twitter Stream">
            <TwitterIcon />
          </SocialNavItem>
          <SocialNavItem
            href="https://www.linkedin.com/in/leonradley/"
            title="Visit my LinkedIn Page"
          >
            <LinkedInIcon />
          </SocialNavItem>
        </div>
      </div>
    </nav>
  )
}

export interface HeaderNavItemProps {
  href: string
  children: ReactNode
}
export function HeaderNavItem({ href, children }: HeaderNavItemProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx([
          'flex items-center p-4',
          'text-sm font-bold uppercase font-heading',
          'border-b-4 border-opacity-50 hover:border-gray-200',
          isActive ? 'border-white' : 'border-transparent',
        ])
      }
      to={href}
    >
      {children}
    </NavLink>
  )
}
