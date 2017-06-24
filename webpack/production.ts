'use strict';

import * as webpack from 'webpack';
import * as extractTextPlugin from 'extract-text-webpack-plugin';
import * as compressionPlugin from 'compression-webpack-plugin';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify(process.env.API_SERVER)
    }),
    new extractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      test: /\.(js|ts)$/,
      compress: {
        dead_code: false,
        conditionals: false,
        unused: false
      },
      comments: false
    }),
    new compressionPlugin({
      asset: '[path]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
