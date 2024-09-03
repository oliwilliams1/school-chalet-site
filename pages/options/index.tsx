import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CustomCard from "@/layouts/customCard";

import { DownArrowIcon } from "@/components/icons";
import { Header } from "@/layouts/head";
import Footer from "@/layouts/footer"
import JoinUs from '@/layouts/joinUs';

export default function StayWithUs() {
  const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])

  const scrollDown = () => {
    const targetSection = document.getElementById("carasoul-scroll-to");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <div>
    <Header />

    <div className="absolute w-full h-screen z-10 bg-black bg-opacity-60 flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-7xl font-bold text-white montserrat text-center">OUR CHALETS</h1>
      <h2 className="mt-4 text-lg md:text-2xl text-white montserrat text-center">New Zealand{"'"}s coziest accomodation</h2>
      <DownArrowIcon className="w-6 h-6 absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2" onClick={scrollDown} cursor={"pointer"}/>
      </div>
    
    <div className="w-full h-screen">
      <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url('/resources/home/cropped-bungalow.jpg')`}}></div>
    </div>
    
    <CustomCard />

    <div className="flex w-full h-full">
      <JoinUs />
      <div className="w-full h-inherit bg-cover bg-center" style={{backgroundImage: `url('/resources/home/cropped-bungalow.jpg')`}}></div>
    </div>
    
    <Footer />
  </div>)
}