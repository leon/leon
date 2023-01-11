import { BASE_URL } from '~/data'

export default async function Head() {
  const title = 'Gradient Morph | Leon Radley'
  const description =
    'A web component, web app and figma plugin to generate gradient color morphs backgrounds and videos.'
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${BASE_URL}/projects/gradient-morph`} />

      <script
        type="module"
        async
        src="https://cdn.skypack.dev/pin/@leon/gradient-morph@v1.2.3-0WlrIHwjAdOZr9MZJ0As/mode=imports,min/optimized/@leon/gradient-morph.js"
      ></script>
    </>
  )
}
