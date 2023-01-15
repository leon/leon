<script lang="ts">
	export let href: string
	export let title: string
</script>

<a class="flex items-center p-2 hover:text-accent" {href} {title} target="_blank" rel="noreferrer">
	<slot />
</a>
