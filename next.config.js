/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'dash.muarambaduk.biz.id' },
      { hostname: 'localhost' },
    ],
  },
};

module.exports = nextConfig;
