'use strict';

export default class SignInRoute {

  private static instance: SignInRoute;
  public static getInstance($stateProvider: ng.ui.IStateProvider): SignInRoute {
    if (!SignInRoute.instance) {
      SignInRoute.instance = new SignInRoute($stateProvider);
    }
    return SignInRoute.instance;
  }

  constructor(private $stateProvider: ng.ui.IStateProvider) {
    $stateProvider
      .state('signIn', {
        url: '/signIn',
        templateUrl: 'modules/signIn/signIn.html',
        controller: 'SignInController',
        controllerAs: 'SignInCtrl'
      });
  }
}
