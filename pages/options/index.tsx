import ChaletSelectionDesktop from "@/layouts/ChaletSelectionDesktop";
import ChaletSelectionMobile from "@/layouts/ChaletSelectionMobile";
import { useState, useEffect } from "react";
import { DownArrowIcon } from "@/components/icons";
import { Header } from "@/layouts/head";
import Footer from "@/layouts/footer"
import JoinUs from '@/layouts/joinUs';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMediaQueryChange = (event : any) => {
      setIsMobile(event.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    if (typeof window !== 'undefined') {
      setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
    };
  }, []);

  return isMobile;
};

export default function StayWithUs() {
  const scrollDown = () => {
    const targetSection = document.getElementById("carasoul-scroll-to");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMobile = useIsMobile();

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
    
    { !isMobile ? 
        <ChaletSelectionDesktop /> 
      :
        <ChaletSelectionMobile />
    }
    
    <div className="flex w-full h-full">
      <JoinUs />
      <div className="bg-image w-full h-inherit bg-cover bg-center hidden md:block" style={{ backgroundImage: `url('/resources/home/cropped-bungalow.jpg')` }}></div>
    </div>
    
    <Footer />
  </div>)
}