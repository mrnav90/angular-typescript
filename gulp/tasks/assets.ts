'use strict';

import * as gulp from 'gulp';
import { APP_ASSETS, BUILD_PATH } from '../const';

gulp.task('assets', () => {
  return gulp.src(APP_ASSETS).pipe(gulp.dest(BUILD_PATH));
});
