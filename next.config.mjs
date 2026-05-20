/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },

  reactStrictMode: false,

  i18n: {
    locales: ["en", "bn"],
    defaultLocale: "en",
  },

  swcMinify: true,

  turbopack: {},

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
