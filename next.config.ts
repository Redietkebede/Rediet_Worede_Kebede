import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "www.shadcnblocks.com",
      },
      {
        protocol: "https",
        hostname: "shadcnblocks.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
