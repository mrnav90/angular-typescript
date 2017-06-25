'use strict';

export default class BaseComponent {

  protected $filter: any;
  protected isSubmit: boolean;
  protected isLoadingPage: boolean;

  /**
   * @name constructor
   * @description init property for class
   */
  constructor() {
    this.isSubmit = false;
    this.isLoadingPage = false;
  }

  /**
   * @name translate
   * @description This function translate text by key
   * @param {string} key translate key
   * @return {string} translate text
   */
  protected translate(key: string): string {
    if (this.$filter) {
      return this.$filter('translate')(key);
    }
  }

}
