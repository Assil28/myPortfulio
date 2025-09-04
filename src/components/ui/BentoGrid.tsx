import { cn } from "@/lib/utils";
import { FileTreeDemo } from "../FileTreeDemo";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[8rem] lg:h-fit grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-transparent justify-between flex flex-col space-y-4 border-[#34E4EA]",
        className
      )}
      style={{
        background: "#141418",
        backgroundColor:
          "radial-gradient(circle, rgba(28,28,34,1) 0%, rgba(14,177,210,1) 32%, rgba(52,228,234,1) 100%)",
      }}
    >
      <div className="w-full h-full absolute">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover, object-center")}
          />
        )}
      </div>
      <div
        className={cn(
          "group-hover/bento:translate-x-2 transition duration-200 realtive md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          titleClassName
        )}
      >
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
          {title}
        </div>

        {/* {id === 2 && <GlobeDemo />} */}

        {id === 3 && (
          <div className="absolute inset-0 flex justify-center items-center w-full">
            {/* <div className="flex flex-col gap-3 lg:gap-8">
              {["React.js", "Next.js", "TypeScript"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py4 lg:px-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#1c1c22]"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#1c1c22]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-4 px-3 rounded-lg text-center bg-[#1c1c22]" />

              {["Node.js", "Angular", "SQL"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#1c1c22]"
                >
                  {item}
                </span>
              ))}
            </div> */}
            <FileTreeDemo />
          </div>
        )}
      </div>
    </div>
  );
};
