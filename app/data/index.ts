export const DEFAULT_CACHE =
  process.env.NODE_ENV === 'production'
    ? 'public,max-age=3600,s-maxage=3600,stale-while-revalidate=86400,stale-if-error=86400'
    : 'private, no-cache'
