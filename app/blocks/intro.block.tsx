import clsx from 'clsx'
import { Gradient } from '~/components/gradient'

export interface IntroBlockProps {}
export function IntroBlock({}: IntroBlockProps) {
  return (
    <Gradient className="relative header-offset-mobile lg:header-offset-desktop">
      <div className="container max-w-screen-xl">
        <div
          className={clsx(
            // mobile
            'min-h-screen-[50vh] grid grid-flow-row place-items-center',
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
              Here you will random articles and labs about things I'm currently working with. Or
              tips and tricks that I want to remember.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="container flex flex-col justify-center max-w-screen-xl mt-16">
        <div className="grid items-center content-center grid-cols-1 md:grid-cols-2 md:gap-8">
          

          <div className="my-8">
            <h1 className="heading-1">Hello, I'm Leon 👋</h1>
            <p className="text-lg">I'm facinated by the web and spend most my days learning about web tech and 3D.</p>
            <p className="mt-4 text-lg">
              I'm the CTO for{' '}
              <a className="underline" href="https://www.wec360.com">
                wec360°
              </a>
              , a Swedish Prop-Tech company building products for presenting real estate using web and 3D tech.
            </p>
            <p></p>
          </div>
        </div>
      </div> */}
    </Gradient>
  )
}
