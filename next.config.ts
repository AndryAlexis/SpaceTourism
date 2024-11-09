import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Enables static exports
  basePath: "https://github.com/AndryAlexis/SpaceTourism",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
