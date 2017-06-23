'use strict';

import Dotenv from 'dotenv';

Dotenv.load();

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const APP_SRC = '/src/';
const APP_PUBLIC = '/public/';
const APP_DIST = '/dist/';
const APP_JS = '/src/**/*.ts';
const APP_TEMPLATES = '/src/**/*.html';
const APP_SCSS = '/src/**/*.scss';
const APP_ASSETS = '/assets/**/*';
const APP_HTML = 'index.html';
const APP_INDEX = '/src/index.ts';
const TEMPLATE_CACHE = 'app.templates.ts';
const BUILD_PATH = DEVELOPMENT ? APP_DIST : APP_PUBLIC;
const PUBLIC_HTML = BUILD_PATH + 'index.html';
const PUBLIC_JS = BUILD_PATH + 'main.js';
const PUBLIC_STYLE = BUILD_PATH + 'style.css';
const PUBLIC_MANIFEST = BUILD_PATH + 'rev-manifest.json';
const PUBLIC_TEMPLATE = BUILD_PATH + TEMPLATE_CACHE;

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
