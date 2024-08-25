import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from '@nextui-org/button';
import { DateRangePicker } from "@nextui-org/date-picker";

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
        <div className="w-full h-full z-1">
          <div className="flex w-full h-[calc(100%-4rem)] bg-slate-300 overflow-hidden">
            <div className="w-full h-full">Slide one</div>
          </div>
        <div className="w-full h-[4rem]">
          <Button className="w-12 h-12 rounded-lg m-2">{'<'}</Button>
          <Button className="w-12 h-12 rounded-lg m-2">{'>'}</Button>
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