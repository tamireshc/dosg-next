/** @type {import('next').NextConfig} */
const nextConfig = {
  imagens: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dogsapi.origamid.dev'
      }
    ]
  }
};

export default nextConfig;
