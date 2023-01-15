<script lang="ts">
	import ArticleItem from '$lib/components/ArticleItem.svelte'
	import MoreButton from '$lib/components/MoreButton.svelte'
	import type { Article } from '$lib/data'

	export let title: string | undefined = undefined
	export let articles: Article[]
	export let moreLink: string | undefined = undefined
</script>

<div class="container my-12 max-w-prose">
	{#if title || moreLink}
		<h2 class="heading-2 flex items-center justify-between">
			<span class="capitalize">{title}</span>
			{#if moreLink}
				<MoreButton class="hidden md:flex" href={moreLink} title="View More Articles" />
			{/if}
		</h2>
	{/if}
	<div class="mt-8 flex flex-col gap-8">
		{#each articles as article}
			<ArticleItem {article} />
		{/each}

		{#if moreLink}
			<MoreButton
				class="mt-8 justify-self-end md:hidden"
				href={moreLink}
				title="View More Articles"
			/>
		{/if}
	</div>
</div>
