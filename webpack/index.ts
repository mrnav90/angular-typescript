'use strict';

import * as webpackConfig from './production';
import * as webpackDevConfig from './dev';
import * as dotenv from 'dotenv';

dotenv.config();

const DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.ts',
  output: DEVELOPMENT ? webpackDevConfig['output'] : webpackConfig['output'],
  stats: { children: false },
  module: DEVELOPMENT ? webpackDevConfig['module'] : webpackConfig['module'],
  plugins: DEVELOPMENT ? webpackDevConfig['plugins'] : webpackConfig['plugins']
};
