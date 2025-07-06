<script lang="ts">
  import type { PageProps } from './$types'
  import ArticleBlock from '$lib/components/blocks/ArticleBlock.svelte'
  import IntroBlock from '$lib/components/blocks/IntroBlock.svelte'
  import GradientMorphBlock from './projects/gradient-morph/GradientMorphBlock.svelte'

  let { data }: PageProps = $props()
</script>

<svelte:head>
  <meta property="og:type" content="website" />
</svelte:head>

<IntroBlock />
<GradientMorphBlock />
<ArticleBlock title="Articles" articles={data.articles} moreLink="/articles" />
