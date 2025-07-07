import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { fetchArticle } from '$lib/data'
import { randomColor } from '$lib/utils'

export const csr = false

export const load = (async ({ params }) => {
  const article = await fetchArticle(`/articles/${params.slug}`)
  if (!article) {
    throw error(404, 'Article not found')
  }

  return {
    seoTitle: article.title,
    seoDescription: article.description,
    article,
    randomColor: randomColor(),
  }
}) satisfies PageServerLoad
