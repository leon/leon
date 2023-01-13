import type { Article } from './Article'

export const fetchArticles = async ({ category = '' } = {}) => {
	const articles = await Promise.all(
		Object.entries(import.meta.glob<{ metadata: Article }>('/src/content/articles/*/*.md')).map(
			async ([path, resolver]) => {
				const { metadata } = await resolver()
				const url = path.replace('/src/content/', '/').slice(0, -3)
				// console.log('url', url)
				return { ...metadata, url }
			},
		),
	)

	let sortedArticles = articles.sort((a, b) => b.date?.localeCompare(a.date))

	if (category) {
		sortedArticles = sortedArticles.filter((article) => article.categories?.includes(category))
	}

	// if (offset) {
	// 	sortedArticles = sortedArticles.slice(offset)
	// }

	// if (limit && limit < sortedArticles.length && limit != -1) {
	// 	sortedArticles = sortedArticles.slice(0, limit)
	// }

	// sortedArticles = sortedArticles.map((post) => ({
	// 	title: post.title,
	// 	slug: post.slug,
	// 	intro: post.intro,
	// 	// coverImage: post.coverImage,
	// 	// coverWidth: post.coverWidth,
	// 	// coverHeight: post.coverHeight,
	// 	// date: post.date,
	// 	// categories: post.categories,
	// }))

	return sortedArticles
}
