import IconCloud from "@/components/ui/IconCloud";
import Social from "./Social";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
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
];

const UsedTechs = () => {
  return (
    <section className="relative flex flex-col w-full justify-between overflow-hidden rounded-lg bg-background pb-4 mx-auto my-0 space-y-8 px-4">
      {/* <div className="flex flex-col md:flex-row items-center text-center w-full justify-between md:space-x-4">
        <div className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 max-w-[15rem] mx-auto md:mx-0">
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
            My <span className="text-accent">Tech stack</span>
          </h1>
          <IconCloud iconSlugs={slugs} />
        </div>
        <div className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-2/3 mx-auto md:mx-0">
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white mb-4">
            Dreaming of a <span className="text-accent">standout</span> website?
            <p> I'm here to make it happen.</p>
          </h1>
          <a href="mailto:contact@ahmedboulaabi.com">
            <div>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0EB1D2_0%,#C3F73A_50%,#0EB1D2_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#1C1C22] px-5 py-2 font-bold text-white backdrop-blur-3xl text-xl">
                  Let's get in touch!
                </span>
              </button>
            </div>
          </a>
        </div>
      </div> */}

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full px-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Boulaabi Ahmed
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
