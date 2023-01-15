<script lang="ts">
	import type { Article } from '$lib/data'

	export let article: Article
</script>

<a class="block transition-colors hover:text-accent {$$props.class ?? ''}" href={article.url}>
	<!-- {#if image}
    <img class="mb-2 block" src={image.src} alt={title} {...image} />
  {/if} -->
	<!-- <div class="badge">{topic}</div> -->
	<h4 class="font-heading text-2xl font-semibold">{article.title}</h4>
	<p class="text-sm">{article.description}</p>
</a>
