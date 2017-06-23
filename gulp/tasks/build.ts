'use strict';

import * as gulp from 'gulp';

gulp.task('build', () => {
  return gulp.start(['html', 'assets'], () => {
    return gulp.start(['webpack', 'templates'], () => {
      this.emit('end');
    });
  });
});
