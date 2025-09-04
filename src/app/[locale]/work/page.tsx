"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/ui/WorkSlideBtns";
import { useTranslations } from "next-intl"; // Import the translation hook

const Work = () => {
  const t = useTranslations("work"); // Fetch the translations for the "work" section

  const projects = [
    {
      id: 1,
      num: t("projects.project1.num"),
      category: t("projects.project1.category"),
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      stack: t("projects.project1.stack").split("+"),
      image: t("projects.project1.image"),
      live: t("projects.project1.live"),
      github: t("projects.project1.github"),
    },
    {
      id: 2,
      num: t("projects.project2.num"),
      category: t("projects.project2.category"),
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      stack: t("projects.project2.stack").split("+"),
      image: t("projects.project2.image"),
      live: t("projects.project2.live"),
      github: t("projects.project2.github"),
    },
    {
      id: 3,
      num: t("projects.project3.num"),
      category: t("projects.project3.category"),
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      stack: t("projects.project3.stack").split("+"),
      image: t("projects.project3.image"),
      live: t("projects.project3.live"),
      github: t("projects.project3.github"),
    },
    {
      id: 4,
      num: t("projects.project4.num"),
      category: t("projects.project4.category"),
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      stack: t("projects.project4.stack").split("+"),
      image: t("projects.project4.image"),
      live: t("projects.project4.live"),
      github: t("projects.project4.github"),
    },
    {
      id: 5,
      num: t("projects.project5.num"),
      category: t("projects.project5.category"),
      title: t("projects.project5.title"),
      description: t("projects.project5.description"),
      stack: t("projects.project5.stack").split("*"),
      image: t("projects.project5.image"),
      live: t("projects.project5.live"),
      github: t("projects.project5.github"),
    },
    {
      id: 6,
      num: t("projects.project6.num"),
      category: t("projects.project6.category"),
      title: t("projects.project6.title"),
      description: t("projects.project6.description"),
      stack: t("projects.project6.stack").split("*"),
      image: t("projects.project6.image"),
      live: t("projects.project6.live"),
      github: t("projects.project6.github"),
    },
    {
      id: 7,
      num: t("projects.project7.num"),
      category: t("projects.project7.category"),
      title: t("projects.project7.title"),
      description: t("projects.project7.description"),
      stack: t("projects.project7.stack").split("*"),
      image: t("projects.project7.image"),
      live: t("projects.project7.live"),
      github: t("projects.project7.github"),
    },
  ];

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div
                className="text-8xl leading-none font-extrabold"
                style={{
                  color: "transparent",
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#fff",
                }}
              >
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 pb-20">
                {/* live project button*/}

                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t("liveProject")}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github project button*/}

                {project.github && (
                  <Link href={project.github || "#"}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t("githubRepository")}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                          unoptimized
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
