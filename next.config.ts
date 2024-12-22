/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures static output for GitHub Pages
  assetPrefix: './', // Ensures assets work correctly with relative paths
  trailingSlash: true, // Adds a trailing slash to paths
};

module.exports = nextConfig;

