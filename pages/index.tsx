import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

import { Header } from "@/layouts/head"
import Footer from "@/layouts/footer"
import InteractiveImage from '@/layouts/interactiveImage';
import JoinUs from '@/layouts/joinUs';

export default function Index() {
  const [emblaRef] = useEmblaCarousel({loop: false, duration: 50}, [Autoplay({delay: 7500})])

  return (
    <div>
      <Header />

      <div className="absolute w-full h-screen z-10">
        <h1 className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold">MAUNGA PEAK</h1>
        <h2 className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 mt-12 text-2xl">A New Zealand Favourite</h2>
        <Button className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-400">Down</Button>
      </div>

      <div className="w-full h-screen overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{backgroundImage: `url('/resources/home/snowboarding-4878696.jpg')`}}></div>
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{backgroundImage: `url('/resources/home/mountains-6005824.jpg')`}}></div>
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{backgroundImage: `url('/resources/home/ski-1075456.jpg')`}}></div>
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-cover bg-center" style={{backgroundImage: `url('/resources/home/skiing-4835024.jpg')`}}></div>
        </div>
      </div>

      {/*'Mountain image: https://pixabay.com/photos/mountain-mt-egmont-mt-taranaki-1144506/'*/}

      <InteractiveImage />

      <div className="w-full h-[600px] bg-slate-200 justify-center items-center pt-10">
        <div className="w-24 h-24 rounded-full ml-auto mr-auto mb-8 bg-cover bg-center" style={{backgroundImage: `url('/logo/transparant.png')`}}></div>
        <h1 className="text-6xl font-bold text-center">Welcome to Our Slopes</h1>
        <Divider className="my-4 w-[30vw] ml-auto mr-auto" /> 
        <p className="ml-auto mr-auto w-[40vw] text-center">Discover the ultimate winter adventure at our premier ski and snowboard field. Experience world-class slopes, stunning mountain views, and top-notch facilities for an unforgettable getaway.</p>

        <div className="flex w-full h-72 p-14">
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 1</div>
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 2</div>
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 3</div>
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 4</div>
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 5</div>
        </div>

        <div className="w-full h-[21rem] bg-slate-900 p-24">
          <h2 className="text-white text-4xl text-center mb-8">Experience the Thrill of the Slopes</h2>
          <p className="text-white text-lg text-center max-w-[60%] ml-auto mr-auto">At our premier ski and snowboard field, you'll find world-class terrain, stunning mountain vistas, and a vibrant community of winter sports enthusiasts. Join us for an unforgettable adventure on the slopes.</p>
        </div>

      <div className="flex w-full h-full">
        <JoinUs />
        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url('/resources/home/cropped-bungalow.jpg')`}}></div>
      </div>

      <div className="w-full h-96 bg-slate-300">
        <div className="flex max-w-[80rem] w-full h-full bg-slate-300 ml-auto mr-auto">
          <div className="w-1/3 h-full">Chalet one card</div>
          <div className="w-1/3 h-full">Chalet two card</div>
          <div className="w-1/3 h-full">Chalet three card</div>
        </div>
      </div>

      <Footer />
    </div>
  </div>)
}