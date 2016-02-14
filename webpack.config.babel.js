'use strict';

import webpack from 'webpack';
import config from 'config';
import path from 'path';

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
    'index.js',
    'file?name=index.html!index.html'
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
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  },
  resolveLoader: {
    alias: {
      'template': 'html'
    }
  },
  resolve: {
    root: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'src', 'scripts'),
      path.join(__dirname, 'src', 'html')
    ]
  },
  devServer: {
    proxy,
    port: config.get('http.port'),
    host: config.get('http.host')
  },
  plugins: isDev ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false },
      output: { comments: false }
    })
  ]
};
