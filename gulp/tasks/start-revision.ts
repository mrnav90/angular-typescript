'use strict';

import * as gulp from 'gulp';
import * as gulpRev from 'gulp-rev-all';
import { BUILD_PATH, PUBLIC_JS, PUBLIC_STYLE, PUBLIC_TEMPLATE } from '../const';

/**
 * @name Gulp task start revision
 * @description This task revision file and create manifest file to build directory ( production release )
 * @return gulp
 */
gulp.task('start-revision', () => {
  let revFiles: any = gulp.src([ PUBLIC_TEMPLATE, PUBLIC_JS, PUBLIC_STYLE ]);
  return revFiles
    .pipe(gulpRev.revision({}))
    .pipe(gulp.dest(BUILD_PATH))
    .pipe(gulpRev.manifestFile())
    .pipe(gulp.dest(BUILD_PATH));
});
