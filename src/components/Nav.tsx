"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

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

const Nav = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navigation");

  const createLocalizedPath = (path: string): string => `/${locale}${path}`;

  return (
    <nav className="flex gap-8">
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
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {t(link.name)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
