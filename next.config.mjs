/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
