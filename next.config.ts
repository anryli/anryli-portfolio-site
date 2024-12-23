/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Ensures trailing slashes for all paths
  assetPrefix: './', // Ensures assets are served with relative paths
  images: {
    unoptimized: true, // Disables Image Optimization API
  },
};

module.exports = nextConfig;



