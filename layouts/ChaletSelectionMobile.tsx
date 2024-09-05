import { chalets, getChaletMessage } from "./ChaletSelectionDesktop";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { DateRangePicker } from "@nextui-org/date-picker";
import { NextArrowIcon, PreviousArrowIcon } from '@/components/icons';
import Notification from "./notification";

interface User {
  firstName: string;
  lastName: string;
}

export default function ChaletSelectionMobile() {
  const [user, setUser] = useState<User | any>(null);
  const [showModal, setShowModal] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(chalets[0].images);
  const [hasDateRangeBeenChosen, setDateRange] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleDateChange = (range : any) => {
    setDateRange(true);
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
    }
  }, []);

  const handleClick = (index: number) => {
    setExpandedCardIndex(index);
    setSlides(chalets[index].images);
    setShowModal(true);
  }

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handleShowNotification = () => {
    setShowModal(false);
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className={`${showModal ? "flex" : "hidden"} fixed inset-0 bg-black bg-opacity-70 justify-center items-center z-50`}>
        <Card className="w-[calc(100%-3rem)] h-[calc(100%-3rem)]">
          <CardHeader>
            <div> {/* Essentially remove flex properrty from CardHeader */}
              <h1 className="text-2xl font-bold montserrat">{chalets[expandedCardIndex].name}</h1>
              <h2 className="text-lg font-semibold montserrat">{chalets[expandedCardIndex].shortDesc}</h2>
            </div>
          </CardHeader>
          <CardBody> 
            <div className="flex w-full h-[35%] z-1">
              <div className="w-full h-full z-1 bg-[rgb(8,4,4)]">
                <div className="w-full h-full overflow-hidden">
                  <div
                    className={`flex w-[${slides.length * 100}%] h-full transition-transform duration-500 ease-in-out`}
                    style={{ width: `${slides.length * 100}%`, transform: `translateX(-${(currentIndex * 100) / slides.length}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div key={index} className="w-full h-full">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out"
                          style={{ backgroundImage: `url('${slide.src}')` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex w-full h-[4rem] bg-black opacity-70 mt-[-4rem] pt-3 z-4">
                  <div className="flex w-1/2 h-full p-3 pt-0">
                    <Button className="p-2.5 bg-[rgb(8,4,4)] border-2 rounded-full" isIconOnly onClick={handlePrevious}>
                      <PreviousArrowIcon />
                    </Button>
                    <Button className="p-2.5 bg-[rgb(8,4,4)] border-2 rounded-full ml-4" isIconOnly onClick={handleNext}>
                      <NextArrowIcon />
                    </Button>
                  </div>

                  <div className="w-full h-full pb-3 mr-4">
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
            </div>

            <p className="mt-4 montserrat">{chalets[expandedCardIndex].largeDesc}</p>

          </CardBody>
          <CardFooter>
          <div className="w-full">
            <DateRangePicker
              className="mb-2 w-full"
              label="Stay duration"
              description="Stay duration must be Friday-Sunday"
              variant="bordered"
              isRequired
              onChange={handleDateChange}
            />
            {user ? (
              <Button
                isDisabled={!hasDateRangeBeenChosen}
                onPress={handleShowNotification}
                className={`w-full h-12 bg-blue-400 hover:bg-blue-700 text-white font-bold ${hasDateRangeBeenChosen ? "" : "cursor-not-allowed"}`}
              >Book now!</Button>
            ) : (
              <div>
                <p className="text-red-400 text-xs mb-1 montserrat">* You must be a club member to book a chalet</p>
                <Button onClick={() => window.open("/register", "_self")} className="w-full h-12 bg-blue-400 hover:bg-blue-700 text-white font-bold montserrat">Register as a club member</Button>
              </div>
            )}
          </div>
          </CardFooter>
        </Card>
      </div>
      

      {chalets.map((chalet, index) => (
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
          <CardFooter>
            <Button onPress={() => handleClick(index)} className="bg-sky-300 ml-auto montserrat">View Details</Button>
          </CardFooter>
        </Card>
      ))}

      {showNotification && (
        <Notification message="Booked Successfully!" onClose={handleCloseNotification}/>
      )}
    </div>
  );
}