import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import { Image } from '~/components/image'
import { Note } from '~/components/note'

const mdxComponentMap: ComponentMap = {
  Image,
  Note,
}

export interface MdxProps {
  mdx: string
}
export function Mdx({ mdx }: MdxProps) {
  const MdxComponent = useMemo(() => getMDXComponent(mdx), [mdx])
  return <MdxComponent components={mdxComponentMap} />
}
