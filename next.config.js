/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.ts", "page.tsx"],
  webpackDevMiddleware: (config) => {
    return config;
  },
  // webpack: (config, { isServer }) => {
  //   // Fixes packages that depend on fs/module module
  //   if (!isServer) {
  //     config.node = { fs: 'empty', module: 'empty' }
  //   }
  //   return config
  // },
}
