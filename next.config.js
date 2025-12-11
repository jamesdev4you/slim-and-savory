// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Do not fail build on ESLint errors during development
    ignoreDuringBuilds: true,
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
