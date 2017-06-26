'use strict';

import SecurityService from './security.service';
import HttpInterceptorService from './http-interceptor.service';

export default angular.module('Enigma.services', [])
.service('HttpInterceptorService', HttpInterceptorService.getInstance)
.service('SecurityService', SecurityService).name;
