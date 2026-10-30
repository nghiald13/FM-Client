import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/auth-static",
  transpilePackages: ["@freemarket/ui", "@freemarket/utils"],
  async rewrites() {
    // Để truy cập trực tiếp localhost:3001 vẫn tải được asset
    return {
      beforeFiles: [{ source: "/auth-static/_next/:path+", destination: "/_next/:path+" }],
    };
  },
};

export default nextConfig;
