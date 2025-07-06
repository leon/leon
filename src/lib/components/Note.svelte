<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    children?: Snippet
  }
  let { children }: Props = $props()
</script>

<div class="not-prose rounded-md bg-blue-100 p-4">
  {@render children?.()}
</div>
