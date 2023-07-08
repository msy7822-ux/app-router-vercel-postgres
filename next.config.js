/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa");

const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  },
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: false,
    runtimeCaching,
  }),
};

module.exports = nextConfig;
