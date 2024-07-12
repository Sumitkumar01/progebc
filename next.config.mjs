/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      "eazotel-client-images.s3.ap-south-1.amazonaws.com",
      "cdn.builder.io",
    ],
  },
};

export default nextConfig;
