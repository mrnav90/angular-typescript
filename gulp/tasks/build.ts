'use strict';

import * as gulp from 'gulp';

gulp.task('build', ['html', 'assets', 'webpack', 'templates']);
