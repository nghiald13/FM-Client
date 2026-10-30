import type { NextConfig } from "next";

const AUTH_ZONE_URL = process.env.AUTH_ZONE_URL ?? "http://localhost:3001";
const MERCHANT_ZONE_URL = process.env.MERCHANT_ZONE_URL ?? "http://localhost:3002";

const nextConfig: NextConfig = {
  transpilePackages: ["@freemarket/ui", "@freemarket/utils"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async rewrites() {
    return [
      { source: "/merchant", destination: `${MERCHANT_ZONE_URL}/merchant` },
      { source: "/merchant/:path+", destination: `${MERCHANT_ZONE_URL}/merchant/:path+` },
      { source: "/login", destination: `${AUTH_ZONE_URL}/login` },
      { source: "/register", destination: `${AUTH_ZONE_URL}/register` },
      { source: "/verify", destination: `${AUTH_ZONE_URL}/verify` },
      { source: "/api/auth/:path+", destination: `${AUTH_ZONE_URL}/api/auth/:path+` },
      { source: "/auth-static/:path+", destination: `${AUTH_ZONE_URL}/auth-static/:path+` },
    ];
  },
};

export default nextConfig;