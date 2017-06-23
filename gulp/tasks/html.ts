'use strict';

import * as gulp from 'gulp';
import { APP_HTML, BUILD_PATH } from '../const';

gulp.task('html', () => {
  return gulp.src(APP_HTML).pipe(gulp.dest(BUILD_PATH));
});
