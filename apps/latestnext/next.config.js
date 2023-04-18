/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui","fn"],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
