<script lang="ts">
	import RightArrowIcon from './icons/RightArrowIcon.svelte'

	export let href: string
	export let title: string
</script>

<a class="flex items-center gap-2 hover:text-accent {$$props.class ?? ''}" {href}>
	<span class="font-heading text-sm font-medium uppercase">{title}</span>
	<RightArrowIcon class="h-5 w-5 rounded-full border border-current bg-white bg-opacity-90 p-1" />
</a>
