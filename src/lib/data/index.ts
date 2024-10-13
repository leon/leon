export * from './Article'
export * from './fetchArticles'
export * from './ImageRef'
export * from './seo'

export const BASE_URL = 'https://leonradley.com'

export const DEFAULT_CACHE =
	'public,max-age=0,s-maxage=3600,stale-while-revalidate=2678400,stale-if-error=2678400'
export const IMMUTABLE_CACHE = 'public,max-age=31536000,immutable'
