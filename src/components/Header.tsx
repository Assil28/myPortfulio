"use client";

import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Flag from "react-flagkit";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Header = () => {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const otherLocale = locale === "en" ? "fr" : "en";

  const handleLocaleChange = () => {
    const newPath = `/${otherLocale}${pathname.replace(`/${locale}`, "")}`;
    const search = searchParams.toString();
    router.replace(`${newPath}${search ? `?${search}` : ""}`);
  };

  return (
    <header className="py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <div className="flex">
              <div className="h-14 aspect-square">
                <Image
                  src="/images/logo.png"
                  width={1000}
                  height={1000}
                  className="object-contain h-full w-full"
                  alt=""
                />
              </div>
              <span className="text-accent self-end">.</span>
            </div>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>{t("hireMe")}</Button>
          </Link>
          {/* Language Switcher Button */}
          <Button className="rounded-full" onClick={handleLocaleChange}>
            {locale === "en" ? (
              <Flag country="FR" size={24} />
            ) : (
              <Flag country="GB" size={24} />
            )}
          </Button>{" "}
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
