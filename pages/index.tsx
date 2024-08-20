import { Header } from "@/layouts/head"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Index() {
  const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])

  return (
    <div>
      <Header />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-200">Slide 1</div>
          <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-300">Slide 2</div>
          <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-400">Slide 3</div>
        </div>
      </div>

      <div className="w-full h-48 bg-slate-500">Temporary order form</div>
      
      <div className="w-full h-screen bg-slate-400">Something</div>

      <div className="w-full h-96 bg-slate-300">Footer</div>
    </div>
  )
}