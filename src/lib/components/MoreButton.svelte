<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements'
  import RightArrowIcon from './icons/RightArrowIcon.svelte'

  let { title, class: className, ...props }: HTMLAnchorAttributes = $props()
</script>

<a {...props} class={['hover:text-accent flex items-center gap-2', className]}>
  <span class="font-heading text-sm font-medium uppercase">{title}</span>
  <RightArrowIcon class="bg-opacity-90 h-5 w-5 rounded-full border border-current bg-white p-1" />
</a>
