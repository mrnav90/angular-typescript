'use strict';

import * as gulp from 'gulp';
import * as htmlMin from 'gulp-htmlmin';
import * as gulpRevReplace from 'gulp-rev-replace';
import { BUILD_PATH, PUBLIC_HTML, PUBLIC_MANIFEST } from '../const';

gulp.task('finish-revision', () => {
  let manifest = gulp.src(PUBLIC_MANIFEST);
  return gulp.src(PUBLIC_HTML)
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulpRevReplace({ manifest: manifest }))
    .pipe(gulp.dest(BUILD_PATH));
});
