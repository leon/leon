import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
	try {
		const articlePath = `../../../content/articles/${params.url}.md`
		const article = await import(articlePath)
		return {
			MdContent: article.default.render().html,
			meta: { ...article.metadata, url: params.url },
		}
	} catch (err) {
		console.log(err)
		throw error(404, err as Error)
	}
}) satisfies PageServerLoad
