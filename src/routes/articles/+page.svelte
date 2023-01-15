<script lang="ts">
	import type { PageData } from './$types'
	import ArticleBlock from '$lib/components/blocks/ArticleBlock.svelte'
	import RandomImageBlock from '$lib/components/blocks/RandomImageBlock.svelte'

	import deskImg from '../../content/images/bgs/desk.jpg'
	import pcImg from '../../content/images/bgs/pc.jpg'
	import reactImg from '../../content/images/bgs/react.jpg'

	export let data: PageData
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>

<RandomImageBlock images={[deskImg, pcImg, reactImg]} />

<ArticleBlock title="Articles" articles={data.articles} />
