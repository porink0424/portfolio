/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: process.env.GITHUB_ACTIONS && "/portfolio",
  basePath: process.env.GITHUB_ACTIONS && "/portfolio",
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
