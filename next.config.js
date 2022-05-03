/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
}
