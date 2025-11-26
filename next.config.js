/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for development
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add empty turbopack config to resolve the error
  turbopack: {},
  // Remove the webpack config since we're using Turbopack
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.(mp4|webm)$/,
  //     use: {
  //       loader: 'file-loader',
  //       options: {
  //         publicPath: '/_next/static/videos/',
  //         outputPath: 'static/videos/',
  //         name: '[name].[hash].[ext]',
  //       },
  //     },
  //   });
  //   return config;
  // },
}

module.exports = nextConfig