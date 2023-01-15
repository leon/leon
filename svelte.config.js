import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),

		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [
				// rehypeSlug,
				// rehypeAutolinkHeadings,
			],
			layout: './src/lib/MdLayout.svelte',
		}),
	],

	kit: {
		adapter: adapter(),
		alias: {
			// '$content/*': './src/content/*',
		},
		prerender: {
			concurrency: 4, // render 4 pages in parallel
		},
	},
}

export default config
