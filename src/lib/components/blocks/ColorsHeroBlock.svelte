<script lang="ts">
  import { randomColor } from '$lib/utils'

  interface Props {
    title: string
    class: string
  }
  let { class: className, title }: Props = $props()

  const randomColorStr = randomColor()
</script>

<div
  class={[
    'no-prose header-offset-mobile lg:header-offset-desktop relative',
    'flex min-h-[30vh] items-end justify-center',
    'bg-cover bg-no-repeat',
    className,
  ]}
  style:background-color={randomColorStr}
>
  <h1 class="heading-1 my-16 capitalize">{title}</h1>
</div>
<!-- style:background-image="url(/backgrounds/light-glow.svg)" -->
