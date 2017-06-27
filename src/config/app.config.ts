'use strict';

const langEn: any = require('!json!../../i18n/en.json');
const langJa: any = require('!json!../../i18n/ja.json');

/**
 * @name AppConfig
 * @description This class to use config app services
 * @param  {ng.IHttpProvider}                $httpProvider
 * @param  {any}                             laddaProvider
 * @param  {ng.translate.ITranslateProvider} $translateProvider
 * @param  {ng.toastr.IToastrConfig}         toastrConfig
 * @return {AppConfig}
 */
class AppConfig {

  public static $inject: ReadonlyArray<string> = ['$httpProvider', 'laddaProvider', '$translateProvider', 'toastrConfig'];
  private static instance: AppConfig;

  /**
   * @name getInstance
   * @description This function to use get instance of class
   * @param  {ng.IHttpProvider}                $httpProvider
   * @param  {any}                             laddaProvider
   * @param  {ng.translate.ITranslateProvider} $translateProvider
   * @param  {ng.toastr.IToastrConfig}         toastrConfig
   * @return {AppConfig}
   */
  public static getInstance(
    $httpProvider: ng.IHttpProvider,
    laddaProvider: any,
    $translateProvider: ng.translate.ITranslateProvider,
    toastrConfig: ng.toastr.IToastrConfig
  ): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig($httpProvider, laddaProvider, $translateProvider, toastrConfig);
    }
    return AppConfig.instance;
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
    this.$translateProvider.translations('ja', langJa);
    this.$translateProvider.translations('en', langEn);
    this.$translateProvider.preferredLanguage('ja');
    this.$translateProvider.useSanitizeValueStrategy('escape');
    this.toastrConfig.preventOpenDuplicates = true;
  }
}

export default angular.module(`${APP_NAME}.config`, []).config(AppConfig.getInstance).name;
