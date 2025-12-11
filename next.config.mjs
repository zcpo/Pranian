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
  reactStrictMode: true,
  swcMinify: true,
  // This is required to get Genkit to work with Next.js.
  // See: https://github.com/firebase/genkit/issues/1099
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'superjson': require.resolve('superjson'),
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/genkit/:path*',
        destination: 'http://127.0.0.1:3400/api/genkit/:path*',
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
