import type { HeadersFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
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
