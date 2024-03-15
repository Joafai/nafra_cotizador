/** @type {import('next').NextConfig} */
const nextConfig = {}

//module.exports = nextConfig
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.infoauto.com.ar/:path*' // Proxy to Backend
      }
    ]
  }
}

