'use strict';

import * as gulp from 'gulp';

/**
 * @name Gulp task build
 * @description This task build source to public folder ( production release )
 */
gulp.task('build', ['html', 'assets', 'webpack', 'templates']);
