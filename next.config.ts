import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  experimental: {
    globalNotFound: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
