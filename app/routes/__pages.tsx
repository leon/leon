import { HeadersFunction, Outlet } from 'remix'
import { Prose } from '~/components/prose'
import { DEFAULT_CACHE } from '~/data'

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': DEFAULT_CACHE,
  }
}

export default function Pages() {
  return (
    <Prose>
      <Outlet />
    </Prose>
  )
}
