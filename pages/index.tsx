import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

import { Header } from "@/layouts/head"
import Footer from "@/layouts/footer"

export default function Index() {
  const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <Header />

      <div className="absolute w-full h-[80vh] z-10">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold">MAUNGA PEAK</h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 text-2xl">New Zealand{"'"}s favourite</h2>
        <Button className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-400">Down</Button>
      </div>

      <div className="absolute w-full h-[80vh] z-0">
      </div>

      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0 h-[90vh] bg-slate-200">Slide 1</div>
          <div className="flex-[0_0_100%] min-w-0 h-[90vh] bg-slate-300">Slide 2</div>  
          <div className="flex-[0_0_100%] min-w-0 h-[90vh] bg-slate-400">Slide 3</div>
        </div>
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
        <h2 className="text-white text-4xl text-center mb-8">Small quote/info</h2>
        <p className="text-white text-lg text-center max-w-[60%] ml-auto mr-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius maiores quae amet quis officia repellat ipsam, earum hic minus reprehenderit non veniam, voluptas, quidem expedita quas nam quod aliquam?</p>
      </div>

      <div className="w-full min-h-[450px] bg-slate-700 p-24">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h2 className="text-white text-4xl mb-8">Join the Club</h2>
          <p className="text-white text-lg text-center max-w-[60%] mb-12">
            Become a member of our exclusive ski club and enjoy a range of
            benefits, including discounted lift tickets, early access to
            events, and access to our private ski lounge.
          </p>
          <div className="flex space-x-6">
            <Button
              className="bg-white text-slate-700 hover:bg-slate-200"
              size="lg"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              Learn More
            </Button>
            <Button
              className="bg-sky-500 text-white hover:bg-sky-600"
              size="lg"
            >
              Sign Up Now
            </Button>
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 max-w-[60%] text-white text-lg"
              >
                <p className="text-white text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque molestiae officia dicta ipsam, nam quia perferendis ad sit est dolor incidunt explicabo voluptatem eaque laboriosam necessitatibus eius odit! Inventore.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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