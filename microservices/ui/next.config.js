/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  env: {
    API_URL: process.env.API_URL,
  },
};
