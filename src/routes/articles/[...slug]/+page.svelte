<script lang="ts">
	import type { PageData } from './$types'
	import Prose from '$lib/components/Prose.svelte'
	import JsonLD from '$lib/components/JsonLD.svelte'
	import ArticleHeroBlock from '$lib/components/blocks/ArticleHeroBlock.svelte'
	import type { Article, WithContext } from 'schema-dts'

	export let data: PageData

	const article = data.article

	const articleSchema: WithContext<Article> = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		'@id': `${article.url}#article`,
		url: article.url,
		name: article.title,
		description: article.description,
	}
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	{#if article.tags}
		{#each article.tags as tag}
			<meta property="og:article:tag" content={tag} />
		{/each}
	{/if}
	{#if article.image}
		<meta property="og:image" content={article.image.src} />
		{#if article.image.width}
			<meta property="og:image:width" content={article.image.width.toFixed(0)} />
		{/if}
		{#if article.image.height}
			<meta property="og:image:height" content={article.image.height.toFixed(0)} />
		{/if}
	{/if}
	<JsonLD schema={articleSchema} />
</svelte:head>

<Prose>
	<article>
		{#if !article.customHeader}
			<ArticleHeroBlock {article} />
		{/if}
		{@html article.content}
	</article>
</Prose>
