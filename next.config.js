const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3t32hsnjxo7q6.cloudfront.net",
        port: "",
        pathname: "/i/**",
      },
    ],
  },
};

module.exports = nextConfig;
