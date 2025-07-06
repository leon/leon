<script lang="ts">
  interface Props {
    tags?: string[]
    url?: string
  }
  let { tags, url }: Props = $props()
</script>

{#if tags}
  <div class="my-2 flex gap-1">
    {#each tags as tag (tag)}
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
