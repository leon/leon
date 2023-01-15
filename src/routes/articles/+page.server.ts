import { error } from '@sveltejs/kit'
import { fetchArticles } from '$lib/data'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	try {
		const articles = await fetchArticles()

		return {
			articles,
		}
	} catch (err) {
		throw error(500, err as Error)
	}
}) satisfies PageServerLoad
