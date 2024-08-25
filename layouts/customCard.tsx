import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from '@nextui-org/button';
import { DateRangePicker } from "@nextui-org/date-picker";

import { NextArrowIcon, PreviousArrowIcon } from '@/components/icons';

const chalets = [
  {
    name: "Kākāpo",
    shortDesc: "Largest Chalet",
    image: "favicon.ico",
  },
  {
    name: "Pūkeko",
    shortDesc: "Great for groups",
    image: "favicon.ico",
  },
  {
    name: "Kererū",
    shortDesc: "Made for families",
    image: "favicon.ico",
  },  
];

const slides = [
  {
    src: "/images/maunga-hero.jpeg",
  },
  {
    src: "/plan.jpg",
  },
  {
    src: "/images/maunga-hero.jpeg",
  },
]

export default function CustomCards() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(0);

  const handleCardClick = (index: number) => {
    if (expandedCardIndex !== index) {
      setExpandedCardIndex(index);
    }
  };

  useEffect(() => {
    // Ensure at least one card is expanded
    if (expandedCardIndex === -1) {
      setExpandedCardIndex(0);
    }
  }, [expandedCardIndex]);

  const [currentIndex, setCurrentIndex] = useState(0);

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
              <Card className="w-full h-full" isBlurred isFooterBlurred>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="font-bold">{chalet.name}</p>
                  <small className="text-default-500">{chalet.shortDesc}</small>
                </CardHeader>
                <CardBody>
                  <div className="w-full h-full bg-yellow-200 rounded-lg"></div>
                </CardBody>
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_32px)] shadow-small ml-4 mb-3.5 z-10">
                  <div className="w-full flex justify-between rounded-lg">
                    <p>Find out more -{'>'}</p>
                  </div>
                </CardFooter>
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
              <div key={index} className="w-[100%] h-[97%] p-16 pb-2">
                <div
                  className="w-full h-full bg-cover bg-center rounded-[1.5rem] transition-transform duration-500 ease-in-out"
                  style={{ backgroundImage: `url('${slide.src}')` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[4rem] p-3 pl-16 pt-0">
          <Button className="p-2.5 bg-[rgb(8,4,4)] border-slate-700 border-2 rounded-full" isIconOnly onClick={handlePrevious}>
            <PreviousArrowIcon />
          </Button>
          <Button className="p-2.5 bg-[rgb(8,4,4)] border-slate-700 border-2 rounded-full ml-4" isIconOnly onClick={handleNext}>
            <NextArrowIcon />
          </Button>
        </div>
        
      </div>

      <div className="w-[25rem] h-full bg-slate-300 p-4">
        <Card className="w-full h-full">
          <CardHeader>
            <div>
              <h1 className="text-3xl font-bold">Pukeko</h1>
              <h2 className="text-md font-semibold">Great option for families!</h2>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-md">Pukeko is a great option for families. It has a large living area with a fireplace, a kitchenette, and two bedrooms. It also has a balcony with a great view of the mountains.</p>
          </CardBody>
          <CardFooter>
            <div className="w-full">
              <DateRangePicker className="mb-2 w-full" label="Stay duration" description="Stay duration must be Friday-Sunday" variant="bordered" isRequired/>
              <Button className="w-full h-12 bg-blue-400 hover:bg-blue-700 text-white font-bold">Register Now!</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
  );
}