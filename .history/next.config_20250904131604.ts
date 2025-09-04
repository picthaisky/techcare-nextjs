import path from "path";

/** @type {import('next').NextConfig} */
interface RemotePattern {
  protocol: string;
  hostname: string;
}

interface ImagesConfig {
  domains: string[];
  remotePatterns: RemotePattern[];
}

interface CompilerConfig {
  removeConsole: boolean;
}

interface ExperimentalConfig {
  appDir: boolean;
}

interface NextConfig {
  experimental: ExperimentalConfig;
  images: ImagesConfig;
  compiler: CompilerConfig;
  webpack: (config: unknown) => unknown;
}

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com", "picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (config: unknown): unknown => {
    // Type assertion to allow property access
    const cfg = config as { resolve: { alias: Record<string, string> } };
    cfg.resolve.alias = {
      ...(cfg.resolve.alias || {}),
      "@": path.resolve(__dirname, "./src"),
    };
    return cfg;
  },
};

export default nextConfig;
