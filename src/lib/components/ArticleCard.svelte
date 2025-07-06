<script lang="ts">
  import type { Article } from '$lib/data'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface Props extends HTMLAnchorAttributes {
    article: Article
  }

  let { article, class: className, ...props }: Props = $props()
</script>

<a {...props} class={['hover:text-accent block transition-colors', className]} href={article.url}>
  <!-- {#if image}
    <img class="mb-2 block" src={image.src} alt={title} {...image} />
  {/if} -->
  <!-- <div class="badge">{topic}</div> -->
  <h4 class="font-heading text-2xl font-semibold">{article.title}</h4>
  <p class="text-sm">{article.description}</p>
</a>
