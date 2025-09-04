"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Grid = () => {
  const t = useTranslations("grid");

  const tiles: { id: number; title: string; description: string; icon: ReactNode }[] = [
    {
      id: 1,
      title: t("mobileApps.title"),
      description: t("mobileApps.description"),
      icon: (
        // Smartphone
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth={1.5}
          className="w-10 h-10 text-yellow-400 flex-shrink-0">
          <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      ),
    },
    {
      id: 2,
      title: t("webDevelopment.title"),
      description: t("webDevelopment.description"),
      icon: (
        // Fenêtre navigateur
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth={1.5}
          className="w-10 h-10 text-yellow-400 flex-shrink-0">
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
          <line x1="3" y1="8" x2="21" y2="8" />
          <circle cx="7" cy="6" r="0.5" />
          <circle cx="9" cy="6" r="0.5" />
          <circle cx="11" cy="6" r="0.5" />
        </svg>
      ),
    },
    {
      id: 3,
      title: t("uiuxDesign.title"),
      description: t("uiuxDesign.description"),
      icon: (
        // Crayon + règle croisés
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth={1.5}
          className="w-10 h-10 text-yellow-400 flex-shrink-0">
          <path d="M3 21l3-3 3 3-3 3-3-3z" />
          <path d="M14.5 5.5l4 4" />
          <path d="M16 3l5 5-13 13H3v-5L16 3z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: t("backendDevelopment.title"),
      description: t("backendDevelopment.description"),
      icon: (
        // Serveur / stack
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth={1.5}
          className="w-10 h-10 text-yellow-400 flex-shrink-0">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="lg:min-h-[70vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <section id="about" className="pt-4 pb-12 px-8 xl:pt-0 xl:pb-0 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400">{t("whatImDoing")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {tiles.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-lg p-6 flex gap-4 items-start shadow-lg"
            >
              {icon}
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
};

export default Grid;
