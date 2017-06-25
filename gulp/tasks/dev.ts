'use strict';

import * as gulp from 'gulp';
import { APP_HTML, APP_TEMPLATES, APP_JS, APP_SCSS } from '../const';

/**
 * @name Gulp task dev
 * @description This task runing, watch source and rebuild source to dist folder ( development )
 */
gulp.task('dev', ['html', 'assets', 'webpack', 'templates'], () => {
  gulp.watch(APP_HTML, ['html']);
  gulp.watch(APP_TEMPLATES, ['templates']);
  gulp.watch(APP_JS, ['webpack']);
  gulp.watch(APP_SCSS, ['webpack']);
});
