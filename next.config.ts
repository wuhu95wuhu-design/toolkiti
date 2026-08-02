import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staticGenerationRetryCount: 3,
    staticGenerationMaxConcurrency: 8,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async rewrites() {
    return [
      { source: "/api/data.json", destination: "/api/data" },
    ];
  },
};

export default nextConfig;

// Build marker: full rebuild 2026-08-02T05:31:45.907Z
