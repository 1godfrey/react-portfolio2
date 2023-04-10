/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: {
    module: {
      rules: [
        {
          test: /\.mp4$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'videos/'
            }
          }
        }
      ]
    }
  }
};

module.exports = nextConfig;
