import React, { useState, useEffect, Children } from "react";
import { motion } from 'framer-motion';
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from '@nextui-org/button';
import { DateRangePicker } from "@nextui-org/date-picker";
import { NextArrowIcon, PreviousArrowIcon } from '@/components/icons';

// An interface so tsx doens't complain
interface User {
  firstName: string;
  lastName: string;
}

// Get the message for the chalet when booked
export const getChaletMessage = (chalet : string) => {
  switch (chalet) {
    case "Kākāpo":
      return {
        description: "You have successfully purchased the Kākāpo chalet! Kākāpo is the largest of the chalets, accommodating up to 10 adults and 30 children. It features a spacious kitchen, dining, and living area, perfect for gatherings. Enjoy your stay with top-notch amenities for large groups."
      };
    case "Pūkeko":
      return {
        description: "You have successfully purchased the Pūkeko chalet! Pūkeko is designed for groups and families, comfortably hosting up to 6 adults and 15 children. Enjoy a pleasant atmosphere with its layout providing privacy and all the necessary features for a comfortable stay."
      };
    case "Kererū":
      return {
        description: "You have successfully purchased the Kererū chalet! This charming chalet is perfect for families, accommodating up to 2 adults and 4 children, featuring cozy bedrooms and a separate living area for a peaceful retreat."
      };
    default:
      return { description: "You have successfully completed your purchase!" };
  }
};

// The data for the chalets
export const chalets = [
  {
    name: "Kākāpo",
    shortDesc: "Our largest option, great for large groups",
    largeDesc: "Kākāpo is the largest of the chalets, accommodating up to 10 adults and 30 children. It features a spacious kitchen, dining, and living area, perfect for gatherings. With top-notch amenities, this chalet ensures a comfortable and enjoyable stay for large groups.",
    image: "/resources/chalets/kakapo/card front.jpg",
    maxChildren: 30,
    maxAdults: 10,
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
    maxChildren: 15,
    maxAdults: 6,
    images: [
      { src: "/resources/chalets/pukeko/card front.jpg" },
      { src: "/resources/chalets/pukeko/chalet_view.jpg" },
      { src: "/resources/chalets/pukeko/adult_bedroom.jpg" },
    ]
  },
  {
    name: "Kererū",
    shortDesc: "The best option for families",
    largeDesc: "Kererū is a great option for families, accommodating up to 2 adults and 4 children. It features two cozy bedrooms and a separate living area, making it perfect for families with 2-4 children. Enjoy a peaceful retreat in this charming chalet designed for family comfort.",
    image: "/resources/chalets/kereru/card front.jpg",
    maxChildren: 4,
    maxAdults: 2,
    images: [
      { src: "/resources/chalets/kereru/card front.jpg" },
      { src: "/resources/chalets/kereru/cabin_exterior.jpg" },
      { src: "/resources/chalets/kereru/kids_bedroom.jpg" },
    ]
  },  
];

export default function CustomCards() {
  {/* Bunch of useStates for client side variables, this is how you have to do it with react */}
  const [user, setUser] = useState<User | any>(null);
  const [expandedCardIndex, setExpandedCardIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(chalets[0].images);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [hasDateRangeBeenChosen, setDateRange] = useState(false);

  {/* Handles the change in date range */}
  const handleDateChange = (range : any) => {
    setDateRange(true);
  };

  {/* Grabs "user" from local storage and stores it in "setUser" */}
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
    }
  }, []);

  {/* Handles click on card, sets other elements to their respective states */}
  const handleCardClick = (index : number) => {
    if (expandedCardIndex !== index) {
      setExpandedCardIndex(index);
      setSlides(chalets[index].images);
      setCurrentIndex(0); // Reset to first image of new slides
    }
  };

  {/* Handles click on previous button, sets index to previous index */}
  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  {/* Handles click on next button, sets index to next index */}
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div className="flex w-full h-[90vh] bg-slate-100" id="carasoul-scroll-to">
      <div className="w-[25rem] h-full bg-slate-100 z-10">
        <div className="w-full h-full">
          {chalets.map((chalet, index) => ( // Iterate through chalets and create a motion div (framer motion for animations) for each
            <motion.div
              key={index}
              className="p-4 transition-all duration-300 transform hover:translate-x-[1rem]"
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
              {/* Card to make for each chalet */}
              <Card className="w-full h-full shadow-lg" isBlurred isFooterBlurred>
                <CardHeader className="pb-0 pt-2 px-4 flex flex-col items-start">
                  <h2 className="font-bold text-xl text-gray-800 montserrat">{chalet.name}</h2>
                  <small className="text-gray-600 montserrat">{chalet.shortDesc}</small>
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

      {/* My own carasoul */}
      <div className="flex w-full h-full z-1">
        <div className="w-full h-full z-1 bg-[rgb(8,4,4)]">
          <div className="w-full h-full overflow-hidden">
            {/* A wide div that scrolls by based on the current index */}
            <div
              className={`flex w-[${slides.length * 100}%] h-full transition-transform duration-500 ease-in-out`}
              style={{ width: `${slides.length * 100}%`, transform: `translateX(-${(currentIndex * 100) / slides.length}%)` }}
            >
              {slides.map((slide, index) => ( // Iterate through slides and create a div for each
                <div key={index} className="w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out"
                    style={{ backgroundImage: `url('${slide.src}')` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controlled for carasoul */}
          <div className="relative flex w-full h-[4rem] bg-black opacity-70 mt-[-4rem] pt-3 z-4">
            <div className="w-1/2 h-full p-3 pl-20 pt-0">
              <Button className="p-2.5 bg-[rgb(8,4,4)] border-2 rounded-full" isIconOnly onClick={handlePrevious}>
                <PreviousArrowIcon />
              </Button>
              <Button className="p-2.5 bg-[rgb(8,4,4)] border-2 rounded-full ml-4" isIconOnly onClick={handleNext}>
                <NextArrowIcon />
              </Button>
            </div>

            {/* Further controlls for carasoul */}
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

        {/* Info on the right side, changes based on the selected chalet on the left */}
        <div className="w-[25rem] h-full bg-slate-300 z-10">
          <Card className="w-full h-full rounded-none p-3">
            <CardHeader>
              <div>
                <h1 className="text-3xl font-bold montserrat">{chalets[expandedCardIndex]?.name}</h1>
                <h2 className="text-md font-semibold montserrat">{chalets[expandedCardIndex]?.shortDesc}</h2>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-md montserrat">{chalets[expandedCardIndex]?.largeDesc}</p>
            </CardBody>
            <CardFooter>
              <div className="w-full">
                {user ? ( // Is the user logged in? if so show the booking form
                  <div>
                    <DateRangePicker
                      className="mb-2 w-full"
                      label="Stay duration"
                      description="Stay duration must be Friday-Sunday"
                      variant="bordered"
                      isRequired
                      onChange={handleDateChange}
                    />
                    <div className="flex gap-2 py-2">
                      <Input
                        size="sm"
                        label="Adults"
                        min="0"
                        max={chalets[expandedCardIndex]?.maxAdults}
                        description={`Maximum ${chalets[expandedCardIndex]?.maxAdults}`}
                        type="number"
                      />
                      <Input
                        size="sm"
                        label="Children"
                        min="0"
                        max={chalets[expandedCardIndex]?.maxChildren}
                        description={`Maximum ${chalets[expandedCardIndex]?.maxChildren}`}
                        type="number"
                      />
                    </div>
                    <Button
                      isDisabled={!hasDateRangeBeenChosen}
                      onPress={onOpen} 
                      className={`w-full h-12 bg-blue-400 hover:bg-blue-700 text-white font-bold montserrat ${hasDateRangeBeenChosen ? "" : "cursor-not-allowed"}`}
                    >Book now!</Button>
                  </div>
                ) : ( // The user is not logged in, prompt them to do so
                  <div>
                    <p className="text-red-400 text-xs mb-1 montserrat">* You must be a club member to book a chalet</p>
                    <Button onClick={() => window.open("/register", "_self")} className="w-full h-12 bg-blue-400 hover:bg-blue-700 text-white font-bold montserrat">Register as a club member</Button>
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* A pop up telling the user their booking was successful */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{`Congratulations on your purchase, ${user?.firstName}!`}</ModalHeader>
                <ModalBody>
                  <p className="text-md">{getChaletMessage(chalets[currentIndex].name).description}</p>
                  <p className="text-md">You will receive a confirmation email shortly with all the details about your purchase, including your chalet{"'"}s amenities and check-in instructions. If you have any questions or need assistance, feel free to reach out to our support team. Thank you for choosing us for your stay; we look forward to welcoming you soon!</p>

                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        
      </div>
    </div>
  );
}