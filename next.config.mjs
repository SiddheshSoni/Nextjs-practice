/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  },
  reactCompiler: true,
};

export default nextConfig;
