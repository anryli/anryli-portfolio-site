/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Ensures all routes have trailing slashes
  assetPrefix: './', // Ensures static assets use relative paths
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
};

module.exports = nextConfig;



