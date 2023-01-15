<script lang="ts">
	import TagList from './TagList.svelte'
	import Time from './Time.svelte'
	import type { Article } from '$lib/data'

	export let article: Article
</script>

<a class="block transition-colors hover:text-accent {$$props.class ?? ''}" href={article.url}>
	<h4 class="font-heading text-2xl font-semibold">{article.title}</h4>
	<div class="flex items-center gap-2">
		<Time date={article.date} />
		<TagList tags={article.tags} />
	</div>

	<p class="text-sm">{article.description}</p>
</a>
