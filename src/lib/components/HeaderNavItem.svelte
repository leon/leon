<script lang="ts">
	import { page } from '$app/stores'
	export let href: string
	$: isActive = href.length > 2 ? $page.url.pathname.startsWith(href) : false
</script>

<a
	class="
    flex items-center border-b-4
    border-opacity-50 p-4 font-heading text-sm
    font-medium uppercase hover:border-gray-200
    {isActive ? 'border-white' : 'border-transparent'}
  "
	{href}
>
	<slot />
</a>
