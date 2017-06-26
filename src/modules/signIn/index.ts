'use strict';

import SignInController from './signIn.controller';
import SignInRoute from './signIn.routes';

export default angular.module(`${APP_NAME}.SignIn`, [])
.config(SignInRoute.getInstance)
.controller('SignInController', SignInController).name;
