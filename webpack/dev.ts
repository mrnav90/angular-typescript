'use strict';

import * as webpack from 'webpack';
import * as extractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as dotenv from 'dotenv';

// load env config
dotenv.config();

// webpack dev config
let webpackConfig: any = {
  output: {
    path: path.join(__dirname, '../dist'),
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
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]'
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
    new extractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify(process.env.API_SERVER)
    })
  ]
};

export default webpackConfig;
