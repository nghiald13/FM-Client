import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/merchant",
  transpilePackages: ["@freemarket/ui", "@freemarket/utils", "@freemarket/auth-config"],
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
};

export default nextConfig;
