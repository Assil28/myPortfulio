"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaPhp,
  FaJava,
  FaPython,
} from "react-icons/fa";

import { motion } from "framer-motion";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiSpringboot,
  SiCplusplus,
  SiSharp,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiSwift,
  SiKotlin,
  SiDotnet,
  SiExpress,
  SiFlutter,
  SiOracle,
  SiJenkins,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LinkPreview } from "@/components/ui/LinkPreview";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

import { FaProjectDiagram, FaTasks } from "react-icons/fa";

const Resume = () => {
  const t = useTranslations("resume");
  const commonSkills = useTranslations("resume.skills.items");

  const conception = {
    title: t("skills.conception.title"),
    description: t("skills.conception.description"),
    items: [
      {
        icon: <FaProjectDiagram />,
        name: t("skills.conception.items.uml"),
      },
    ],
  };

  const framework = {
    title: t("skills.framework.title"),
    description: t("skills.framework.description"),
    items: [
      {
        icon: <SiSpringboot />,
        name: t("skills.framework.items.springboot"),
      },
      {
        icon: <SiDotnet />,
        name: t("skills.framework.items.dotnet"),
      },
      {
        icon: <SiExpress />,
        name: t("skills.framework.items.expressjs"),
      },
      {
        icon: <FaNodeJs />,
        name: t("skills.framework.items.nodejs"),
      },
      {
        icon: <FaAngular />,
        name: t("skills.framework.items.angular"),
      },
      {
        icon: <FaReact />,
        name: t("skills.framework.items.reactjs"),
      },
      {
        icon: <SiFlutter />,
        name: t("skills.framework.items.flutter"),
      },
    ],
  };

  const programming = {
    title: t("skills.programming.title"),
    description: t("skills.programming.description"),
    items: [
      {
        icon: <FaPython />,
        name: t("skills.programming.items.python"),
      },
      {
        icon: <SiCplusplus />,
        name: t("skills.programming.items.cplusplus"),
      },
      {
        icon: <SiSharp />,
        name: t("skills.programming.items.csharp"),
      },
      {
        icon: <FaJava />,
        name: t("skills.programming.items.java"),
      },
      {
        icon: <FaPhp />,
        name: t("skills.programming.items.php"),
      },
      {
        icon: <FaJs />,
        name: t("skills.programming.items.javascript"),
      },
      {
        icon: <SiTypescript />,
        name: t("skills.programming.items.typescript"),
      },
      {
        icon: <SiSwift />,
        name: t("skills.programming.items.swift"),
      },
      {
        icon: <SiKotlin />,
        name: t("skills.programming.items.kotlin"),
      },
    ],
  };

  const database = {
    title: t("skills.database.title"),
    description: t("skills.database.description"),
    items: [
      {
        icon: <SiMysql />,
        name: t("skills.database.items.mysql"),
      },
      {
        icon: <SiMongodb />,
        name: t("skills.database.items.mongodb"),
      },
      {
        icon: <SiFirebase />,
        name: t("skills.database.items.firebase"),
      },
      {
        icon: <SiOracle />,
        name: t("skills.database.items.oracle"),
      },
      {
        icon: <SiPostgresql />,
        name: t("skills.database.items.postgresql"),
      },
    ],
  };

  const projectManagement = {
    title: t("skills.projectManagement.title"),
    description: t("skills.projectManagement.description"),
    items: [
      {
        icon: <FaTasks />,
        name: t("skills.projectManagement.items.git"),
      },
      {
        icon: <FaTasks />,
        name: t("skills.projectManagement.items.trello"),
      },
      {
        icon: <FaTasks />,
        name: t("skills.projectManagement.items.agile"),
      },
      {
        icon: <FaTasks />,
        name: t("skills.projectManagement.items.postman"),
      },
    ],
  };

  const devOps = {
    title: t("skills.devops.title"),
    description: t("skills.devops.description"),
    items: [
      {
        icon: <SiDocker />,
        name: t("skills.devops.items.docker"),
      },
      {
        icon: <SiKubernetes />,
        name: t("skills.devops.items.kubernetes"),
      },
      {
        icon: <SiJenkins />,
        name: t("skills.devops.items.cicd"),
      },
    ],
  };

  const experienceItems = [
    {
      company: t("experience.items.internship4.company"),
      position: t("experience.items.internship4.position"),
      duration: t("experience.items.internship4.duration"),
      link: "",
    },
    {
      company: t("experience.items.internship2.company"),
      position: t("experience.items.internship2.position"),
      duration: t("experience.items.internship2.duration"),
      link: "",
    },
    {
      company: t("experience.items.internship3.company"),
      position: t("experience.items.internship3.position"),
      duration: t("experience.items.internship3.duration"),
      link: "",
    },
    {
      company: t("experience.items.internship1.company"),
      position: t("experience.items.internship1.position"),
      duration: t("experience.items.internship1.duration"),
      link: "",
    },
  ];

  const about = {
    title: t("about.title"),
    description: t("about.description"),
    info: [
      { fieldName: t("about.name"), fieldValue: "Dekhil Assil" },
      { fieldName: t("about.phone"), fieldValue: "(+33) 7 59 52 11 69" },
      { fieldName: t("about.experience"), fieldValue: "+4 Years" },
      {
        fieldName: t("about.email"),
        fieldValue: "assil.dkhil28@gmail.com",
      },
      {
        fieldName: t("about.languages"),
        fieldValue: t("about.lgDetails"),
      },
    ],
  };

  const educationItems = [
    {
      institution: t("education.items.education1.institution"),
      degree: t("education.items.education1.degree"),
      duration: t("education.items.education1.duration"),
      link: t("education.items.education1.link"),
    },
    {
      institution: t("education.items.education2.institution"),
      degree: t("education.items.education2.degree"),
      duration: t("education.items.education2.duration"),
      link: t("education.items.education2.link"),
    },
    {
      institution: t("education.items.education3.institution"),
      degree: t("education.items.education3.degree"),
      duration: t("education.items.education3.duration"),
      link: t("education.items.education3.link"),
    },
    {
      institution: t("education.items.education4.institution"),
      degree: t("education.items.education4.degree"),
      duration: t("education.items.education4.duration"),
      link: t("education.items.education4.link"),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[68px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">
              {t("experience.title")}
            </TabsTrigger>
            <TabsTrigger value="education">{t("education.title")}</TabsTrigger>
            <TabsTrigger value="skills">{t("skills.title")}</TabsTrigger>
            <TabsTrigger value="about">{t("about.title")}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("experience.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("experience.description")}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {experienceItems.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#27272C] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative group"
                      >
                        <span className="text-accent">{item.position}</span>
                        <h3 className="min-h-[60px] text-center lg:text-left">
                          {item.company}
                        </h3>
                        <div>
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                        {item.link && (
                          <Link
                            href={item.link}
                            className="w-[40px] h-[40px] rounded-full bg-white transition-all duration-500 flex justify-center items-center hover:-rotate-45 group-hover:bg-accent absolute bottom-4 right-4"
                          >
                            <BsArrowDownRight className="text-primary text-3xl" />
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("education.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("education.description")}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {educationItems.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#27272C] h-[200px] py-3 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.degree}</span>
                        {item.link ? (
                          <LinkPreview
                            url={item.link}
                            className="min-h-[30px] text-center lg:text-left"
                          >
                            {item.institution}
                          </LinkPreview>
                        ) : (
                          <h3 className="min-h-[30px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                        )}
                        <div>
                          <span className="w-[6px] h-[6px] rounded-full bg-accent text-white"></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{t("skills.title")}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {t("skills.description")}
                  </p>
                </div>
                <h4 className="text-2xl font-bold text-center xl:text-left">
                  {conception.title}
                </h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {conception.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#27272C] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
                <h4 className="text-2xl font-bold text-center xl:text-left">
                  {framework.title}
                </h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {framework.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#27272C] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
                <h4 className="text-2xl font-bold text-center xl:text-left">
                  {programming.title}
                </h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {programming.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#27272C] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                <h4 className="text-2xl font-bold text-center xl:text-left">
                  {database.title}
                </h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {database.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#27272C] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                <h4 className="text-2xl font-bold text-center xl:text-left">
                  {projectManagement.title}
                </h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {projectManagement.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#27272C] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                <h4 className="text-2xl font-bold text-center xl:text-left">
                  {devOps.title}
                </h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] pb-20">
                  {devOps.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#27272C] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <div className="h-[700px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-center justify-center xl:justify-start gap-4 ${
                          item.fieldName === t("about.languages")
                            ? "whitespace-nowrap"
                            : ""
                        }`}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;