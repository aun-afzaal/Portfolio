/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Prevents server-side fetching timeouts
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.abcodify.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
