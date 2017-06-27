'use strict';

/**
 * @name BaseService
 * @description This class to use extends for app services request API
 * @param  {ng.IHttpService} $http angular http
 * @param  {ng.IQService}    $q    angular q service
 */
export default class BaseService {

  protected $http: ng.IHttpService;
  protected $q: ng.IQService;
  protected headers: Object;
  protected apiURL: string;

  /**
   * @name constructor
   * @description constructor init base class service
   * @param  {ng.IHttpService} $http inject $http service request
   * @param  {ng.IQService}    $q    inject $q service promise
   */
  constructor($http: ng.IHttpService, $q: ng.IQService) {
    this.$http = $http;
    this.$q = $q;
    this.apiURL = API_URL;
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  /**
   * @name post
   * @description This method to use request http post data
   * @param  {string}      url  request url
   * @param  {Object}      data data
   * @return {ng.IPromise}      http promise
   */
  protected post(url: string, data: Object): ng.IPromise<{}> {
    let deferred: ng.IDeferred<{}> = this.$q.defer();
    let requestUrl: string = API_URL + url;
    this.$http.post(requestUrl, data, { headers: this.headers }).then((response) => {
      deferred.resolve(response);
    }, (error) => {
      deferred.reject(error);
    });
    return deferred.promise;
  }

  /**
   * @name get
   * @description This method to use request http get data
   * @param  {string}      url    request url
   * @param  {Object}      params request params
   * @return {ng.IPromise}        http promise
   */
  protected get(url: string, params?: Object): ng.IPromise<{}> {
    let deferred: ng.IDeferred<{}> = this.$q.defer();
    let requestUrl: string = API_URL + url;
    let requestParams: Object = params ? { params: params, headers: this.headers } : { headers: this.headers };
      this.$http.post(requestUrl, requestParams).then((response) => {
      deferred.resolve(response);
    }, (error) => {
      deferred.reject(error);
    });
    return deferred.promise;
  }

  /**
   * @name put
   * @description This method to use request http put data
   * @param  {string}      url  request url
   * @param  {Object}      data data
   * @return {ng.IPromise}      http promise
   */
  protected put(url: string, data: Object): ng.IPromise<{}> {
    let deferred: ng.IDeferred<{}> = this.$q.defer();
    let requestUrl: string = API_URL + url;
    this.$http.put(requestUrl, data, { headers: this.headers }).then((response) => {
      deferred.resolve(response);
    }, (error) => {
      deferred.reject(error);
    });
    return deferred.promise;
  }

  /**
   * @name patch
   * @description This method to use request http patch data
   * @param  {string}      url  request url
   * @param  {Object}      data data
   * @return {ng.IPromise}      http promise
   */
  protected patch(url: string, data: Object): ng.IPromise<{}> {
    let deferred: ng.IDeferred<{}> = this.$q.defer();
    let requestUrl: string = API_URL + url;
    this.$http.patch(requestUrl, data, { headers: this.headers }).then((response) => {
      deferred.resolve(response);
    }, (error) => {
      deferred.reject(error);
    });
    return deferred.promise;
  }

  /**
   * @name delete
   * @description This method to use request http delete data
   * @param  {string}      url request url
   * @return {ng.IPromise}     http promise
   */
  protected delete(url: string): ng.IPromise<{}> {
    let deferred: ng.IDeferred<{}> = this.$q.defer();
    let requestUrl: string = API_URL + url;
    this.$http.delete(requestUrl, { headers: this.headers }).then((response) => {
      deferred.resolve(response);
    }, (error) => {
      deferred.reject(error);
    });
    return deferred.promise;
  }
}
