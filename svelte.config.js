import adapter from '@sveltejs/adapter-auto'
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
			layout: {
				// blog: "./path/to/blog/layout.svelte",
				// article: "./path/to/article/layout.svelte",
				//_: './src/routes/+layout.svelte',
			},
		}),
	],

	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				'/',
				'/articles/*',
				// '/api/posts/page/*',
				// '/blog/category/*/page/',
				// '/blog/category/*/page/*',
				// '/blog/category/page/',
				// '/blog/category/page/*',
				// '/blog/page/',
				// '/blog/page/*',
			],
		},
	},
}

export default config
