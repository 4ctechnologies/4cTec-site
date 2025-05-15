import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [new URL('https://placehold.co/600x400?text=Placeholder'),new URL('https://lh3.googleusercontent.com/**')],
  },
}

export default nextConfig;
