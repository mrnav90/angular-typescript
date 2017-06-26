'use strict';

import * as __angular from 'angular';
import './styles/main.scss';
import '@uirouter/angularjs';
import 'angular-cookies';
import 'angular-translate';
import 'angular-local-storage';
import 'angular-toastr';
import 'angular-sanitize';
import 'angular-ladda';
import 'angular-ui-bootstrap';
import './config/app.router';
import './config/app.config';
import './config/app.run';
import './services';
import './modules';

declare global {
  const angular: typeof __angular;
  const API_URL: string;
  const APP_NAME: string;
}

angular.module(APP_NAME, [
  'ui.router',
  'ngCookies',
  'LocalStorageModule',
  'ui.bootstrap',
  'angular-ladda',
  'pascalprecht.translate',
  'toastr',
  `${APP_NAME}.router`,
  `${APP_NAME}.run`,
  `${APP_NAME}.config`,
  `${APP_NAME}.templates`,
  `${APP_NAME}.services`,
  `${APP_NAME}.modules`
]);
