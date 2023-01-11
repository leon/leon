import { getMdxFiles, extractMeta } from './mdx.server'

describe('getMdxFiles', () => {
  it('should read mdx files from test folder', async () => {
    const files = await getMdxFiles('data/tests/articles')
    expect(files).toStrictEqual(['article-1.mdx', 'topic-1/topic-1-article-1.mdx'])
  })
})

describe('extractMeta', () => {
  it('should parse mdx file frontmatter into Meta Object', async () => {
    const meta = await extractMeta('data/tests/articles', 'article-1.mdx')
    expect(meta).toStrictEqual({
      url: 'article-1',
      title: 'Article 1',
    })
  })
})
