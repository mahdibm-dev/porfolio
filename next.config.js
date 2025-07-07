/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      // Add domains for external images if you plan to use them
      "images.unsplash.com",
      "via.placeholder.com",
    ],
    // Enable image optimization
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
