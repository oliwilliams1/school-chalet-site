import { Header } from "@/layouts/head"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Index() {
  const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])
  return (
    <div>
      <Header />
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-200">Slide 1</div>
          <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-300">Slide 2</div>
          <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-400">Slide 3</div>
        </div>
      </div>

      <div className="w-full h-96 bg-slate-500">Info block</div>
      
      <div className="w-full h-[800px] bg-slate-400">Carousel + card</div>

      <div className="w-full h-[800px] bg-slate-200">Carousel + card</div>

      <div className="w-full h-72 bg-slate-400">Little quote</div>

      <div className="w-full h-96 bg-slate-300">Small overview of options</div>

      <div className="w-full h-96 bg-slate-500">Footer</div>
    </div>
  )
}