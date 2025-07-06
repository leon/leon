<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: Snippet
  }
  let { class: className, children, ...props }: Props = $props()
</script>

<div
  {...props}
  class={[
    'prose container',
    'md:prose-lg lg:prose-xl flex-grow',
    'prose-headings:font-heading',
    'prose-a:text-accent-dark',
    className,
  ]}
>
  {@render children?.()}
</div>
