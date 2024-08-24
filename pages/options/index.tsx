import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import CustomCard from "@/layouts/customCard";
import { Button } from "@nextui-org/button";

import { Header } from "@/layouts/head";
import Footer from "@/layouts/footer"
import JoinUs from '@/layouts/joinUs';

export default function StayWithUs() {
  const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])

  return (
  <div>
    <Header />

    <div className="absolute w-full h-screen z-10">
      <h1 className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold">OUR CHALETS</h1>
      <h2 className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 mt-12 text-2xl">New Zealand{"'"}s coziest accomodation</h2>
      <Button className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-400">Down</Button>
    </div>
    
    <div className="w-full h-screen overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0 h-screen bg-slate-200">Slide 1</div>
        <div className="flex-[0_0_100%] min-w-0 h-screen bg-slate-300">Slide 2</div>  
        <div className="flex-[0_0_100%] min-w-0 h-screen bg-slate-400">Slide 3</div>
      </div>
    </div>
    
    <CustomCard />

    <JoinUs />
    <Footer />
  </div>)
}