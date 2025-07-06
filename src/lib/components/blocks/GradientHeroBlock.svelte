<script lang="ts">
  import Gradient from '../Gradient.svelte'

  interface Props {
    title: string
  }
  let { title }: Props = $props()
</script>

<Gradient
  class={[
    'no-prose header-offset-mobile lg:header-offset-desktop relative',
    'flex min-h-[30vh] items-end justify-center',
  ]}
>
  <h1 class="heading-1 my-16 capitalize">{title}</h1>
</Gradient>
