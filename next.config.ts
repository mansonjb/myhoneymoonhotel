import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 604800, // 7 days
    remotePatterns: [
      { protocol: 'https', hostname: '**.booking.com' },
      { protocol: 'https', hostname: '**.expedia.com' },
      { protocol: 'https', hostname: '**.tripadvisor.com' },
      { protocol: 'https', hostname: 'serpapi.com' },
      { protocol: 'https', hostname: '**.serpapi.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.googleusercontent.com' },
      { protocol: 'https', hostname: '**.amazonaws.com' },
      { protocol: 'https', hostname: 'cf.bstatic.com' },
      { protocol: 'https', hostname: 'r-xx.bstatic.com' },
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'https', hostname: '**.media-amazon.com' },
      { protocol: 'https', hostname: 'dynamic-media-cdn.tripadvisor.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'lh5.googleusercontent.com' },
      { protocol: 'https', hostname: '**.akamaized.net' },
      { protocol: 'https', hostname: '**.expediagroup.com' },
    ],
  },
}

export default nextConfig
