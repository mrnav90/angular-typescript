'use strict';

import * as gulp from 'gulp';
import { APP_HTML, BUILD_PATH } from '../const';

/**
 * @name Gulp task html
 * @description This task copy file index app html to build directory
 * @return gulp
 */
gulp.task('html', () => {
  return gulp.src(APP_HTML).pipe(gulp.dest(BUILD_PATH));
});
