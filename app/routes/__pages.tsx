import { Outlet } from 'remix'
import { Prose } from '~/components/prose'

export default function Pages() {
  return (
    <Prose>
      <Outlet />
    </Prose>
  )
}
