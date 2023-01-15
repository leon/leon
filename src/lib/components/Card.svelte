<script lang="ts">
	export let href: string
	export let image: string
	export let title: string
	export let description: string
</script>

<a class="group flex flex-col gap-2" {href} target="_blank" rel="noreferrer">
	<img class="aspect-[16/10] rounded object-cover object-top" src={image} alt="" />
	<h4 class="mt-4 font-heading text-xl font-semibold group-hover:underline">{title}</h4>
	<p>{description}</p>
</a>
