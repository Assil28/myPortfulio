import Grid from "@/components/Grid";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import UsedTechs from "@/components/UsedTechs";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FiDownload } from "react-icons/fi";

interface HomeProps {
  params: {
    locale: string;
  };
}

export default function Home({ params: { locale } }: HomeProps) {
  const t = useTranslations("Index");

  return (
    <section className="h-fit">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg">{t("subtitle")}</span>
            <h1 className="h1 text-7xl py-4">
              {t("greeting")} <br />{" "}
              <span className="text-accent">{t("name")}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-sm text-[15px] text-white/80">
              {t("description")}
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/images/curriculum vitae Dekhil_Assil.pdf" download className="no-underline">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>{t("downloadCV")}</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />

      <Grid />
      <UsedTechs />
    </section>
  );
}
