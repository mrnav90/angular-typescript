'use strict';

export default class SecurityService {

  public static $inject: ReadonlyArray<string> = ['$cookieStore', 'localStorageService'];

  /**
   * @name constructor
   * @description init property for class
   * @param  {ng.cookies.ICookiesService} $cookieStore CookieStore angular service
   */
  constructor(private $cookieStore: ng.cookies.ICookiesService, private localStorageService: ng.local.storage.ILocalStorageService) {}

  /**
   * @name setUserInfo
   * @description This function save userInfo to cookieStore
   * @param {any} userInfo userInfo response from API
   */
  public setUserInfo(userInfo: any): void {
    this.$cookieStore.put('userInfo', userInfo);
  }

  /**
   * @name getUserInfo
   * @description This function get userInfo from cookieStore
   * @return {Object} userInfo data
   */
  public getUserInfo(): Object {
    return this.$cookieStore.get('userInfo');
  }

  /**
   * @name setAccessToken
   * @description This function save accessToken to cookieStore
   * @param {string} token accessToken user login
   */
  public setAccessToken(token: string): void {
    this.$cookieStore.put('token', token);
  }

  /**
   * @name getAccessToken
   * @description This function get accessToken from cookieStore
   * @return {string} accessToken user login
   */
  public getAccessToken(): string {
    return this.$cookieStore.get('token');
  }

  /**
   * @name setCSRFToken
   * @description This function save CSRFToken to cookieStore
   * @param {string} token CSRFToken submit form
   */
  public setCSRFToken(token: string): void {
    this.$cookieStore.put('csrf_token', token);
  }

  /**
   * @name getCSRFToken
   * @description This function get CSRFToken from cookieStore
   * @return {string} CSRFToken submit form
   */
  public getCSRFToken(): string {
    return this.$cookieStore.get('csrf_token');
  }

  /**
   * @name isAuthenticated
   * @description This function check user is authenticated
   * @return {boolean} isAuthenticated
   */
  public isAuthenticated(): boolean {
    return angular.isDefined(this.$cookieStore.get('userInfo')) && this.$cookieStore.get('userInfo') !== null;
  }

  /**
   * @name revokeUser
   * @description This function remove userInfo and token from cookieStore
   */
  public revokeUser(): void {
    this.$cookieStore.remove('token');
    this.$cookieStore.remove('userInfo');
    this.$cookieStore.remove('csrf_token');
    this.localStorageService.remove('currentLanguage');
  }
}
