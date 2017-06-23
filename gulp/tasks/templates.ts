'use strict';

import * as gulp from 'gulp';
import templateCache from 'gulp-angular-templatecache';
import rename from 'gulp-rename';
import gzip from 'gulp-gzip';
import uglify from 'gulp-uglify';
import htmlMin from 'gulp-htmlmin';
import { APP_TEMPLATES, TEMPLATE_CACHE, APP_DIST, APP_PUBLIC, DEVELOPMENT } from '../const';

gulp.task('templates', () => {
  let templates = gulp.src(APP_TEMPLATES)
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(templateCache({ standalone: true }))
    .pipe(uglify())
    .pipe(rename(TEMPLATE_CACHE));
  return DEVELOPMENT ?
    templates.pipe(gulp.dest(APP_DIST)) :
    templates.pipe(gzip({ append: false })).pipe(gulp.dest(APP_PUBLIC));
});
