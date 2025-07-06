<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface Props extends HTMLAnchorAttributes {
    image: {
      src: string
      width: number
      height: number
    }
    topic: string
    title: string
    description: string
  }

  let { class: className, ...props }: Props = $props()
</script>

<a {...props} class={['hover:text-accent block transition-colors', className]}>
  {#if props.image}
    <img class="mb-2 block" alt="" {...props.image} />
  {/if}
  <div class="badge">{props.topic}</div>
  <h4 class="font-heading text-2xl font-bold">{props.title}</h4>
  <p class="text-sm">{props.description}</p>
</a>
