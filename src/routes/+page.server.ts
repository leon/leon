import { fetchArticles } from '$lib/data'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async () => {
  try {
    const articles = await fetchArticles({
      limit: 4,
      sortBy: 'date',
      sortByOrder: 'desc',
    })

    return {
      articles,
    }
  } catch (err) {
    throw error(500, err as Error)
  }
}) satisfies PageServerLoad
