/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  browserBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'api/_build',
  ignoredRouteFiles: ['.*'],

  // mdx: async (filename) => {
  //   const [rehypePrism] = await Promise.all([
  //     import('rehype-prism-plus').then((mod) => mod.default),
  //   ])
  //   return {

  //     // remarkPlugins: [remarkToc],
  //     rehypePlugins: [rehypePrism],
  //   }
  // },
}
