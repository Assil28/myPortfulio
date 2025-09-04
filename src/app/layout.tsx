import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { unstable_noStore } from "next/cache";
import { Analytics } from "@vercel/analytics/react"

async function loadMessages(locale: string) {
  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return messages;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return null;
  }
}

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  unstable_noStore();
  const locale = params.locale || "en";

  const messages = await loadMessages(locale);

  if (!messages) {
    notFound();
  }

  return (
    <body>
    <Analytics/>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </body>
  );
}
