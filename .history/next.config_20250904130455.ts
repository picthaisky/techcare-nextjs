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

interface WebpackConfig {
  resolve: {
    alias?: Record<string, string>;
  };
}

interface NextConfig {
  experimental: ExperimentalConfig;
  images: ImagesConfig;
  compiler: CompilerConfig;
  webpack: (config: WebpackConfig) => WebpackConfig;
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
  webpack: (config: WebpackConfig): WebpackConfig => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "./src"),
    };
    return config;
  },
};

export default nextConfig;
