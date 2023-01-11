import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { Note } from '~/components/note'
import gradientMorphFigma from './gradient-morph-figma.jpg'
import { GradientMorphHero } from './gradient-morph-hero'
import gradientMorphWebComponent from './gradient-morph-web-component.jpg'
import gradientMorph from './gradient-morph.jpg'

export const dynamic = 'force-static'

export default function GradientMorphPage() {
  return (
    <>
      <GradientMorphHero title="Gradient Morph" />

      <div
        className={clsx([
          'container my-12 flex-grow',
          'prose md:prose-lg lg:prose-xl',
          'prose-headings:font-heading',
        ])}
      >
        <p className="text-xl">
          I wanted to learn more about shaders, and I also wanted to know more about creating
          plugins for figma, so why not try doing both.
        </p>
        <p>
          I got inspired after watching this excellent{' '}
          <a href="https://www.youtube.com/watch?v=LW9d2cqIHb4" target="_blank" rel="noreferrer">
            stream by Yuri Artiukh.
          </a>
        </p>
        <h3>A short explanation of how it works</h3>
        <p>
          The 3d scene contains a plane which consists of 256x256 verticies. We animate these
          verticies up and down using random noise and passed in options. the plane now looks like
          rolling waves instead of a flat plane.
        </p>
        <Note>
          If you use your mouse in the editor, you can tilt the camera and see how the waves roll
          over the plane.
        </Note>
        <p>
          By looping though the five colors we pass in as options we mix between them again using
          the Simplex Random Noise function, until output it to the fragment shader to be rendered.
        </p>
      </div>
      <div className="container my-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card
          url="https://www.npmjs.com/package/@leon/gradient-morph"
          image={gradientMorphWebComponent}
          title="Web Component"
          description="A web component that you can use in your own projects."
        />
        <Card
          url="https://www.figma.com/community/plugin/1181005273495603975/Gradient-Morph"
          image={gradientMorphFigma}
          title="Figma Plugin"
          description="A Figma plugin for generating gradient morphs directly in figma."
        />
        <Card
          url="https://gradient-morph.leon.id"
          image={gradientMorph}
          title="Web App"
          description="A web app for generating gradient morphs. You can even generate videos!"
        />
      </div>
    </>
  )
}

interface CardProps {
  url: string
  image: StaticImageData
  title: string
  description: string
}
function Card({ url, image, title, description }: CardProps) {
  return (
    <a className="group flex flex-col gap-2" href={url} target="_blank" rel="noreferrer">
      <Image
        className="aspect-[16/10] rounded object-cover object-top"
        src={image}
        alt="Figma Plugin"
      />
      <h4 className="mt-4 font-heading text-xl font-semibold group-hover:underline">{title}</h4>
      <p>{description}</p>
    </a>
  )
}
