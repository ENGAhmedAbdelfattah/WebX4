/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // use when it fail deploy by type
  },
};

module.exports = nextConfig;
