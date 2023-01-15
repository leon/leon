import { error } from '@sveltejs/kit'
import { fetchArticles } from '$lib/data'
import type { PageServerLoad } from './$types'

export const csr = false

export const load = (async ({ params }) => {
	try {
		const tag = params.tag
		const articles = await fetchArticles({
			tag,
			sortBy: 'date',
			sortByOrder: 'desc',
		})

		return {
			tag,
			articles,
		}
	} catch (err) {
		throw error(500, err as Error)
	}
}) satisfies PageServerLoad
