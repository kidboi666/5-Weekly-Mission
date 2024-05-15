/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  eslint: {
    // 빌드 중 ESLint 오류를 무시하도록 설정
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
