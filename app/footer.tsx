import { GithubIcon, LinkedInIcon, TwitterIcon } from '~/components/icons'
import { SocialNavItem } from '~/components/social-nav'

export interface FooterProps {}
export function Footer({}: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-12 text-gray-400 fixed-bottom bg-primary-dark">
      <div className="container flex flex-col items-center justify-between p-4 min-h-42">
        <div className="flex justify-center m-8">
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
        <small className="text-gray-500">site design / content © 2009-{year} Leon Radley</small>
      </div>
    </footer>
  )
}
