/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["aqarmap.com.eg"],
  },
 /*  i18n: {
    localeDetection: false, // 👈
    locales: ["ar", "en"],  // 👈
    defaultLocale: "en"     // 👈
  } */
};
const withNextIntl = require("next-intl/plugin")("./i18n.js");

module.exports = withNextIntl(nextConfig);
