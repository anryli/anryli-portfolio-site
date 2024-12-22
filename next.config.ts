/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  assetPrefix: './', // Ensures assets use relative paths for GitHub Pages
  trailingSlash: true, // Adds trailing slashes to all routes
};

module.exports = nextConfig;

