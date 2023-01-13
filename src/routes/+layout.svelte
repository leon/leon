<script context="module">
	import mark from '$lib/components/Note.svelte'
	export { mark }
</script>

<script lang="ts">
	import '../app.css'
</script>

<main class="relative flex-grow">
	<slot />
</main>
