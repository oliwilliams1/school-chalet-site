import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

import { Header } from "@/layouts/head"
import Footer from "@/layouts/footer"
import InteractiveImage from '@/layouts/interactiveImage';
import JoinUs from '@/layouts/joinUs';

export default function Index() {
  const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])

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
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-slate-200">Slide 1</div>
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-slate-300">Slide 2</div>  
          <div className="flex-[0_0_100%] min-w-0 h-screen bg-slate-400">Slide 3</div>
        </div>
      </div>

      {/*'Mountain image: https://pixabay.com/photos/mountain-mt-egmont-mt-taranaki-1144506/'*/}

      <InteractiveImage />

      <div className="w-full h-[600px] bg-slate-200 justify-center items-center pt-10">
        <h2 className="text-4xl text-center mb-10">Logo</h2>
        <h1 className="text-6xl font-bold text-center">Title</h1>
        <Divider className="my-4 w-[30vw] ml-auto mr-auto" /> 
        <p className="ml-auto mr-auto w-[40vw] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ut itaque recusandae consequatur deserunt amet molestias asperiores soluta consectetur ipsam doloremque laudantium sit explicabo quia dolorem cum expedita obcaecati sequi!</p>

        <div className="flex w-full h-72 p-14">
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 1</div>
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 2</div>
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 3</div>
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 4</div>
          <div className="w-1/5 h-full ml-8 bg-slate-300">Card 5</div>
      </div>

      <div className="w-full h-96 bg-slate-900 p-24">
        <h2 className="text-white text-4xl text-center mb-8">Small quote/info</h2>
        <p className="text-white text-lg text-center max-w-[60%] ml-auto mr-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius maiores quae amet quis officia repellat ipsam, earum hic minus reprehenderit non veniam, voluptas, quidem expedita quas nam quod aliquam?</p>
      </div>

      <JoinUs />

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