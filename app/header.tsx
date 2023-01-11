import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'
import { GithubIcon, LinkedInIcon, MastodonIcon, TwitterIcon } from '~/components/icons'
import { SocialNavItem } from '~/components/social-nav'

export interface HeaderProps {}
export function Header({}: HeaderProps) {
  return (
    <nav
      id="top"
      className="z-10 bg-white bg-opacity-30 shadow-sm backdrop-blur-lg backdrop-filter"
    >
      <div
        className={clsx(
          // mobile
          'mt-4 flex flex-col items-center',
          // desktop
          'grid-cols-3 lg:mt-0 lg:grid lg:h-16 lg:px-4',
        )}
      >
        <Link
          className="flex items-center gap-4 font-heading text-primary-dark no-underline hover:text-primary-light hover:no-underline"
          href="/"
        >
          {/* <img
            className="block w-12 h-12 border border-gray-300 rounded-full"
            src="/images/leon-radley.jpg"
            alt="Leon Radley"
          /> */}
          <span className="text-2xl font-bold">Leon Radley</span>
          {/* <span className="text-sm uppercase">Article &bull; Labs &bull; Tips</span> */}
        </Link>
        <div className="flex justify-self-center">
          <HeaderNavItem href="/">Home</HeaderNavItem>
          <HeaderNavItem href="/articles">Articles</HeaderNavItem>
          <HeaderNavItem href="/projects">Projects</HeaderNavItem>
          <HeaderNavItem href="/about">About</HeaderNavItem>
        </div>

        <div className="hidden lg:flex lg:justify-self-end">
          <SocialNavItem href="https://github.com/leon" title="Visit my Github Page">
            <GithubIcon />
          </SocialNavItem>
          <SocialNavItem href="https://www.twitter.com/leonradley" title="Visit my Twitter Stream">
            <TwitterIcon />
          </SocialNavItem>
          <SocialNavItem href="https://uiuxdev.social/@leon" title="Visit my Mastodon Stream">
            <MastodonIcon />
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
  // const segment = useSelectedLayoutSegment();
  //const isActive = slug === segment;
  const isActive = false
  return (
    <Link
      className={clsx([
        'flex items-center p-4',
        'font-heading text-sm font-bold uppercase',
        'border-b-4 border-opacity-50 hover:border-gray-200',
        isActive ? 'border-white' : 'border-transparent',
      ])}
      href={href}
    >
      {children}
    </Link>
  )
}
