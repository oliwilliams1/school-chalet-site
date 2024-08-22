import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

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
    <div className="w-full h-full">
      {[1, 2, 3].map((_, index) => (
        <motion.div
          key={index}
          className="p-4"
          onClick={() => handleCardClick(index)}
          animate={{
            marginLeft: index === expandedCardIndex ? 20 : 0,
            width: index === expandedCardIndex ? "105%" : "100%",
            height: index === expandedCardIndex ? "35%" : "33.33%",
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <Card className="w-full h-full" isBlurred isFooterBlurred>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="font-bold">Card {index + 1}</p>
              <small className="text-default-500">Subtitle</small>
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
  );
}