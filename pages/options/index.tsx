import { Header } from "@/layouts/head";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Footer from "@/layouts/footer"
import { Card, CardBody, CardFooter, CardHeader, CardFooterProps } from "@nextui-org/card";

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

    <div className="w-full h-72 bg-slate-100">Info block</div>

    <div className="flex w-full h-[32rem] bg-slate-100">
      <div className="w-full h-full p-4 bg-slate-200">
        <Card className="w-full h-full" isBlurred isFooterBlurred>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="font-bold">Title</p>
            <small className="text-default-500">Subtitle</small>
          </CardHeader>
          <CardBody>
            <div className="w-full h-full bg-yellow-200 rounded-lg"></div>
          </CardBody>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 mb-1 z-10">
            <div className="w-full flex justify-between rounded-lg">
              <p>Find out more -{'>'}</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full h-full p-4 bg-slate-200">
      <Card className="w-full h-full" isBlurred>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="font-bold">Title</p>
            <small className="text-default-500">Subtitle</small>
          </CardHeader>
          <CardBody>
            <div className="w-full h-full bg-yellow-200 rounded-lg"></div>
          </CardBody>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 mb-1 z-10">
            <div className="w-full flex justify-between rounded-lg">
              <p>Find out more -{'>'}</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full h-full p-4 bg-slate-200">
        <Card className="w-full h-full" isBlurred>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="font-bold">Title</p>
              <small className="text-default-500">Subtitle</small>
            </CardHeader>
            <CardBody>
              <div className="w-full h-full bg-yellow-200 rounded-lg"></div>
            </CardBody>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 mb-1 z-10">
              <div className="w-full flex justify-between rounded-lg">
                <p>Find out more -{'>'}</p>
              </div>
            </CardFooter>
          </Card>
      </div>
    </div>

    <div className="w-full h-72 bg-slate-100">Info block</div>

    <Footer />
  </div>)
}



      