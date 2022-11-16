/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['jackadmin.co.kr'],
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: true },
}


module.exports = nextConfig
