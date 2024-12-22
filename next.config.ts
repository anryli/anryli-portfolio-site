import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Ensures static output for GitHub Pages
  assetPrefix: './', // Ensures assets work correctly with relative paths
  trailingSlash: true, // Adds a trailing slash to paths
};

export default nextConfig;
