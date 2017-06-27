'use strict';

import BaseService from '../base/base.service';

/**
 * @name AuthService
 * @description This class use to call API Authenticate
 * @param  {ng.IHttpService} $http
 * @param  {ng.IQService}    $q
 */
export default class AuthService extends BaseService {

  public static $inject: ReadonlyArray<string> = ['$http', '$q'];

  /**
   * @name constructor
   * @description Constructor init service injection
   * @param  {ng.IHttpService} $http
   * @param  {ng.IQService}    $q
   */
  constructor($http: ng.IHttpService, $q: ng.IQService) {
    super($http, $q);
  }

  /**
   * @name login
   * @description This function use to request api login
   * @param  {Object}      data
   * @return {ng.IPromise}
   */
  public login(data: Object): ng.IPromise<{}> {
    return this.post('authenticate', data);
  }

  /**
   * @name logout
   * @description This function use to request api logout
   * @return {ng.IPromise}
   */
  public logout(): ng.IPromise<{}> {
    return this.get('logout');
  }
}
