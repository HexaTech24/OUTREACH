/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // replaces `next export`
  images: {
    unoptimized: true, // important for GitHub Pages (no image optimization server)
  },
  basePath: "/OUTREACH", // replace OUTREACH with your repo name
  assetPrefix: "/OUTREACH/",
};

export default nextConfig;
