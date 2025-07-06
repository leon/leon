<script lang="ts">
  import Gradient from '../Gradient.svelte'
</script>

<Gradient class="header-offset-mobile lg:header-offset-desktop relative">
  <div class="relative container flex max-w-screen-xl grow">
    <div
      class={[
        'grid',
        'min-h-[40vh] grow grid-flow-row place-items-center',
        'md:auto-cols-fr md:grid-flow-col',
      ]}
    >
      <img
        class="m-8 block h-auto w-full max-w-xs rounded-full object-contain shadow-md"
        src="/images/leon-radley.jpg"
        alt="Leon Radley"
        width={320}
        height={320}
      />
      <div class="my-8">
        <h1 class="heading-1">Hello, I'm Leon 👋</h1>
        <p class="text-lg">I love tech, coding and everything web.</p>
        <p class="text-lg">
          Here you will find articles, labs and projects relating to web development, 3d and
          programming in general.
        </p>
      </div>
    </div>
  </div>
</Gradient>
