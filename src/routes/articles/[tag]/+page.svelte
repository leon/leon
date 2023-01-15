<script lang="ts">
	import type { PageData } from './$types'
	import ArticleBlock from '$lib/components/blocks/ArticleBlock.svelte'
	import ColorsHeroBlock from '$lib/components/blocks/ColorsHeroBlock.svelte'

	export let data: PageData
	$: tag = `${data.tag.charAt(0).toUpperCase()}${data.tag.slice(1)}`
	$: title = `${tag} Articles | Leon Radley`
	$: description = `Articles relating to ${tag}`
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta data-key="description" name="description" content={description} />
	<meta property="og:description" content={description} />
</svelte:head>

<ColorsHeroBlock title={data.tag} />

<ArticleBlock articles={data.articles} />
