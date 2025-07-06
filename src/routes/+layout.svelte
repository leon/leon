<script lang="ts">
  import '../app.css'
  import '../prism.css'

  import Header from './header.svelte'
  import Footer from './footer.svelte'
  import { siteTitle, siteDescription, siteSchema } from '$lib/data'
  import JsonLD from '$lib/components/JsonLD.svelte'
  import { page } from '$app/state'
  interface Props {
    children?: import('svelte').Snippet
  }

  let { children }: Props = $props()
  let title = $derived(page.data.seoTitle ? `${page.data.seoTitle} | ${siteTitle}` : siteTitle)
  let description = $derived(page.data.seoDescription ?? siteDescription)
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <JsonLD schema={siteSchema} />
</svelte:head>

<Header />
<main class="relative flex flex-grow flex-col">
  {@render children?.()}
</main>
<Footer />
