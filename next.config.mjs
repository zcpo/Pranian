/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Allow Firebase Studio dev server
  allowedDevOrigins: [
    "https://6000-firebase-studio-1764097066853.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },

  // Required for Genkit
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      superjson: require.resolve("superjson"),
    };
    return config;
  },

  async rewrites() {
    return [
      {
        source: "/api/genkit/:path*",
        destination: "http://127.0.0.1:3400/api/genkit/:path*",
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
