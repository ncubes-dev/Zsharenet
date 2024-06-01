/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true
  }

});

const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"]
  },
  darkMode: 'media',
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
}
export default withPWA({
  nextConfig
});
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;







