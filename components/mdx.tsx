import { Image } from '~/components/image'
import { Note } from '~/components/note'

export const mdxComponentMap = {
  Image,
  Note,
}

// export interface MdxProps {
//   mdx: string
// }
// export function Mdx({ mdx }: MdxProps) {
//   const mdxState = useAsync(async () => {
//     const { run } = await import('@mdx-js/mdx')
//     const module = await run(mdx, runtime)
//     return module.default
//   }, [mdx])

//   if (mdxState.loading) {
//     return null
//   }

//   const MdxComponent = mdxState.value
//   return <MdxComponent components={mdxComponentMap} />
// }
