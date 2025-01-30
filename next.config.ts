import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps identify potential issues in dev mode
  images: {
    domains: ["otnwtjkdpazeirsggltw.supabase.co"], // Keep your Supabase domain for legacy support
    remotePatterns: [
      {
        protocol: "https",
        hostname: "otnwtjkdpazeirsggltw.supabase.co", // Add Supabase domain for new standards
        pathname: "/**", // Matches all paths under the domain
      },
    ],
  },
  // Add other Next.js config options here if needed
};

export default nextConfig;
