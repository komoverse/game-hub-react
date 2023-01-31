/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id', 'zh', 'hi'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: [
      'cdn.shyft.to',
      'www.arweave.net',
      'komo.s3.ap-southeast-1.amazonaws.com',
    ],
  },
};
