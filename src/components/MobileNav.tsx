"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Flag from "react-flagkit";
import { useRouter, useSearchParams } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navigation");
  const router = useRouter();
  const searchParams = useSearchParams();

  const otherLocale = locale === "en" ? "fr" : "en";

  const createLocalizedPath = (path: string): string => `/${locale}${path}`;

  const handleLocaleChange = () => {
    const newPath = `/${otherLocale}${pathname.replace(`/${locale}`, "")}`;
    const search = searchParams.toString();
    router.replace(`${newPath}${search ? `?${search}` : ""}`);
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold flex justify-center items-center">
              <div className="flex">
                <div className="h-14 aspect-square">
                  <Image
                    src="/images/logo.png"
                    width={1000}
                    height={1000}
                    className="object-contain h-full w-full"
                    alt="Logo"
                  />
                </div>
                <span className="text-accent self-end">.</span>
              </div>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const localizedPath = createLocalizedPath(link.path);
            return (
              <Link
                href={localizedPath}
                key={index}
                className={`${
                  localizedPath === pathname
                    ? "text-accent border-b-2 border-accent"
                    : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {t(link.name)}
              </Link>
            );
          })}
        </nav>
        {/* Language Switcher Button */}
        <div className="mt-8 flex justify-center">
          <button
            className="rounded-full bg-accent p-2"
            onClick={handleLocaleChange}
          >
            {locale === "en" ? (
              <Flag country="FR" size={24} />
            ) : (
              <Flag country="GB" size={24} />
            )}
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
