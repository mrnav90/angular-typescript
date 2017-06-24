'use strict';

import * as gulp from 'gulp';
import * as webpackStream from 'webpack-stream';
import * as webpackConfig from '../../webpack';
import { APP_JS, BUILD_PATH } from '../const';

gulp.task('webpack', () => {
  return gulp.src(APP_JS).pipe(webpackStream(webpackConfig)).pipe(gulp.dest(BUILD_PATH));
});
