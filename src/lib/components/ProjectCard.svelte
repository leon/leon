<script lang="ts">
	export let href: string
	export let image: {
		src: string
		width: number
		height: number
	}
	export let topic: string
	export let title: string
	export let description: string
</script>

<a class="block transition-colors hover:text-accent {$$props.class ?? ''}" {href}>
	{#if image}
		<img class="mb-2 block" alt="" {...image} />
	{/if}
	<div class="badge">{topic}</div>
	<h4 class="font-heading text-2xl font-bold">{title}</h4>
	<p class="text-sm">{description}</p>
</a>
