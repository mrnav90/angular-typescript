'use strict';

/**
 * @name BaseComponent
 * @description This class to use extends for app components
 */
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
   * @description This method to use translate text by key
   * @param {string} key translate key
   * @return {string} translate text
   */
  protected translate(key: string): string {
    if (this.$filter) {
      return this.$filter('translate')(key);
    }
  }

}
