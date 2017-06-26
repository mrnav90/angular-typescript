'use strict';

/**
 * @name SignInRoute
 * @description This class use to config router
 * @param  {ng.ui.IStateProvider} $stateProvider
 * @return {SignInRoute}
 */
export default class SignInRoute {

  public static $inject: ReadonlyArray<string> = ['$stateProvider'];
  private static instance: SignInRoute;

  /**
   * @name getInstance
   * @description This method to use get instance of class
   * @param  {ng.ui.IStateProvider} $stateProvider
   * @return {SignInRoute}
   */
  public static getInstance($stateProvider: ng.ui.IStateProvider): SignInRoute {
    if (!SignInRoute.instance) {
      SignInRoute.instance = new SignInRoute($stateProvider);
    }
    return SignInRoute.instance;
  }

  /**
   * @name constructor
   * @description define routes
   * @param  {ng.ui.IStateProvider} $stateProvider
   */
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
