<script lang="ts">
  import GithubIcon from './icons/GithubIcon.svelte'
  import LinkedInIcon from './icons/LinkedInIcon.svelte'
  import MastodonIcon from './icons/MastodonIcon.svelte'
  import TwitterIcon from './icons/TwitterIcon.svelte'
  import SocialNavItem from './SocialNavItem.svelte'
</script>

<SocialNavItem href="https://github.com/leon" title="Visit my Github Page">
  <GithubIcon />
</SocialNavItem>
<SocialNavItem href="https://www.twitter.com/leonradley" title="Visit my Twitter Stream">
  <TwitterIcon />
</SocialNavItem>
<SocialNavItem href="https://hachyderm.io/@leonradley" title="Visit my Mastodon Stream">
  <MastodonIcon />
</SocialNavItem>
<SocialNavItem href="https://www.linkedin.com/in/leonradley/" title="Visit my LinkedIn Page">
  <LinkedInIcon />
</SocialNavItem>
