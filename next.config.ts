import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF is noticeably slower to encode than WebP for on-demand optimization;
    // WebP still gives strong compression without the extra origin CPU cost.
    formats: ["image/webp"],
    // Trimmed from Next's default (up to 3840px) — this site's largest layout
    // container is 1280px, so nothing here ever needs to render wider than ~1920px.
    deviceSizes: [384, 640, 750, 828, 1080, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
