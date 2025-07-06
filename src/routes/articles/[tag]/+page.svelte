<script lang="ts">
  import type { PageData } from './$types'
  import ArticleBlock from '$lib/components/blocks/ArticleBlock.svelte'
  import ColorsHeroBlock from '$lib/components/blocks/ColorsHeroBlock.svelte'

  interface Props {
    data: PageData
  }
  let { data }: Props = $props()

  let tag = $derived(`${data.tag.charAt(0).toUpperCase()}${data.tag.slice(1)}`)
  let title = $derived(`${tag} Articles | Leon Radley`)
  let description = $derived(`Articles relating to ${tag}`)
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta data-key="description" name="description" content={description} />
  <meta property="og:description" content={description} />
</svelte:head>

<ColorsHeroBlock title={data.tag} />

<ArticleBlock articles={data.articles} />
