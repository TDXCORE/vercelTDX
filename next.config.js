/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        path: false,
        crypto: false,
        stream: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;