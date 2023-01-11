import Image from 'next/image'
import Link from 'next/link'
import gradientMorphImg from './gradient-morph.jpg'

export function GradientMorphBlock() {
  return (
    <div className="bg-slate-200">
      <div className="container grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
        <Image
          className="rounded-sm object-contain"
          src={gradientMorphImg}
          alt="Gradient Morph App"
        />
        <div className="self-center">
          <h3 className="badge">Project</h3>
          <h1 className="heading-2">Gradient Morph</h1>
          <p>
            A web component, web app and figma plugin to generate gradient color morphs backgrounds
            and videos.
          </p>
          <p>
            <Link className="btn" href="/projects/gradient-morph">
              Check out Gradient Morph
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
