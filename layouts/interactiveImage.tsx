import { randomInt } from "crypto";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PointProps {
  className?: string;
  onClick?: () => void;
}

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
      className="w-full h-[900px] z-10 pt-20 relative bg-cover bg-center"
      style={{ backgroundImage: `url('/images/maunga-hero.jpeg')` }}
    >
      <h1 className="text-6xl font-bold text-center">THE MOUNTAIN</h1>

      <Point
        className="top-[19rem] left-[51%]"
        onClick={() => handlePointClick(0)}
      />
      <Point
        className="top-[30rem] left-[34%]"
        onClick={() => handlePointClick(1)}
      />
      <Point
        className="top-[25rem] left-[62%]"
        onClick={() => handlePointClick(2)}
      />
      <Point
        className="top-[39rem] left-[78%]"
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
            className="absolute bg-white shadow-lg rounded-lg p-4 z-20 ml-[-7.6rem] mt-4"
            style={{
              top: `${
                activePoint === 0
                  ? "19rem"
                  : activePoint === 1
                  ? "30rem"
                  : activePoint === 2
                  ? "25rem"
                  : "39rem"
              }`,
              left: `${
                activePoint === 0
                  ? "51%"
                  : activePoint === 1
                  ? "34%"
                  : activePoint === 2
                  ? "62%"
                  : "78%"
              }`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold">Point {activePoint + 1}</h3>
            <p>This is the content for point {activePoint + 1}.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}