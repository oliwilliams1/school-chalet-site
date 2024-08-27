import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from "@nextui-org/button"
import Link from "next/link";

export default function JoinUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-3/5 min-h-[300px] bg-slate-700 p-24">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-white text-4xl mb-8">Join the Club</h2>
        <p className="text-white text-lg text-center max-w-[80%] mb-12">
          Become a member of our exclusive ski club and enjoy a range of
          benefits, including discounted lift tickets, early access to
          events, and access to our private ski lounge.
        </p>
        <div className="flex space-x-6">
          <Button
            className="bg-white text-slate-700 hover:bg-slate-200"
            size="lg"
            onClick={() => setIsExpanded(true)}
          >
            Learn More
          </Button>
          <Button
            as={Link}
            className="bg-sky-500 text-white hover:bg-sky-600"
            size="lg"
            href="/register"
          >
            Join The Club
          </Button>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 max-w-[80%] text-white text-lg"
            >
              <p className="text-white text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque molestiae officia dicta ipsam, nam quia perferendis ad sit est dolor incidunt explicabo voluptatem eaque laboriosam necessitatibus eius odit! Inventore.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}