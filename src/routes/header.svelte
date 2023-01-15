<script lang="ts">
	import HeaderNavItem from '$lib/components/HeaderNavItem.svelte'
	import SocialNav from '$lib/components/SocialNav.svelte'
</script>

<header
	id="top"
	class="relative z-10 bg-white bg-opacity-30 shadow-sm backdrop-blur-lg backdrop-filter"
>
	<nav
		class="
      mt-4 flex grid-cols-3 flex-col
      items-center lg:mt-0 lg:grid lg:h-16 lg:px-4
    "
	>
		<a
			class="flex items-center gap-4 font-heading text-primary-dark no-underline hover:text-primary-light hover:no-underline"
			href="/"
		>
			<span class="text-2xl font-semibold">Leon Radley</span>
		</a>
		<div class="flex justify-self-center">
			<HeaderNavItem href="/">Home</HeaderNavItem>
			<HeaderNavItem href="/articles">Articles</HeaderNavItem>
			<HeaderNavItem href="/projects">Projects</HeaderNavItem>
			<HeaderNavItem href="/about">About</HeaderNavItem>
		</div>

		<div class="hidden lg:flex lg:justify-self-end">
			<SocialNav />
		</div>
	</nav>
</header>
