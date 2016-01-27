'use strict';

import webpack from 'webpack';
import config from 'config';

const isDev = !!~process.argv.indexOf('-d');

const prefix = '/api';
const proxy = {
  [`${prefix}/*`]: {
    target: `http://${config.get('console')}`,
    secure: false,
    bypass: req => {
      req.url = req.url.substr(prefix.length, req.url.length);
      return false;
    }
  }
};

export default {
  entry: [
    './src/scripts/index.js',
    'file?name=index.html!./src/index.html'
  ],
  output: {
    path: './dist',
    filename: 'dashboard.js',
    sourceMapFilename: 'dashboard.js.map'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  devServer: {
    proxy,
    port: config.get('http.port')
  },
  plugins: isDev ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false },
      output: { comments: false }
    })
  ]
};
