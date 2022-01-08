import fs from 'fs/promises'
import grayMatter from 'gray-matter'
import { join, posix, relative } from 'path'
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
  try {
    const items = await fs.readdir(rootPath)
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
    const exists = await fs.lstat(join(rootPath, file))
    console.log('getMdxFile', exists.isFile(), join(rootPath, file))
    if (exists.isFile()) {
      return file
    }

    // retry with index route
    const indexFile = `${url}/index.mdx`
    const indexExists = await fs.lstat(join(rootPath, indexFile))
    console.log('getMdxFile index', exists.isFile(), join(rootPath, indexFile))
    if (indexExists.isFile()) {
      return indexFile
    }

    return null
  } catch (e) {
    return null
  }
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
  const file = await fs.readFile(join(rootPath, relativeFilePath), 'utf8')
  const segments = relativeFilePath.split(posix.sep)
  // remix can contain __layout directories, that are not rendered in the url, here we remove them
  const removedLayoutSegments = segments.filter((s) => !s.startsWith('__')).join('/')
  const { data } = await grayMatter(file)
  const url = posix.join(
    urlBase ?? '',
    removedLayoutSegments.replace(/\/index\.mdx?$/, '').replace(/\.mdx?$/, ''),
  )
  return {
    url: `/${url}`,
    ...data,
  } as T
}
