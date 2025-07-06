<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    children?: Snippet
  }
  let { children }: Props = $props()
</script>

<div class="grid place-items-center gap-4">
  <h1 class="heading-1 text-6xl">404</h1>
  <p class="text-xl">{@render children?.()}</p>
</div>
