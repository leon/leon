<nav
  id="top"
  class="z-10 bg-white bg-opacity-30 shadow-sm backdrop-blur-lg backdrop-filter"
    >
  <div
    class={clsx(
      // mobile
      'mt-4 flex flex-col items-center',
      // desktop
      'grid-cols-3 lg:mt-0 lg:grid lg:h-16 lg:px-4',
    )}
  >
    <Link
      class="flex items-center gap-4 font-heading text-primary-dark no-underline hover:text-primary-light hover:no-underline"
      href="/"
    >
      {/* <img
        class="block w-12 h-12 border border-gray-300 rounded-full"
        src="/images/leon-radley.jpg"
        alt="Leon Radley"
      /> */}
      <span class="text-2xl font-bold">Leon Radley</span>
      {/* <span class="text-sm uppercase">Article &bull; Labs &bull; Tips</span> */}
    </Link>
    <div class="flex justify-self-center">
      <HeaderNavItem href="/">Home</HeaderNavItem>
      <HeaderNavItem href="/articles">Articles</HeaderNavItem>
      <HeaderNavItem href="/projects">Projects</HeaderNavItem>
      <HeaderNavItem href="/about">About</HeaderNavItem>
    </div>

    <div class="hidden lg:flex lg:justify-self-end">
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