"use client";
import CountUp from "react-countup";
import { useLocale, useTranslations } from "next-intl";

const Stats = () => {
  const t = useTranslations("stats");

  const stats = [
    {
      num: 4,
      text: t("yearsOfExperience"),
    },
    {
      num: 37,
      text: t("projectsCompleted"),
    },
    {
      num: 7,
      text: t("technologiesMastered"),
    },
    {
      num: 500,
      text: t("codeCommits"),
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-2 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-[54px] font-extrabold"
                />
                {item.num === 500 && (
                  <span className="text-xl xl:text-2xl font-extrabold relative -top-3 -ml-3">
                    +
                  </span>
                )}
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
