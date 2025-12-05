
/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is a dev-only configuration to allow the Next.js dev server to accept requests
  // from the Firebase Studio environment.
  allowedDevOrigins: [
    'https://6000-firebase-studio-1764097066853.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
       {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
