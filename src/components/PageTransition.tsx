"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PageTransition = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        ></motion.div>
        {children}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [0, 1, 0],
            transition: { delay: 0, duration: 0.8, ease: "easeInOut" },
          }}
          className="h-96 aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute pointer-events-none"
        >
          <Image
            src="/images/logo.png"
            width={1000}
            height={1000}
            className="object-contain h-full w-full"
            alt=""
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
