/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  webpack(config) {
    // Webpack ayarlarını güncelle
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;

    return config;
  },
};

export default nextConfig;
