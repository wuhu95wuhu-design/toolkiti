import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 4,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;