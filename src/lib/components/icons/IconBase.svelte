<script lang="ts">
	export let viewBox: string
</script>

<svg
	class={$$props.class ?? 'w-6'}
	role="img"
	aria-hidden={false}
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	{viewBox}
>
	<slot />
</svg>
