export interface AboutPageProps {}
export default function AboutPage({}: AboutPageProps) {
  return (
    <div className="container max-w-screen-lg">
      <h1 className="heading-1">About Me - Leon Radley</h1>
      <p>
        I am the CTO for{' '}
        <a
          className="font-bold"
          href="https://www.wec360.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          wec360°
        </a>
        , a Swedish prop tech company that is creating a presentation platform for real estate.
        There I spend my days invisioning new ways to present real estate using 3D and 2D, and also
        make sure our platform and projects are running great.
      </p>
      {/* <p>Here you can see one of our embed products</p>
        <div className="mb-8">
          <iframe
            src="https://view.wec360.com/demo/photorealism-bundle-exterior"
            width="100%"
            height="600"
            frameBorder={0}
            allow="fullscreen; camera; gyroscope; accelerometer; magnetometer"
          ></iframe>
        </div> */}

      <h2 className="heading-1">Hobbies</h2>
      <p>I have a lot of hobbies, and try to fit them in as much as possible.</p>
      <ul className="list-disc m-4 pl-5">
        <li>Disc Golf</li>
        <li>Mountain biking</li>
        <li>Beer brewing</li>
        <li>Motorcykles</li>
      </ul>
    </div>
  )
}
