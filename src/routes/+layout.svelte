<script lang="ts">
	import '../app.css'
	import '../prism.css'

	import Header from './header.svelte'
	import Footer from './footer.svelte'
</script>

<Header />
<main class="relative flex flex-grow flex-col">
	<slot />
</main>
<Footer />
