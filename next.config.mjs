/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lionelhortis.com" },
    ],
  },
}

export default nextConfig
