"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";
import Image from "next/image";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: [1, 0],
              transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
            }}
            className="h-96 aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute pointer-events-none"
          >
            <Image
              src="/images/logo.png"
              width={1000}
              height={1000}
              className="object-contain h-full w-full"
              alt=""
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
