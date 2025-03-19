/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Required for static export
  },
  // Disable server-based features
  trailingSlash: true,
}

module.exports = nextConfig 