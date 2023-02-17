/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
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
      'hub.komoverse.dev',
      'hub.komoverse.io',
      'komo.s3.amazonaws.com',
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
    ],
  },
  trailingSlash: true,
};
