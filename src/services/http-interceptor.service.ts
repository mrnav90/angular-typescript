'use strict';

export default class HttpInterceptorService {

  public static $inject: ReadonlyArray<string> = ['$q', 'localStorageService', '$rootScope', 'SecurityService'];
  private static instance: HttpInterceptorService;

  /**
   * @name getInstance
   * @description This function get instance of class
   * @param  {ng.IQService}                          $q
   * @param  {ng.local.storage.ILocalStorageService} localStorageService
   * @param  {ng.IRootScopeService}                  $rootScope
   * @param  {any}                                   SecurityService
   * @return {Object}
   */
  public static getInstance(
   $q: ng.IQService,
   localStorageService: ng.local.storage.ILocalStorageService,
   $rootScope: ng.IRootScopeService,
   SecurityService: any): Object {
    if (!HttpInterceptorService.instance) {
      HttpInterceptorService.instance = new HttpInterceptorService($q, localStorageService, $rootScope, SecurityService);
    }
    return HttpInterceptorService.instance.get();
  }

  /**
   * @name constructor
   * @description init property for class
   * @param  {ng.IQService}                          $q
   * @param  {ng.local.storage.ILocalStorageService} localStorageService
   * @param  {ng.IRootScopeService}                  $rootScope
   * @param  {any}                                   SecurityService
   */
  constructor(
    private $q: ng.IQService,
    private localStorageService: ng.local.storage.ILocalStorageService,
    private $rootScope: ng.IRootScopeService,
    private SecurityService: any
  ) {}

  /**
   * @name request
   * @description This function handle http request
   * @param  {ng.IRequestConfig} config http request config
   * @return {ng.IRequestConfig}        http request config
   */
  private request(config: ng.IRequestConfig): ng.IRequestConfig|ng.IPromise<ng.IRequestConfig> {
    if (this.SecurityService.isAuthenticated() && config.url.indexOf(API_URL) === 0) {
      config.headers['Authorization'] = 'Bearer ' + this.SecurityService.getAccessToken();
      if (['POST', 'PUT', 'DELETE', 'PATCH'].indexOf(config.method) !== -1) {
        config.headers['X-CSRF-TOKEN'] = this.SecurityService.getCSRFToken();
      }
    }
    if (config.url.indexOf(API_URL) === 0) {
      let currentLanguage: any = this.localStorageService.get('currentLanguage') ? this.localStorageService.get('currentLanguage') : 'ja';
      config.headers['Language'] = currentLanguage;
    }
    return config || this.$q.when(config);
  }

  /**
   * @name requestError
   * @description This function handle http request error
   * @param  {any} rejection http rejection data
   * @return {any}           http rejection data
   */
  private requestError(rejection: any): any {
    return rejection;
  }

  /**
   * @name response
   * @description This function handle http response data
   * @param  {any} data http response data
   * @return {any}      http response data
   */
  private response<T>(data: ng.IHttpPromiseCallbackArg<T>): ng.IPromise<ng.IHttpPromiseCallbackArg<T>>|ng.IHttpPromiseCallbackArg<T> {
    return data;
  }

  /**
   * @name responseError
   * @description This function handle http response error
   * @param  {any} rejection http rejection data
   * @return {any}           http rejection data
   */
  private responseError(rejection: any): any {
    let statusCode: number = rejection.status;
    switch (statusCode) {
      case 401:
        this.$rootScope.$broadcast('Error401');
        break;
      case 403:
        this.$rootScope.$broadcast('Error403');
        break;
      case 404:
        this.$rootScope.$broadcast('Error404');
        break;
      case 500:
        this.$rootScope.$broadcast('Error500');
        break;
      default:
        break;
    }
    return statusCode === 200 || statusCode === 201 ? rejection : this.$q.reject(rejection);
  }

  /**
   * @name get
   * @description This function get class methods
   * @return {Object} class methods
   */
  private get(): Object {
    return {
      request: this.request.bind(this),
      requestError: this.requestError.bind(this),
      response: this.response.bind(this),
      responseError: this.responseError.bind(this)
    };
  }
}
