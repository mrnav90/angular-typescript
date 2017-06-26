'use strict';

import SignInController from './signIn.controller';
import SignInRoute from './signIn.routes';

export default angular.module('Enigma.SignIn', [])
.config(SignInRoute.getInstance)
.controller('SignInController', SignInController).name;
