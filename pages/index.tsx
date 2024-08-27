import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { Divider } from "@nextui-org/divider";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { DownArrowIcon } from "@/components/icons";
import { Header } from "@/layouts/head"
import Footer from "@/layouts/footer"
import InteractiveImage from '@/layouts/interactiveImage';
import JoinUs from '@/layouts/joinUs';

export default function Index() {
  const [emblaRef] = useEmblaCarousel({loop: false, duration: 50}, [Autoplay({delay: 7500})])

  return (
    <div>
      <Header />

      <div className="absolute w-full h-screen z-10 bg-black bg-opacity-60">
        <h1 className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-white">MAUNGA PEAK</h1>
        <h2 className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 mt-12 text-2xl text-white">A New Zealand Favourite</h2>
        <DownArrowIcon className="w-6 h-6 absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"/>
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

      <div className="w-full bg-slate-200 justify-center items-center pt-10">
        <div className="w-24 h-24 rounded-full ml-auto mr-auto mb-8 bg-cover bg-center" style={{backgroundImage: `url('/logo/transparant.png')`}}></div>
        <h1 className="text-6xl font-bold text-center">Welcome to Our Slopes</h1>
        <Divider className="my-4 w-[30vw] ml-auto mr-auto" /> 
        <p className="ml-auto mr-auto w-[40vw] text-center">Discover the ultimate winter adventure at our premier ski and snowboard field. Experience world-class slopes, stunning mountain views, and top-notch facilities for an unforgettable getaway.</p>

        <div className="flex w-full p-14">
          <Card className="w-72 ml-auto">
            <CardHeader>
              <h1 className="text-2xl font-bold ml-auto mr-auto">Weather</h1>
            </CardHeader>
            <CardBody>
            <div className="flex h-16 m-auto">
              <img className="h-full" src="/resources/home/weather.svg" alt="Weather icon" />
              <div className="mt-auto mb-auto pl-2">
                <p className="text-2xl font-semibold">3.4°C</p>
                <p>Maunga peak</p>
              </div>
            </div> 
            </CardBody>
            <CardFooter>
              <p className="text-1xl font-semibold ml-auto mr-auto">Partly cloudy</p>
            </CardFooter>
          </Card>

          <Card className="w-72 ml-8">
            <CardHeader>
              <h1 className="text-2xl font-bold ml-auto mr-auto">Snow Conditions</h1>
            </CardHeader>
            <CardBody>
              <div className="flex h-16 m-auto">
                <img className="h-full" src="/resources/home/snowflake.svg" alt="Snowflake icon" />
                <div className="mt-auto mb-auto pl-2">
                  <p className="text-2xl font-semibold">45cm</p>
                  <p>Base Depth</p>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-1xl font-semibold ml-auto mr-auto">Powder</p>
            </CardFooter>
          </Card>

          <Card className="w-72 ml-8 mr-auto">
            <CardHeader>
              <h1 className="text-2xl font-bold ml-auto mr-auto">Lift Status</h1>
            </CardHeader>
            <CardBody>
              <div className="flex h-16 m-auto">
                <img className="h-full" src="/resources/home/chairlift.jpeg" alt="Chairlift icon" />
                <div className="mt-auto mb-auto pl-2">
                  <p className="text-2xl font-semibold">8/10</p>
                  <p>Lifts Open</p>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-1xl font-semibold ml-auto mr-auto">Minimal Delays</p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="w-full bg-slate-900 p-24">
        <h2 className="text-white text-4xl text-center mb-8">Discover the Wonders of Maunga Ski Resort</h2>
        <p className="text-white text-lg text-center max-w-[60%] ml-auto mr-auto">
          Experience the thrill of skiing and snowboarding on our world-class slopes, surrounded by the breathtaking beauty of the Maunga mountain range. With over 50 runs catering to all skill levels, there{"'"}s something for everyone to enjoy.
        </p>
      </div>

      <div className="flex w-full h-full">
        <JoinUs />
        <div className="w-full h-inherit bg-cover bg-center" style={{backgroundImage: `url('/resources/home/cropped-bungalow.jpg')`}}></div>
      </div>

      <div className="w-full h-96 bg-slate-300">
        <div className="flex max-w-[80rem] w-full h-full bg-slate-300 ml-auto mr-auto">
          <div className="w-1/3 h-full">Chalet one card</div>
          <div className="w-1/3 h-full">Chalet two card</div>
          <div className="w-1/3 h-full">Chalet three card</div>
        </div>
      </div>

      <Footer />
  </div>)
}