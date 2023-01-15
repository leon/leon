import type { Article } from './Article'
import { orderBy } from 'lodash-es'

export interface FetchArticleOptions {
	// filters
	tag?: string

	// sorting
	sortBy?: keyof Article
	sortByOrder?: 'asc' | 'desc'

	// limit
	limit?: number
	offset?: number

	includeModule?: boolean
}
export const fetchArticles = async (options: FetchArticleOptions = {}) => {
	const articles = await Promise.all(
		Object.entries(
			import.meta.glob<Article>('/src/content/articles/*/*.md', {
				import: 'metadata',
			}),
		).map(async ([path, resolver]) => {
			const metadata = await resolver()
			const url = path.replace('/src/content/', '/').slice(0, -3)
			return { ...metadata, url }
		}),
	)
	return filterArticles(articles, options)
}

export const fetchArticlesWithContent = async (options: FetchArticleOptions = {}) => {
	const articles = await Promise.all(
		Object.entries(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			import.meta.glob<{ metadata: Article; default: { render: () => { html: string } } }>(
				'/src/content/articles/*/*.md',
			),
		).map(async ([path, resolver]) => {
			const mod = await resolver()
			const url = path.replace('/src/content/', '/').slice(0, -3)
			const content = mod.default.render().html
			return { ...mod.metadata, url, content }
		}),
	)
	return filterArticles(articles, options)
}

export const fetchArticle = async (url: string) => {
	const articles = await fetchArticlesWithContent()
	return articles.find((article) => article.url === url)
}

function filterArticles(articles: Article[], options: FetchArticleOptions = {}) {
	if (options.sortBy) {
		articles = orderBy(articles, [options.sortBy], [options.sortByOrder ?? 'desc'])
	}

	if (options.tag) {
		articles = articles.filter((article) => article.tags?.includes(options.tag ?? ''))
	}

	if (options.offset) {
		articles = articles.slice(options.offset)
	}

	if (options.limit && options.limit < articles.length && options.limit != -1) {
		articles = articles.slice(0, options.limit)
	}

	return articles
}
