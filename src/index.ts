'use strict';

import * as angular from 'angular';
import '@uirouter/angularjs';
import 'angular-cookies';
import 'angular-translate';
import 'angular-local-storage';
import 'angular-toastr';
import 'angular-sanitize';
import 'angular-ladda';
import 'angular-ui-bootstrap';
import './services';
import './modules';

angular.module('Enigma', [
  'ui.router',
  'ngCookies',
  'LocalStorageModule',
  'ui.bootstrap',
  'angular-ladda',
  'pascalprecht.translate',
  'toastr',
  'templates',
  'Enigma.services',
  'Enigma.modules'
]);

import './config/app.route';
import './config/app.service';
import './config/app.run';
