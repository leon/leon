import clsx from 'clsx'
import { Gradient } from '~/components/gradient'

export interface IntroBlockProps {}
export function IntroBlock({}: IntroBlockProps) {
  return (
    <Gradient className="relative header-offset-mobile lg:header-offset-desktop">
      <div className="container flex max-w-screen-xl grow">
        <div
          className={clsx(
            'min-h-[40vh]',
            // mobile
            'grow grid grid-flow-row place-items-center',
            // desktop
            'md:grid-flow-col md:auto-cols-fr',
          )}
        >
          <img
            className="block object-contain w-full h-auto max-w-xs m-8 rounded-full shadow-md"
            src="/images/leon-radley.jpg"
            alt="Picture of Leon Radley"
          />
          <div className="my-8">
            <h1 className="heading-1">Hello, I'm Leon 👋</h1>
            <p className="text-lg">I love tech, coding and everything web.</p>
            <p className="text-lg">
              Here you will find articles, labs and projects relating to web development, 3d and
              programming in general.
            </p>
          </div>
        </div>
      </div>
    </Gradient>
  )
}
