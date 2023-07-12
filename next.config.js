/** @type {import('next').NextConfig} */
const nextConfig = {
 
    // reactStrictMode:false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
            port: '',
            pathname: '/img/**',
          },
          {
            protocol: 'https',
            hostname: 'drive.google.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
