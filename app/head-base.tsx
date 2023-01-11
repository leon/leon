export default function HeadBase() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      <link
        rel="preload"
        href="/fonts/mona-sans.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link rel="alternate" type="application/rss+xml" title="RSS" href="/api/feed" />
    </>
  )
}
