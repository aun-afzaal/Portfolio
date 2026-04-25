const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
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