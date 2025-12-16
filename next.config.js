// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: false,
  webpack: (config) => {
    // force webpack resolver
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = false;
    return config;
  },
  typescript: {
    // Do not fail production build on TS errors while you migrate
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};
module.exports = nextConfig;
