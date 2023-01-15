<script lang="ts">
	import type { PageData } from './$types'
	import Prose from '$lib/components/Prose.svelte'
	import ArticleHeroBlock from '$lib/components/blocks/ArticleHeroBlock.svelte'
	export let data: PageData

	const article = data
</script>

<svelte:head>
	<title>{article.title}</title>
	<meta property="og:title" content={article.title} />
	<meta name="twitter:title" content={article.title} />
	<meta data-key="description" name="description" content={article.description} />
	<meta property="og:description" content={article.description} />
	<meta property="og:type" content="article" />
	{#if article.image}
		<meta property="og:image" content={article.image.src} />
		{#if article.image.width}
			<meta property="og:image:width" content={article.image.width.toFixed(0)} />
		{/if}
		{#if article.image.height}
			<meta property="og:image:height" content={article.image.height.toFixed(0)} />
		{/if}
	{/if}
</svelte:head>

<Prose>
	<article>
		{#if !article.customHeader}
			<ArticleHeroBlock {article} />
		{/if}
		{@html article.content}
	</article>
</Prose>
