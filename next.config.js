/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_ACTIONS && "/portfolio",
  basePath: process.env.GITHUB_ACTIONS && "/portfolio",
  trailingSlash: true,
};

module.exports = nextConfig;
