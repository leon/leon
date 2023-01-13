<script lang="ts">
	import type { Article } from '$lib/data'
	export let articles: Article[] = []
</script>

<ul class="articles-list">
	{#each articles as article}
		<li>
			<article>
				<a href={article.url}>
					<!-- <img
						src={article.coverImage}
						alt=""
						width={article.coverWidth}
						height={article.coverHeight}
						style="ratio: {article.coverWidth} / {article.coverHeight}"
					/> -->
					<h2>
						{article.title}
					</h2>
				</a>
			</article>

			<!-- <p>{article.excerpt}</p> -->
		</li>
	{/each}
</ul>
