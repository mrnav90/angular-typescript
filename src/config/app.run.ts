'use strict';

class Application {

  private static instance: Application;

  /**
   * @name getInstance
   * @description This function get instance of class
   * @param  {ng.local.storage.ILocalStorageService} localStorageService
   * @param  {ng.translate.ITranslateService}        $translate
   * @param  {ng.IRootScopeService}                  $rootScope
   * @param  {ng.IAnchorScrollService}               $anchorScroll
   * @param  {ng.ILocationService}                   $location
   * @return {Application}
   */
  public static getInstance(
    localStorageService: ng.local.storage.ILocalStorageService,
    $translate: ng.translate.ITranslateService,
    $rootScope: ng.IRootScopeService,
    $anchorScroll: ng.IAnchorScrollService,
    $location: ng.ILocationService
  ): Application {
      if (!Application.instance) {
        Application.instance = new Application(localStorageService, $translate, $rootScope, $anchorScroll, $location);
      }
      return Application.instance;
    }

    /**
     * @name constructor
     * @description init property for class
     * @param  {ng.local.storage.ILocalStorageService} localStorageService
     * @param  {ng.translate.ITranslateService}        $translate
     * @param  {ng.IRootScopeService}                  $rootScope
     * @param  {ng.IAnchorScrollService}               $anchorScroll
     * @param  {ng.ILocationService}                   $location
     */
    constructor(
      private localStorageService: ng.local.storage.ILocalStorageService,
      private $translate: ng.translate.ITranslateService,
      private $rootScope: ng.IRootScopeService,
      private $anchorScroll: ng.IAnchorScrollService,
      private $location: ng.ILocationService
    ) {
      let currentLanguage: any = localStorageService.get('currentLanguage') ? localStorageService.get('currentLanguage') : 'ja';
      this.$translate.use(currentLanguage);
      this.$rootScope.$on('$stateChangeStart', () => {
        this.$anchorScroll('scrollTop');
      });
    }
}

angular.module('Enigma').run(Application.getInstance);