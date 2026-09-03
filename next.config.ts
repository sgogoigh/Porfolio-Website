import type {NextConfig} from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  // Next 16 builds with Turbopack, which infers the workspace root by walking
  // up for a lockfile. There is a stray package-lock.json in the parent folder
  // outside this repo, so pin the root here rather than let it guess.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
