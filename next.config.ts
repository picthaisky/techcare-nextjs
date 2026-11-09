import type { NextConfig } from 'next'

// Allow dev origins (optional): set comma-separated origins in NEXT_ALLOWED_DEV_ORIGINS
const devOrigins = process.env.NEXT_ALLOWED_DEV_ORIGINS
  ? process.env.NEXT_ALLOWED_DEV_ORIGINS.split(',').map((s) => s.trim()).filter(Boolean)
  : undefined

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  // เปิดใช้งาน experimental features
  experimental: {
    optimizePackageImports: ["lucide-react"],
    optimizeCss: false,
  },

  // การตั้งค่า images
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // การตั้งค่า TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // การตั้งค่า ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },

  // การตั้งค่า headers สำหรับ fonts
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // การตั้งค่า redirects หากจำเป็น
  async redirects() {
    return [];
  },

  // การตั้งค่า rewrites หากจำเป็น
  async rewrites() {
    return [];
  },
  // อนุญาต cross-origin เฉพาะตอนพัฒนา (Next.js 15)
  ...(devOrigins && devOrigins.length ? { allowedDevOrigins: devOrigins } : {}),
};

export default nextConfig;
