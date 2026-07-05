/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/lairi-homepage",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
