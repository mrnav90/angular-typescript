'use strict';

import * as gulp from 'gulp';
import * as htmlMin from 'gulp-htmlmin';
import * as gulpRevReplace from 'gulp-rev-replace';
import { BUILD_PATH, PUBLIC_HTML, PUBLIC_MANIFEST } from '../const';

/**
 * @name Gulp task finish revision
 * @description This task replace revision file in index.html after build source ( production release )
 * @return gulp
 */
gulp.task('finish-revision', () => {
  let manifest: any = gulp.src(PUBLIC_MANIFEST);
  return gulp.src(PUBLIC_HTML)
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulpRevReplace({ manifest: manifest }))
    .pipe(gulp.dest(BUILD_PATH));
});
