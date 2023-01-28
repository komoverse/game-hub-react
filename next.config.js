/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "id", "zh", "hi"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    domains: ['cdn.shyft.to', 'www.arweave.net'],
  },
};
