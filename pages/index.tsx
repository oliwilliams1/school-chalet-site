import { Header } from "@/layouts/head"
import Footer from "@/layouts/footer"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

export default function Index() {
  const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])
  return (
    <div>
      <Header />

      <div className="absolute w-full h-[80vh] z-10">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold">MAUNGA PEAK</h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 text-2xl">New Zealand{"'"}s favourite</h2>
      </div>

      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-200">Slide 1</div>
          <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-300">Slide 2</div>  
          <div className="flex-[0_0_100%] min-w-0 h-[80vh] bg-slate-400">Slide 3</div>
        </div>
      </div>

      <div className="w-full h-48 bg-slate-900 p-12">
        <h2 className="text-white text-4xl ">Small info panel</h2>
      </div>
      
      <div className="w-full h-[800px] bg-blue-100 p-20">
        <h1 className="text-6xl font-bold text-center">THE MOUNTAIN</h1>
        <div className="flex w-full h-full p-14">
          <div className="w-1/2 h-full mr-8 bg-slate-200">Card 1</div>
          <div className="w-1/2 h-full ml-8 bg-slate-300">Card 2</div>
        </div>
      </div>

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
        <h2 className="text-white text-4xl ">Small quote/info</h2>
      </div>

      <div className="w-full h-[800px] bg-slate-700 p-24">
        <h2 className="text-white text-4xl ">Join the club</h2>
        <Button className="bottom-0 right-0">Register</Button>
      </div>

      <div className="w-full h-96 bg-slate-300">Our chalets</div>

      <Footer />
    </div>
  </div>)
}