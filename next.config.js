const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.abcodify.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
