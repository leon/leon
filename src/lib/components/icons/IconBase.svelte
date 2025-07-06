<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { SVGAttributes } from 'svelte/elements'

  interface Props extends SVGAttributes<SVGSVGElement> {
    children?: Snippet
  }
  let { class: className, children, ...props }: Props = $props()
</script>

<svg
  {...props}
  class={className ?? 'w-6'}
  role="img"
  aria-hidden={false}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
>
  {@render children?.()}
</svg>
