import { run } from '@mdx-js/mdx'
import { NextApiRequest, NextApiResponse } from 'next'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import * as runtime from 'react/jsx-runtime'
import { mdxComponentMap } from '~/components/mdx'
import { BASE_URL, IMMUTABLE_CACHE } from '~/data'
import { getArticle, getArticles } from '~/data/articles'

// export const config = {
//   runtime: 'edge',
// }

export default async function feedApi(req: NextApiRequest, res: NextApiResponse) {
  const lang = 'en'

  let articles = await getArticles({
    sortBy: 'date',
    sortByOrder: 'desc',
  })

  articles = articles.filter((article) => article.draft !== true)

  const items = []
  for (const article of articles) {
    const articleWithMdx = await getArticle(article.url)
    const { default: MdxArticle } = await run(String(articleWithMdx?.mdx), runtime)
    const html = renderToString(createElement(MdxArticle, { components: mdxComponentMap }))
    const categories = article.tags?.map((tag) => `<category>${tag}</category>`)
    items.push(`<item>
      <title>${article.title}</title>
      <pubDate>${pubDate(article.date)}</pubDate>
      <description><![CDATA[${article.description}]]></description>
      ${categories?.join('')}
      <content:encoded><![CDATA[${html}]]></content:encoded>
      <link>${BASE_URL}${article.url}</link>
      <guid>${BASE_URL}${article.url}</guid>
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

  res
    .setHeader('Content-Type', 'application/xml; charset=utf-8')
    .setHeader('Cache-Control', IMMUTABLE_CACHE)
    .setHeader('x-content-type-options', 'nosniff')
    .send(rss)
}

/**
 * Get an RSS pubDate from a Javascript Date instance.
 */
function pubDate(date: Date | string) {
  if (typeof date === 'undefined') {
    date = new Date()
  }
  if (typeof date === 'string') {
    date = new Date(date)
  }

  return date.toUTCString()
}
