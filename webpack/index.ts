'use strict';

import webpackProductionConfig from './production';
import webpackDevConfig from './dev';
import * as dotenv from 'dotenv';

// load env config
dotenv.config();

// define constant development
const DEVELOPMENT: boolean = process.env.NODE_ENV === 'development';

// export webpack config
let webpackConfig: any = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: DEVELOPMENT ? webpackDevConfig.output : webpackProductionConfig.output,
  stats: { children: false },
  module: DEVELOPMENT ? webpackDevConfig.module : webpackProductionConfig.module,
  plugins: DEVELOPMENT ? webpackDevConfig.plugins : webpackProductionConfig.plugins
};

export default webpackConfig;
