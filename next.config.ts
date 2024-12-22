import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export for GitHub Pages
  assetPrefix: './', // Ensures assets are correctly linked
  trailingSlash: true, // Adds a trailing slash to all routes
};

export default nextConfig;


