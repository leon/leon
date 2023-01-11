declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gradient-morph': any
    }
  }
}

export interface GradientMorphHeroProps {
  title: string
}
export function GradientMorphHero({ title }: GradientMorphHeroProps) {
  return (
    <div className="header-offset-mobile lg:header-offset-desktop bg-[#cc0c39] !pt-0">
      <gradient-morph
        class="grid min-h-[50vh] place-items-center"
        colors="#cc0c39,#e6781e,#c8cf02,#f8fcc1,#1693a7"
        colorcoordx="80"
      >
        <h1 className="font-heading text-6xl font-bold text-white">{title}</h1>
      </gradient-morph>
    </div>
  )
}
