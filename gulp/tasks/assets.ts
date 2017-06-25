'use strict';

import * as gulp from 'gulp';
import { APP_ASSETS, BUILD_PATH } from '../const';

/**
 * @name Gulp task assets
 * @description This task copy images, icons from assets folder to build directory
 * @return gulp
 */
gulp.task('assets', () => {
  return gulp.src(APP_ASSETS).pipe(gulp.dest(BUILD_PATH));
});
