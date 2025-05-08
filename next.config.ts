import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [new URL('https://placehold.co/600x400?text=Placeholder')],
  },
}

export default nextConfig;
