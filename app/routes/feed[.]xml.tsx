import type { LoaderFunction } from '@remix-run/node'
import { renderToString } from 'react-dom/server'
import { Mdx } from '~/components/mdx'
import { ARTICLE_CACHE, getArticle, getArticles } from '~/data/articles'

const BASE_URL = 'https://leon.id'

export const loader: LoaderFunction = async () => {
  const lang = 'en'

  let articles = await getArticles({
    sortBy: 'date',
    sortByOrder: 'desc',
  })

  articles = articles.filter((article) => article.draft !== true)

  const items = []
  for (const article of articles) {
    const articleWithMdx = await getArticle(article.url)
    const html = renderToString(<Mdx mdx={articleWithMdx?.mdx!} />)
    items.push(`<item>
      <title>${article.title}</title>
      <pubDate>${pubDate(article.date)}</pubDate>
      <description><![CDATA[${article.description}]]></description>
      <content:encoded><![CDATA[${html}]]></content:encoded>
      <link>${BASE_URL}${article.url}</link>
      <guid isPermaLink="false">${BASE_URL}${article.url}</guid>
    </item>`)
  }

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
    <channel>
      <title>leon.id</title>
      <description>Leon Radley - Blog</description>
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
      'Cache-Control': ARTICLE_CACHE,
      'x-content-type-options': 'nosniff',
    },
  })
}

/**
 * Get an RSS pubDate from a Javascript Date instance.
 * @param Date - optional
 * @return String
 *
 * from https://gist.github.com/samhernandez/5260558
 * more about [RFC822](https://datatracker.ietf.org/doc/html/rfc822)
 */
function pubDate(date: Date | string) {
  if (typeof date === 'undefined') {
    date = new Date()
  }

  const pieces = date.toString().split(' ')
  const offsetTime = pieces?.[5]?.match(/[-+]\d{4}/)
  const offset = offsetTime ? offsetTime : pieces[5]
  const parts = [pieces[0] + ',', pieces[2], pieces[1], pieces[3], pieces[4], offset]

  return parts.join(' ')
}
