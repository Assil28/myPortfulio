"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[280px] xl:w-[368px] aspect-square rounded-[20px] overflow-hidden mix-blend-lighten absolute top-1 left-1"
        >
          <Image
            src="/images/me.jpeg"
            priority
            quality={100}
            fill
            alt="Assil Dekhil"
            className="object-contain"
          />
        </motion.div>

        {/* square rotating container */}
        <motion.svg
          className="w-[300px] xl:w-[402px] aspect-square"
          fill="transparent"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="6"
            y="6"
            width="388"
            height="388"
            rx="20"
            ry="20"
            stroke="#4B5320"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ originX: "50%", originY: "50%" }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
