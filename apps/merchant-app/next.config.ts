import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/merchant",
  transpilePackages: ["@freemarket/ui", "@freemarket/utils"],
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
};

export default nextConfig;
