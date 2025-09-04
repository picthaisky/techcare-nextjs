import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // other experimental options can go here
  },
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com"],
  },
};

export default nextConfig;
