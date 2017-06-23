'use strict';

import * as gulp from 'gulp';
import { APP_HTML, APP_TEMPLATES, APP_JS, APP_SCSS } from '../const';

gulp.task('dev', () => {
  return gulp.start(['html', 'assets'], () => {
    return gulp.start(['webpack', 'templates'], () => {
      gulp.watch(APP_HTML, ['html']);
      gulp.watch(APP_TEMPLATES, ['templates']);
      gulp.watch(APP_JS, ['webpack']);
      gulp.watch(APP_SCSS, ['webpack']);
    });
  });
});
