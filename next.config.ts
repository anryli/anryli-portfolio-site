/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes to all routes
  assetPrefix: './', // Ensure assets are served with relative paths
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
};

module.exports = nextConfig;
