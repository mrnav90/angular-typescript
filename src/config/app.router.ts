'use strict';

/**
 * @name Router
 * @description This class to use route config app
 * @param  {ng.ui.IUrlRouterProvider} $urlRouterProvider
 * @param  {ng.ILocationProvider}     $locationProvider
 * @return {Router}
 */
class Router {

  public static $inject: ReadonlyArray<string> = ['$urlRouterProvider', '$locationProvider'];
  private static instance: Router;

  /**
   * @name getInstance
   * @description This function to use get instance of class
   * @param  {ng.ui.IUrlRouterProvider} $urlRouterProvider
   * @param  {ng.ILocationProvider}     $locationProvider
   * @return {Router}
   */
  public static getInstance($urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider): Router {
    if (!Router.instance) {
      Router.instance = new Router($urlRouterProvider, $locationProvider);
    }
    return Router.instance;
  }

  /**
   * @name constructor
   * @description init property for class
   * @param  {ng.ui.IUrlRouterProvider} private$urlRouterProvider
   * @param  {ng.ILocationProvider}     private$locationProvider
   */
  constructor(private $urlRouterProvider: ng.ui.IUrlRouterProvider, private $locationProvider: ng.ILocationProvider) {
    this.$locationProvider.html5Mode(true);
    this.$urlRouterProvider.otherwise(($injector: ng.auto.IInjectorService, $location: ng.ILocationService) => {
      let SecurityService: any = $injector.get('SecurityService');
      if (SecurityService.isAuthenticated()) {
        $location.path('/redirect-url/404');
      } else {
        $location.path('/signIn');
      }
    });
  }
}

export default angular.module(`${APP_NAME}.router`, []).config(Router.getInstance).name;
