import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { fetchArticles } from '$lib/data'

export const load = (async ({ params }) => {
	try {
		const articles = await fetchArticles()

		return {
			articles,
		}
	} catch (err) {
		throw error(500, err as Error)
	}
}) satisfies PageServerLoad
