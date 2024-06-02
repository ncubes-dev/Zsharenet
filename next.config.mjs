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
  },
  fallbacks: {
    // Failed page requests fallback to this.
    document: "/~offline",
    // data: "/fallback.json",
    // // This is for images.
    // image: "/fallback.webp",
    // // This is for audio files.
    // audio: "/fallback.mp3",
    // // This is for video files.
    // video: "/fallback.mp4",
    // // This is for fonts.
    // font: "/fallback-font.woff2",
  },

});

const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"]
  },

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







