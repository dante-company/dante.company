/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

const withNextIntl = require('next-intl/plugin')('./src/locales/i18n.ts');
module.exports = withNextIntl(nextConfig)
