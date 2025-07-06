<script lang="ts">
  import TagList from './TagList.svelte'
  import Time from './Time.svelte'
  import type { Article } from '$lib/data'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface Props extends HTMLAnchorAttributes {
    article: Article
  }
  let { article, class: className, ...props }: Props = $props()
</script>

<a {...props} class={['hover:text-accent block transition-colors', className]} href={article.url}>
  <h4 class="font-heading text-2xl font-semibold">{article.title}</h4>
  <div class="flex items-center gap-2">
    <Time date={article.date} />
    <TagList tags={article.tags} />
  </div>

  <p class="text-sm">{article.description}</p>
</a>
