"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { animate, motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Grid = () => {
  const t = useTranslations("grid");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" lg:min-h-[70vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <section id="about" className="pt-4 pb-12 px-8 xl:pt-0 xl:pb-0 ">
        <BentoGrid>
          <BentoGridItem
            id={1}
            key={1}
            title={t("title1")}
            description=""
            className="lg:col-span-2 md:col-span-3 row-span-2 sm:row-span-3 md:row-span-4 lg:min-h-[60vh] "
            img="/images/hello-pic.jpg"
            imgClassName="w-full h-full mix-blend-lighten object-contain"
            titleClassName="justify-end lg:max-w-[1200px] "
            spareImg=""
          />
          <BentoGridItem
            id={2}
            key={2}
            title={t("title2")}
            description=""
            className="lg:col-span-1 md:col-span-1 md:row-span-1 lg:p-0 lg:m-0 "
            img=""
            imgClassName=""
            titleClassName="justify-start lg:p-0 lg:m-0 lg:pl-4 lg:text-xl"
            spareImg=""
          />
          <BentoGridItem
            id={3}
            key={3}
            title={t("title3")}
            description=""
            className="lg:col-span-1 md:col-span-2 row-span-3 md:row-span-3"
            img=""
            imgClassName=""
            titleClassName="justify-start"
            spareImg=""
          />
        </BentoGrid>
      </section>
    </motion.section>
  );
};

export default Grid;
