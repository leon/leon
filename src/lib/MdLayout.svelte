<script lang="ts" module>
  import mark from '$lib/components/Note.svelte'
  // eslint-disable-next-line no-import-assign
  export { mark }
</script>

<script lang="ts">
  import type { Snippet } from 'svelte'
  interface Props {
    children?: Snippet
  }
  let { children }: Props = $props()
</script>

{@render children?.()}
