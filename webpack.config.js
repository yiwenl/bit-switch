/* eslint comma-dangle: 0 */
const webpack = require('webpack');
const path = require('path');

const prod = process.env.NODE_ENV === 'production';

function getEntrySources() {
  if (!prod) {
    return ['./dev/main.js']
  }
  return ['./src/bit-switch.js'];
}

module.exports = {
  entry: {
    app: getEntrySources()
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    errorDetails: true,
    hash: false,
    progress: true,
    reasons: false,
    timings: true,
    version: false
  },
  output: {
    path: path.resolve(__dirname, "dev"),
    publicPath: 'http://localhost:8080/',
    filename: prod ? './bit-switch.js' : 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        plugins: ['transform-runtime', 'add-module-exports'],
        presets: ['es2015', 'stage-1']
      }
    }]
  },
  plugins: prod ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    })
  ] : []
};