'use strict';

import * as gulp from 'gulp';
import gulpRev from 'gulp-rev-all';
import { BUILD_PATH, PUBLIC_JS, PUBLIC_STYLE, PUBLIC_TEMPLATE } from '../config';

gulp.task('start-revision', () => {
  let revFiles = gulp.src([ PUBLIC_TEMPLATE, PUBLIC_JS, PUBLIC_STYLE ]);
  return revFiles
    .pipe(gulpRev.revision())
    .pipe(gulp.dest(BUILD_PATH))
    .pipe(gulpRev.manifestFile())
    .pipe(gulp.dest(BUILD_PATH));
});
