import { constants } from 'fs'
import fs from 'fs/promises'
import grayMatter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import { dirname, join, posix, relative } from 'path'
import { Meta } from './domain'

/**
 * Returns a list of all files mdx files in a directory
 * @param dir where to look for files
 * @returns a list of all files in this dir
 *
 * @example
 * listMdxFiles('myfolder')
 * file1.mdx
 * file2.mdx
 * mysubfolder/file3.mdx
 */
export async function getMdxFiles(rootPath: string, origin?: string): Promise<string[]> {
  console.log('reading', join(process.cwd(), rootPath))
  try {
    const items = await fs.readdir(join(process.cwd(), rootPath))
    let files: string[] = []
    for (const item of items) {
      const absolute = join(rootPath, item)
      // if we find a directory we recurse into it
      if ((await fs.lstat(absolute)).isDirectory()) {
        files = [...files, ...(await getMdxFiles(absolute, origin ?? rootPath))]
      }
      // only add mdx files to dir
      else if (item.endsWith('.mdx')) {
        files.push(relative(origin ?? rootPath, absolute))
      }
    }
    return files
  } catch (e) {
    return []
  }
}

export async function getMdxFile(rootPath: string, url: string): Promise<string | null> {
  try {
    const file = `${url}.mdx`
    await fs.access(join(rootPath, file), constants.F_OK)
    return file
  } catch {}

  try {
    // retry with index route
    const indexFile = `${url}/index.mdx`
    await fs.access(join(rootPath, indexFile), constants.F_OK)
    return indexFile
  } catch {}

  return null
}

/**
 * Extracts the frontmatter metadata from the file
 * @param contentBase The root directory to read from, will get removed from url
 * @param relativeFilePath The mdx file to extract from
 * @returns an object containing the frontmatter and url
 */
export async function extractMeta<T extends Meta>(
  rootPath: string,
  relativeFilePath: string,
  urlBase?: string,
): Promise<T> {
  const file = await fs.readFile(join(process.cwd(), rootPath, relativeFilePath), 'utf8')
  const { data } = await grayMatter(file)
  const url = posix.join(
    urlBase ?? '',
    relativeFilePath.replace(/\/index\.mdx?$/, '').replace(/\.mdx?$/, ''),
  )
  return {
    url: `/${url}`,
    file: relativeFilePath,
    ...data,
  } as T
}

export async function bundleMdx(
  rootPath: string,
  relativeFilePath: string,
  frontmatter: any = {},
): Promise<string> {
  const source = await fs.readFile(join(process.cwd(), rootPath, relativeFilePath), 'utf8')
  const filePath = join(process.cwd(), rootPath, relativeFilePath)
  const cwd = dirname(filePath)

  const rehypePrism = await import('rehype-prism-plus').then((mod) => mod.default)

  const result = await bundleMDX({
    cwd,
    source,
    globals: {
      frontmatter,
    },
    xdmOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism]
      // options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMdxImages]
      return options
    },
  })

  return result.code
}
