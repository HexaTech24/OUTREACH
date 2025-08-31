/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // 👇 Important for GitHub Pages
  output: "export",         // enables static export
  basePath: "/OUTREACH",    // repo name
  assetPrefix: "/OUTREACH/", 
}

export default nextConfig
