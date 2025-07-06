<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface Props extends HTMLAnchorAttributes {
    children?: Snippet
  }

  let { children, ...props }: Props = $props()
</script>

<a {...props} class="hover:text-accent flex items-center p-2" target="_blank" rel="noreferrer">
  {@render children?.()}
</a>
