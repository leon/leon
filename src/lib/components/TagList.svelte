<script lang="ts">
	export let tags: string[] | undefined = undefined
	export let url: string | undefined = undefined
</script>

{#if tags}
	<div class="my-2 flex gap-1">
		{#each tags as tag}
			{#if url}
				<a class="badge" href="{url}/{tag}">
					{tag}
				</a>
			{:else}
				<div class="badge">
					{tag}
				</div>
			{/if}
		{/each}
	</div>
{/if}
