import { BASE_URL, fetchArticlesWithContent, IMMUTABLE_CACHE } from '$lib/data'
import type { RequestHandler } from './$types'

// Ensures all pages under this layout (which is all of them) are statically prerendered at build time
export const prerender = true

export const GET = (async () => {
  const lang = 'en'

  const articles = await fetchArticlesWithContent({
    sortBy: 'date',
    sortByOrder: 'desc',
  })

  const items = []
  for (const article of articles) {
    const tags = article.tags?.map((tag) => `<category>${tag}</category>`)
    items.push(`<item>
      <title>${article.title}</title>
      <pubDate>${pubDate(article.date)}</pubDate>
      <description><![CDATA[${article.description}]]></description>
      ${tags?.join('')}
      <link>${BASE_URL}${article.url}</link>
      <guid>${BASE_URL}${article.url}</guid>
    </item>`)
  }
  //<content:encoded><![CDATA[${article.content}]]></content:encoded>

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
    <channel>
      <title>Leon Radley</title>
      <description>Articles by Leon Radley</description>
      <link>${BASE_URL}</link>
      <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
      <language>${lang}</language>
      <sy:updatePeriod>weekly</sy:updatePeriod>
      <lastBuildDate>${pubDate(new Date())}</lastBuildDate>
      ${items.join('')}
    </channel>
    </rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': IMMUTABLE_CACHE,
      'x-content-type-options': 'nosniff',
    },
  })
}) satisfies RequestHandler

function pubDate(date: Date | string) {
  if (typeof date === 'undefined') {
    date = new Date()
  }
  if (typeof date === 'string') {
    date = new Date(date)
  }

  return date.toUTCString()
}
