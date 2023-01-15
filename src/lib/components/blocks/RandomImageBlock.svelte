<script lang="ts">
	import { randomValue } from '$lib/utils'

	export let title: string | undefined = undefined
	export let images: string[]

	$: randomImage = randomValue(images)
</script>

<div
	class="
  not-prose w-prose-full header-offset-mobile lg:header-offset-desktop relative flex
  min-h-[50vh] items-end justify-center
  {$$restProps.class}
"
>
	<img
		class="absolute h-full w-full object-cover"
		src={randomImage}
		alt={title ?? 'Hero Image'}
		width={2048}
		height={1024}
	/>
	{#if title}
		<div class="z-10 my-8 flex flex-col items-center">
			<h1 class="heading-1 text-white">{title}</h1>
		</div>
	{/if}
</div>
