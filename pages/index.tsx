import { Divider } from "@nextui-org/divider";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { DownArrowIcon } from "@/components/icons";
import { Header } from "@/layouts/head"
import { chalets } from "@/layouts/ChaletSelectionDesktop";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Footer from "@/layouts/footer"
import InteractiveImage from '@/layouts/interactiveImage';
import JoinUs from '@/layouts/joinUs';

export default function Index() {
  const [emblaRef] = useEmblaCarousel({loop: false, duration: 50}, [Autoplay({delay: 7500})])

  const scrollDown = () => {
    const targetSection = document.getElementById("mountain-scroll-to");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div>
      <Header />

      <div className="absolute w-full h-screen z-10 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white montserrat text-center">MAUNGA PEAK</h1>
        <h2 className="mt-4 text-lg md:text-2xl text-white montserrat text-center">A New Zealand Favourite</h2>
        <DownArrowIcon 
          className="w-6 h-6 mt-8 cursor-pointer" 
          onClick={scrollDown} 
          aria-label="Scroll down"
        />
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

      <div className="w-full bg-slate-200 flex flex-col justify-center items-center pt-10">
        <div className="w-24 h-24 rounded-full mb-8 bg-cover bg-center" style={{ backgroundImage: `url('/logo/transparant.png')` }}></div>
        <h1 className="text-3xl md:text-6xl font-bold text-center max-w-[85vw] montserrat">Welcome to Our Slopes</h1>
        <Divider className="my-4 w-[70vw] md:w-[20vw] ml-auto mr-auto" />
        <p className="w-[90%] md:w-[40vw] text-center mx-auto montserrat">
          Discover the ultimate winter adventure at our premier ski and snowboard field. Experience world-class slopes, stunning mountain views, and top-notch facilities for an unforgettable getaway.
        </p>

        <div className="flex flex-col md:flex-row justify-center w-full p-6 md:p-14 sm:gap-12">
          <Card className="w-72 m-4 mx-auto sm:mx-0">
            <CardHeader>
              <h1 className="text-2xl font-bold mx-auto montserrat">Weather</h1>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-center h-32"> {/* Adjust height as necessary */}
              <div className="flex h-16 items-center">
                <img className="h-full" src="/resources/home/weather.svg" alt="Weather icon" />
                <div className="pl-2 text-center">
                  <p className="text-2xl font-semibold montserrat">3.4°C</p>
                  <p>Maunga peak</p>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-xl font-semibold mx-auto montserrat">Partly cloudy</p>
            </CardFooter>
          </Card>

          <Card className="w-72 m-4 mx-auto sm:mx-0">
            <CardHeader>
              <h1 className="text-2xl font-bold mx-auto montserrat">Snow Conditions</h1>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-center h-32">
              <div className="flex h-16 items-center">
                <img className="h-full" src="/resources/home/snowflake.svg" alt="Snowflake icon" />
                <div className="pl-2 text-center">
                  <p className="text-2xl font-semibold montserrat">45cm</p>
                  <p>Base Depth</p>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-xl font-semibold montserrat mx-auto">Powder</p>
            </CardFooter>
          </Card>

          <Card className="w-72 m-4 mx-auto sm:mx-0">
            <CardHeader>
              <h1 className="text-2xl font-bold mx-auto montserrat">Lift Status</h1>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-center h-32">
              <div className="flex h-16 items-center">
                <img className="h-full" src="/resources/home/chairlift.jpeg" alt="Chairlift icon" />
                <div className="pl-2 text-center">
                  <p className="text-2xl font-semibold montserrat">8/10</p>
                  <p>Lifts Open</p>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-xl font-semibold mx-auto montserrat">Minimal Delays</p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-teal-700 to-sky-700 p-6 md:p-24">
        <h2 className="text-white text-3xl md:text-4xl text-center mb-6 montserrat">Discover the Wonders of Maunga Ski Resort</h2>
        <p className="text-white text-base md:text-lg text-center sm:max-w-[60%] mx-auto montserrat">
          Experience the thrill of skiing and snowboarding on our world-class slopes, surrounded by the breathtaking beauty of the Maunga mountain range. With over 50 runs catering to all skill levels, there{"'"}s something for everyone to enjoy.
        </p>
      </div>

      <div className="flex w-full h-full">
        <JoinUs />
        <div className="bg-image w-full h-inherit bg-cover bg-center hidden md:block" style={{ backgroundImage: `url('/resources/home/cropped-bungalow.jpg')` }}></div>
      </div>

      <div className="w-full bg-gradient-to-tr from-slate-600 to-slate-500 pt-10 pb-16 px-8">
        <h1 className="text-white font-bold text-2xl md:text-4xl text-center mb-2 montserrat">Looking for a Place to Stay?</h1>
        <h2 className="text-white text-lg md:text-xl text-center mb-8 montserrat">Discover our chalets, perfect for every type of group.</h2>
        <div className="flex flex-wrap justify-center w-full h-full mx-auto">
          {chalets.map((chalet, index) => (
            <a 
              key={index} 
              href="/options" 
              className="w-full sm:w-80 mx-4 mb-4 transition-all duration-300 transform hover:translate-y-[-1rem]"
            >
              <Card 
                className="w-full h-full shadow-lg transition-transform transform" 
                isBlurred 
                isFooterBlurred
              >
                <CardHeader className="pb-0 pt-2 px-4 flex flex-col items-start rounded-t-lg">
                  <h2 className="font-bold text-xl">{chalet.name}</h2>
                  <small>{chalet.shortDesc}</small>
                </CardHeader>
                <CardBody>
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-md" 
                    style={{ backgroundImage: `url('${chalet.image}')` }} 
                  />
                </CardBody>
              </Card>
            </a>
          ))}
        </div>
      </div>

      <Footer />
  </div>)
}