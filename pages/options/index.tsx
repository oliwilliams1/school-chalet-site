import { Header } from "@/layouts/head";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function StayWithUs() {
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

    <div className="flex w-full h-[32rem] bg-slate-100">
      <div className="w-full h-full bg-slate-300">Left</div>
      <div className="w-full h-full bg-slate-400">Middle</div>
      <div className="w-full h-full bg-slate-500">Right</div>
    </div>
  </div>)
}



      