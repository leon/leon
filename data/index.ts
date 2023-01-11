// export const DEFAULT_CACHE =
//   process.env.NODE_ENV === 'production'
//     ? 'public,max-age=3600,s-maxage=3600,stale-while-revalidate=86400,stale-if-error=86400'
//     : 'private,no-cache'

// vercel max cache is 31 days = 2678400 seconds
export const DEFAULT_CACHE =
  'public,max-age=0,s-maxage=3600,stale-while-revalidate=2678400,stale-if-error=2678400'
export const IMMUTABLE_CACHE = 'public,max-age=31536000,immutable'

export const BASE_URL = 'https://leon.id'
