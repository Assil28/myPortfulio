import IconCloud from "@/components/ui/IconCloud";
import Social from "./Social";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "kubernetes",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "angular",
  "android",
  "trello",
  "agile",
  "postman",
];

const UsedTechs = () => {
  return (
    <section className="relative flex flex-col w-full justify-between overflow-hidden rounded-lg bg-background pb-4 mx-auto my-0 space-y-8 px-4">
      {}

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full px-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 DEKHIL ASSIL
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          <Social
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};
export default UsedTechs;
