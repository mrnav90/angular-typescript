'use strict';

class AppService {

  private static instance: AppService;

  /**
   * @name getInstance
   * @description This function get instance of class
   * @param  {ng.IHttpProvider}                $httpProvider
   * @param  {any}                             laddaProvider
   * @param  {ng.translate.ITranslateProvider} $translateProvider
   * @param  {ng.toastr.IToastrConfig}         toastrConfig
   * @return {AppService}
   */
  public static getInstance(
    $httpProvider: ng.IHttpProvider,
    laddaProvider: any,
    $translateProvider: ng.translate.ITranslateProvider,
    toastrConfig: ng.toastr.IToastrConfig
  ): AppService {
    if (!AppService.instance) {
      AppService.instance = new AppService($httpProvider, laddaProvider, $translateProvider, toastrConfig);
    }
    return AppService.instance;
  }

  /**
   * @name constructor
   * @description init property for class
   * @param  {ng.IHttpProvider}                $httpProvider
   * @param  {any}                             laddaProvider
   * @param  {ng.translate.ITranslateProvider} $translateProvider
   * @param  {ng.toastr.IToastrConfig}         toastrConfig
   */
  constructor(
    private $httpProvider: ng.IHttpProvider,
    private laddaProvider: any,
    private $translateProvider: ng.translate.ITranslateProvider,
    private toastrConfig: ng.toastr.IToastrConfig
  ) {
    this.$httpProvider.interceptors.push('HttpInterceptorService');
    this.$httpProvider.defaults.withCredentials = true;
    this.laddaProvider.setOption({
      style: 'zoom-out'
    });
    this.$translateProvider.preferredLanguage('ja');
    this.$translateProvider.useSanitizeValueStrategy('escape');
    this.toastrConfig.preventOpenDuplicates = true;
  }
}

angular.module('Enigma').config(AppService.getInstance);
