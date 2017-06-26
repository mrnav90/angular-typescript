'use strict';

import SecurityService from './security.service';
import HttpInterceptorService from './http-interceptor.service';

export default angular.module(`${APP_NAME}.services`, [])
.service('HttpInterceptorService', HttpInterceptorService.getInstance)
.service('SecurityService', SecurityService).name;
