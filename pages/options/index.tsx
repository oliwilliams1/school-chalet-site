import { Header } from "@/layouts/head";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Footer from "@/layouts/footer"
import CustomCard from "@/layouts/customCard";

export default function StayWithUs() {
  const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])
  return (
  <div>
    <Header />

    <div className="absolute w-full h-[80vh] z-10">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold">OUR CHALETS</h1>
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 text-2xl">comfy warm, and cozy</h2>
    </div>
    
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-200">Slide 1</div>
        <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-300">Slide 2</div>
        <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-400">Slide 3</div>
      </div>
    </div>

    <div className="w-full h-96 bg-slate-900 p-24">
      <h2 className="text-white text-4xl ">Blah blah blah</h2>
    </div>
    
    <div className="flex w-full h-[90vh] bg-slate-100">
      <div className="w-[25rem] h-full bg-slate-100">
        <CustomCard />
      </div>
      <div className="w-full h-full bg-slate-200">other</div>
    </div>

    <div className="w-full h-96 bg-slate-900 p-24">
      <h2 className="text-white text-4xl ">Blah blah blah</h2>
    </div>

    <Footer />
  </div>)
}