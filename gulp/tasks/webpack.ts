'use strict';

import * as gulp from 'gulp';
import * as webpackStream from 'webpack-stream';
import webpackConfig from '../../webpack';
import { APP_JS, BUILD_PATH } from '../const';

/**
 * @name Gulp task webpack
 * @description This task run webpack config
 * @return gulp
 */
gulp.task('webpack', () => {
  return gulp.src(APP_JS).pipe(webpackStream(webpackConfig)).pipe(gulp.dest(BUILD_PATH));
});
