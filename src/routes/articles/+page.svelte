<script lang="ts">
	import ArticleList from '$lib/components/ArticleList.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>

<h1>Articles</h1>

<ArticleList articles={data.articles} />
