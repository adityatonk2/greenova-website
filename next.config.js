/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
}

module.exports = nextConfig

