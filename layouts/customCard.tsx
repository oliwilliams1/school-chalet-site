import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from '@nextui-org/button';
import { DateRangePicker } from "@nextui-org/date-picker";
import { NextArrowIcon, PreviousArrowIcon } from '@/components/icons';

const chalets = [
  {
    name: "Kākāpo",
    shortDesc: "Our largest option, great for large groups",
    largeDesc: "Kākāpo is the largest of the chalets, accommodating up to 10 adults and 30 children. It features a spacious kitchen, dining, and living area, perfect for gatherings. With top-notch amenities, this chalet ensures a comfortable and enjoyable stay for large groups.",
    image: "/resources/chalets/kakapo/card front.jpg",
    images: [
      { src: "/resources/chalets/kakapo/card front.jpg" },
      { src: "/resources/chalets/kakapo/view.jpg" },
    ]
  },
  {
    name: "Pūkeko",
    shortDesc: "Great for medium-sized groups",
    largeDesc: "Pūkeko is designed for groups and families, comfortably hosting up to 6 adults and 15 children. Its layout provides privacy, with limits on adult/child numbers to ensure a pleasant atmosphere. Enjoy your own chalet experience with all the necessary features for a comfortable stay.",
    image: "/resources/chalets/pukeko/card front.jpg",
    images: [
      { src: "/resources/home/snowboarding-4878696.jpg" },
      { src: "/resources/home/mountains-6005824.jpg" },
    ]
  },
  {
    name: "Kererū",
    shortDesc: "The best option for families",
    largeDesc: "Kererū is a great option for families, accommodating up to 2 adults and 4 children. It features two cozy bedrooms and a separate living area, making it perfect for families with 2-4 children. Enjoy a peaceful retreat in this charming chalet designed for family comfort.",
    image: "/resources/chalets/kereru/card front.jpg",
    images: [
      { src: "/resources/home/mountains-6005824.jpg" },
      { src: "/resources/home/ski-1075456.jpg" },
    ]
  },  
];

export default function CustomCards() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(chalets[0].images);

  const handleCardClick = (index : number) => {
    if (expandedCardIndex !== index) {
      setExpandedCardIndex(index);
      setSlides(chalets[index].images);
      setCurrentIndex(0); // Reset to first image of new slides
    }
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div className="flex w-full h-[90vh] bg-slate-100">
      <div className="w-[25rem] h-full bg-slate-100 z-10">
        <div className="w-full h-full">
          {chalets.map((chalet, index) => (
            <motion.div
              key={index}
              className="p-4"
              onClick={() => handleCardClick(index)}
              animate={{
                marginLeft: index === expandedCardIndex ? 20 : 0,
                width: index === expandedCardIndex ? "105%" : "100%",
                height: index === expandedCardIndex ? "35%" : "32%",
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
            >
              <Card className="w-full h-full transition-transform duration-300 hover:translate-x-2 shadow-lg" isBlurred isFooterBlurred>
                <CardHeader className="pb-0 pt-2 px-4 flex flex-col items-start">
                  <h2 className="font-bold text-xl text-gray-800">{chalet.name}</h2>
                  <small className="text-gray-600">{chalet.shortDesc}</small>
                </CardHeader>
                <CardBody>
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-md" 
                    style={{ backgroundImage: `url('${chalet.image}')` }} 
                  ></div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex w-full h-full z-1">
        <div className="w-full h-full z-1 bg-[rgb(8,4,4)]">
          <div className="w-full h-[calc(100%-4rem)] overflow-hidden">
            <div
              className={`flex w-[${slides.length * 100}%] h-full transition-transform duration-500 ease-in-out`}
              style={{ width: `${slides.length * 100}%`, transform: `translateX(-${(currentIndex * 100) / slides.length}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full h-full p-16 pb-6">
                  <div
                    className="w-full h-full bg-cover bg-center rounded-[1.5rem] transition-transform duration-500 ease-in-out"
                    style={{ backgroundImage: `url('${slide.src}')` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full h-[4rem]">
            <div className="w-1/2 h-full p-3 pl-20 pt-0">
              <Button className="p-2.5 bg-[rgb(8,4,4)] border-2 rounded-full" isIconOnly onClick={handlePrevious}>
                <PreviousArrowIcon />
              </Button>
              <Button className="p-2.5 bg-[rgb(8,4,4)] border-2 rounded-full ml-4" isIconOnly onClick={handleNext}>
                <NextArrowIcon />
              </Button>
            </div>

            <div className="w-full h-full pb-3 pr-20">
              <div className="flex justify-end items-center w-full h-[40px]">
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <div
                      className={`w-[20px] h-[20px] rounded-full border-2 text-center text-white cursor-pointer transition-all duration-300 ${
                        index === currentIndex
                          ? 'hover:bg-slate-800 border-slate-100'
                          : 'hover:bg-slate-800 border-slate-500'
                      }`}
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[25rem] h-full bg-slate-300 p-4">
          <Card className="w-full h-full">
            <CardHeader>
              <div>
                <h1 className="text-3xl font-bold">{chalets[expandedCardIndex]?.name}</h1>
                <h2 className="text-md font-semibold">{chalets[expandedCardIndex]?.shortDesc}</h2>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-md">{chalets[expandedCardIndex]?.largeDesc}</p>
            </CardBody>
            <CardFooter>
              <div className="w-full">
                <DateRangePicker
                  className="mb-2 w-full"
                  label="Stay duration"
                  description="Stay duration must be Friday-Sunday"
                  variant="bordered"
                  isRequired
                />
                <Button className="w-full h-12 bg-blue-400 hover:bg-blue-700 text-white font-bold">Register Now!</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}