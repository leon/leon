<script lang="ts">
  import Card from '$lib/components/Card.svelte'
  import Note from '$lib/components/Note.svelte'

  import figmaImg from './gradient-morph-figma.jpg'
  import webComponentImg from './gradient-morph-web-component.jpg'
  import appImg from './gradient-morph.jpg'

  const title = 'Gradient Morph'
  const description =
    'A web component, web app and figma plugin to generate gradient color morphs backgrounds and videos.'
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="/projects/gradient-morph" />

  <script
    type="module"
    async
    src="https://cdn.skypack.dev/pin/@leon/gradient-morph@v1.2.3-0WlrIHwjAdOZr9MZJ0As/mode=imports,min/optimized/@leon/gradient-morph.js"
  ></script>
</svelte:head>

<div class="header-offset-mobile lg:header-offset-desktop bg-[#cc0c39] !pt-0">
  <gradient-morph
    class="grid min-h-[50vh] place-items-center"
    colors="#cc0c39,#e6781e,#c8cf02,#f8fcc1,#1693a7"
    colorcoordx="80"
  >
    <h1 class="heading-1 text-white">Gradient Morph</h1>
  </gradient-morph>
</div>

<div
  class="
		prose md:prose-lg lg:prose-xl
		prose-headings:font-heading container my-12
		flex-grow
	"
>
  <p class="text-xl">
    I wanted to learn more about shaders, and I also wanted to know more about creating plugins for
    figma, so why not try doing both.
  </p>
  <p>
    I got inspired after watching this excellent <a
      href="https://www.youtube.com/watch?v=LW9d2cqIHb4"
      target="_blank"
      rel="noreferrer">stream by Yuri Artiukh.</a
    >
  </p>
  <h3>A short explanation of how it works</h3>
  <p>
    The 3d scene contains a plane which consists of 256x256 verticies. We animate these verticies up
    and down using random noise and passed in options. the plane now looks like rolling waves
    instead of a flat plane.
  </p>
  <Note>
    If you use your mouse in the editor, you can tilt the camera and see how the waves roll over the
    plane.
  </Note>
  <p>
    By looping though the five colors we pass in as options we mix between them again using the
    Simplex Random Noise function, until output it to the fragment shader to be rendered.
  </p>
</div>
<div class="container my-12 grid grid-cols-1 gap-8 md:grid-cols-3">
  <Card
    href="https://www.npmjs.com/package/@leon/gradient-morph"
    image={webComponentImg}
    title="Web Component"
    description="A web component that you can use in your own projects."
  />
  <Card
    href="https://www.figma.com/community/plugin/1181005273495603975/Gradient-Morph"
    image={figmaImg}
    title="Figma Plugin"
    description="A Figma plugin for generating gradient morphs directly in figma."
  />
  <Card
    href="https://gradient-morph.leonradley.com"
    image={appImg}
    title="Web App"
    description="A web app for generating gradient morphs. You can even generate videos!"
  />
</div>
