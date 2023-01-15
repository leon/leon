<script lang="ts">
	import '../app.css'
	import '../prism.css'

	import Header from './header.svelte'
	import Footer from './footer.svelte'
	import { siteTitle, siteDescription, siteSchema } from '$lib/data'
	import JsonLD from '$lib/components/JsonLD.svelte'

	import { page } from '$app/stores'
	$: title = $page.data.seoTitle ? `${$page.data.seoTitle} | ${siteTitle}` : siteTitle
	$: description = $page.data.seoDescription ?? siteDescription
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
	<slot />
</main>
<Footer />
