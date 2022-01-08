import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'
import type { MetaFunction } from 'remix'

import globalStylesUrl from '~/styles/global.css'
import prismStyles from '~/styles/prism.css'
import tailwindStyles from '../public/build/tailwind.css'
import { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export let links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: globalStylesUrl },
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: prismStyles },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?display=swap&family=Encode+Sans:wght@100..900',
    },
  ]
}

export const meta: MetaFunction = () => {
  return { title: 'Leon Radley' }
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <h1 className="heading-1">There was an error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = 'Oops! Looks like you tried to visit a page that you do not have access to.'
      break
    case 404:
      message = 'Oops! Looks like you tried to visit a page that does not exist.'
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document>
      <Layout>
        <div className="grid h-full place-content-center">
          <h1 className="heading-1">
            {caught.status}: {caught.statusText}
          </h1>
          <p>{message}</p>
        </div>
      </Layout>
    </Document>
  )
}

function Document({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}
