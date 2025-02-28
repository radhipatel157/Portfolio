import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  eslint: {
    ignoreDuringBuilds: false, // Change this to false to stop builds on ESLint errors
  },
};
