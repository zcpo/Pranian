
import GenkitWebpackPlugin from '@genkit-ai/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins.push(new GenkitWebpackPlugin({
      allowedDevOrigins: ["http://localhost:4000", "https://*.firebase.app", "https://*.web.app"]
    }));
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
       {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      }
    ],
  },
};

export default nextConfig;
