import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Interface so tsx doesnt scream in pain
interface PointProps {
  className?: string;
  onClick?: () => void;
}

// A function that makes an html framer motion div for each point
function Point({ className = "", onClick }: PointProps) {
  return (
    <motion.div
      className={`absolute w-4 h-4 p-0.5 bg-orange-300 rounded-full -translate-x-1/2 -translate-y-1/2 ${className} cursor-pointer`}
      onClick={onClick}
      initial={{ scale: 1 }}
      animate={{ scale: 1.25 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        delay: Math.random(),
        ease: "easeInOut",
      }}
    >
      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
    </motion.div>
  );
}

export default function InteractiveImage() {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  {/* Point data, holds title and content */}
  const pointData = [
    {
      title: "The Peak",
      content: "Explore our world-class slopes and tackle the challenging terrain at the summit. Join our ski and snowboard club for access to the best runs and facilities.",
    },
    {
      title: "Our Fields",
      content: "Experience the thrill of carving through our expansive snow-covered fields. Our groomed trails and state-of-the-art snowmaking equipment ensure perfect conditions all season long.",
    },
    {
      title: "Our Chalets",
      content: "Unwind in the comfort of our cozy mountain chalets after a day on the slopes. Enjoy stunning views, modern amenities, and exceptional hospitality during your stay with us.",
    },
    {
      title: "The Amazing View",
      content: "Take in the breathtaking panoramic views of the surrounding peaks and valleys from our mountain-top vantage point. This is the perfect backdrop for your skiing and snowboarding adventures.",
    },
  ];

  const handlePointClick = (index: number) => {
    if (activePoint !== null && activePoint !== index) {
      setActivePoint(index);
    } else {
      setActivePoint(index);
    }
  };

  const handleCloseModal = () => {
    setActivePoint(null);
  };

  return (
    <div
      id="mountain-scroll-to"
      className="w-full h-[900px] z-10 pt-20 relative bg-cover bg-center"
      style={{ backgroundImage: `url('/resources/home/mountain-2.jpg')` }}
    >
      <h1 className="text-6xl font-bold text-center text-white montserrat max-w-[90vw]">THE MOUNTAINS</h1>
      {/* Bunch of points */}
      <Point
        className="top-[23rem] md:top-[21rem] left-[48%] md:left-[43%]"
        onClick={() => handlePointClick(0)}
      />
      <Point
        className="top-[27rem] left-[20%] md:left-[25%]"
        onClick={() => handlePointClick(1)}
      />
      <Point
        className="top-[33rem] left-[94%] md:left-[82%]"
        onClick={() => handlePointClick(2)}
      />
      <Point
        className="top-[25rem] left-[70%] md:left-[62%]"
        onClick={() => handlePointClick(3)}
      />

      <AnimatePresence>
        {activePoint !== null && (
          <motion.div
            key={activePoint}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.3,
            }}
            className="absolute bg-white max-w-[15rem] sm:max-w-[20rem] shadow-lg rounded-lg p-4 z-20 ml-[-10rem] mt-8"

            // Positioning for the popup based on the active point
            style={{
              top: `${
                pointData[activePoint].title === pointData[0].title
                  ? "21rem"
                  : pointData[activePoint].title === pointData[1].title
                  ? "27rem"
                  : pointData[activePoint].title === pointData[2].title
                  ? "33rem"
                  : "25rem"
              }`,
              left: `${
                pointData[activePoint].title === pointData[0].title
                  ? "43%"
                  : pointData[activePoint].title === pointData[1].title
                  ? "25%"
                  : pointData[activePoint].title === pointData[2].title
                  ? "82%"
                  : "62%"
              }`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <button
              className="absolute top-2 right-3.5 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold">{pointData[activePoint].title}</h3>
            <p>{pointData[activePoint].content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}