const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseConfig = {
  // ... base configuration options
};

const mp4Loader = {
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'videos/',
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(baseConfig, mp4Loader);
