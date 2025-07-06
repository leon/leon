<script lang="ts">
  import { page } from '$app/state'
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes } from 'svelte/elements'
  interface Props extends HTMLAnchorAttributes {
    children?: Snippet
  }
  let { href, children, ...props }: Props = $props()

  let isActive = $derived(href && href.length > 2 ? page.url.pathname.startsWith(href) : false)
</script>

<a
  {...props}
  class={[
    'flex items-center border-b-4',
    'border-opacity-50 font-heading p-4 text-sm',
    'font-medium uppercase hover:border-gray-200',
    isActive ? 'border-white' : 'border-transparent',
  ]}
  {href}
>
  {@render children?.()}
</a>
