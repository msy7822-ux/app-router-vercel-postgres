/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa");

const pwaSetting = withPWA({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});

const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  },
  // ...withPWA({
  //   pwa: {
  //     dest: "public",
  //     register: true,
  //     skipWaiting: false,
  //     runtimeCaching,
  //   },
  // }),
  ...pwaSetting({}),
};

module.exports = nextConfig;
