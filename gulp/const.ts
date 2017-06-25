'use strict';

import * as dotenv from 'dotenv';

// load env config
dotenv.config();

// define constant for gulp build
const DEVELOPMENT: boolean = process.env.NODE_ENV === 'development';
const APP_SRC: string = './src/';
const APP_PUBLIC: string = './public/';
const APP_DIST: string = './dist/';
const APP_JS: string = './src/**/*.ts';
const APP_TEMPLATES: string = './src/**/*.html';
const APP_SCSS: string = './src/**/*.scss';
const APP_ASSETS: string = './assets/**/*';
const APP_HTML: string = 'index.html';
const APP_INDEX: string = './src/index.ts';
const TEMPLATE_CACHE: string = 'app.templates.ts';
const BUILD_PATH: string = DEVELOPMENT ? APP_DIST : APP_PUBLIC;
const PUBLIC_HTML: string = BUILD_PATH + 'index.html';
const PUBLIC_JS: string = BUILD_PATH + 'main.js';
const PUBLIC_STYLE: string = BUILD_PATH + 'style.css';
const PUBLIC_MANIFEST: string = BUILD_PATH + 'rev-manifest.json';
const PUBLIC_TEMPLATE: string = BUILD_PATH + TEMPLATE_CACHE;

export {
  APP_SRC,
  APP_JS,
  APP_HTML,
  APP_TEMPLATES,
  APP_SCSS,
  APP_ASSETS,
  APP_INDEX,
  APP_PUBLIC,
  APP_DIST,
  DEVELOPMENT,
  TEMPLATE_CACHE,
  BUILD_PATH,
  PUBLIC_HTML,
  PUBLIC_JS,
  PUBLIC_STYLE,
  PUBLIC_MANIFEST,
  PUBLIC_TEMPLATE
};
