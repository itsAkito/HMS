import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/f/**',
      },
    ],
  },
  turbopack: {
    root: ".",
    rules: {
      "*.md": { loaders: [] }, // tells Turbopack to ignore markdown files
    },
  },
};

export default nextConfig;
