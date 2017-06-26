'use strict';

import * as webpack from 'webpack';
import * as extractTextPlugin from 'extract-text-webpack-plugin';
import * as compressionPlugin from 'compression-webpack-plugin';
import * as path from 'path';
import * as dotenv from 'dotenv';

// load env config
dotenv.config();

// webpack production config
let webpackConfig: any = {
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'main.js'
  },
  module: {
    loaders: [
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
        loader: extractTextPlugin.extract('style', 'css!')
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract('style', 'css!sass!')
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
      'API_URL': JSON.stringify(process.env.API_SERVER),
      'APP_NAME': JSON.stringify(process.env.APP_NAME)
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

export default webpackConfig;
