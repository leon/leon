<script lang="ts">
	import type { PageData } from './$types'
	import ArticleBlock from '$lib/components/blocks/ArticleBlock.svelte'
	import ColorsHeroBlock from '$lib/components/blocks/ColorsHeroBlock.svelte'

	export let data: PageData
	$: tag = `${data.tag.charAt(0).toUpperCase()}${data.tag.slice(1)}`
</script>

<svelte:head>
	<title>{tag} Articles | Leon Radley</title>
</svelte:head>

<ColorsHeroBlock title={data.tag} />

<ArticleBlock articles={data.articles} />
