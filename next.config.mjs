/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  turbopack: {}, // 👈 IMPORTANT (this disables the error)
};

export default nextConfig;
