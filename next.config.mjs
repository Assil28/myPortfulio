import createNextIntlPlugin from "next-intl/plugin";
import { withSentryConfig } from "@sentry/nextjs";
import path from "path";

const withNextIntl = createNextIntlPlugin(path.resolve("./src/i18n.ts"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.microlink.io"],
  },
};

const sentryConfig = withSentryConfig(nextConfig, {
  org: "boulaabi",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});

export default withNextIntl(sentryConfig);
