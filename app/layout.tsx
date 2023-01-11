import clsx from 'clsx'
import localFont from '@next/font/local'
import { Header } from './header'
import { Footer } from './footer'

import './styles/styles.css'
import './styles/prism.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="relative flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
