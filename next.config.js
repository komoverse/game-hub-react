/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id', 'cn', 'in'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['cdn.shyft.to', 'www.arweave.net'],
  },
};
