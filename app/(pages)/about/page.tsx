import { RandomImageBlock } from '~/blocks/random-image.block'

import fieldImg from '~/content/images/house/field.jpg'
import rainbowImg from '~/content/images/house/rainbow.jpg'
import winterImg from '~/content/images/house/winter.jpg'

export default function AboutPage() {
  return (
    <>
      <RandomImageBlock
        className="mb-8"
        images={[fieldImg, rainbowImg, winterImg]}
        title="About Me"
      />

      <article>
        <p>I&apos;m born and raised in Sweden in the eighties.</p>
        <p>
          It all started when my mom went to art collage in Brighton, England. Fell in love with my
          eccentric dad who was working as the ceramics teacher.
        </p>
        <p>One thing led to another which led to them moving to Sweden to have me.</p>

        <h2>Where my tech journey started</h2>
        <p>
          I hav always been interested in technology and got my first computer at the age of 12.
        </p>

        <p>
          At first it was a lot to learn, back then there was no internet and I spent a lot of time
          playing <a href="https://en.wikipedia.org/wiki/Doom_(1993_video_game)">Doom</a>,{' '}
          <a href="https://en.wikipedia.org/wiki/Quake_(video_game)">Quake</a>,{' '}
          <a href="https://en.wikipedia.org/wiki/Heretic_(video_game)">Heretic</a>.
        </p>
        <p>
          As soon as I got my first 56-kbit modem I was fascinated by the internet and spent a lot
          of time creating mix cds, playing with photoshop and wanting to know how everything
          worked.
        </p>
        <p>
          I learned <a href="https://en.wikipedia.org/wiki/Adobe_Flash">Adobe Flash</a> and got into{' '}
          <a href="https://en.wikipedia.org/wiki/Adobe_Dreamweaver">Adobe Dreamweaver</a>.
        </p>
        <p>
          Somewhere along the way I figured out I was quite good at computers, always helping
          friends and family, and always wanting to learn more, I might be on to something here...
        </p>

        <h2>School</h2>

        <p>I first went to a collage which was aimed at welding, cnc, pneumatics.</p>
        <p>
          But after a year I dropped out and switched to a college focusing on media, graphic
          design, photo and music.
        </p>

        <h2>Work</h2>
        <p>
          My first job was as an apprentice at a local print / photo studio. I worked with digital
          photography, photoshop and layout.
        </p>

        <p>I then worked as the IT-guy at a telecom firm.</p>
        <p>
          Here I became a certified network technician, learned c#, programmed a bunch of internal
          tools and worked with creating ads for the newspaper. In the night time I was hacking on
          javascript and getting into MooTools.
        </p>

        <p>The I started a firm together a couple of friends to work as web consultants.</p>
        <p>
          It was a lot of fun, but not economically stable, so when it was time for me to start a
          family, I took a job as a web developer at a local firm.
        </p>

        <p>
          Here I worked with creating homepages / intranets in Wordpress, EpiServer, JQuery /
          MooTools. As the years progressed we where building more advanced web apps and e-commerse
          solutions.
        </p>
        <p>
          But after 8 years being in the consulting business, always having to think about deadlines
          and money I felt it was time for a change.
        </p>

        <p>
          I found a new job working at <a href="https://www.wec360.com">wec360°</a> building a real
          estate visualization platform. It was fun to work with a SAAS product and I learned a lot
          about 3D, WebGL, and building a product from scratch.
        </p>
        <p>I worked my way up the ranks and I&apos;m now the CTO.</p>

        <p>
          It&apos;s hard to fathom that I&apos;ve been in the industry for over 20 years. It feels
          like I still have a lot to learn, but I guess that is never going to change.
        </p>
      </article>
    </>
  )
}
