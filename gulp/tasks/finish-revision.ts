'use strict';

import * as gulp from 'gulp';
import htmlMin from 'gulp-htmlmin';
import gulpRevReplace from 'gulp-rev-replace';
import { BUILD_PATH, PUBLIC_HTML, PUBLIC_MANIFEST } from '../config';

gulp.task('finish-revision', () => {
  let manifest = gulp.src(PUBLIC_MANIFEST);
  return gulp.src(PUBLIC_HTML)
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulpRevReplace({ manifest: manifest }))
    .pipe(gulp.dest(BUILD_PATH));
});
