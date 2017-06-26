'use strict';

/**
 * @name BaseObject
 * @description This class to use extends for app model object
 * @param  {Object} object object data
 */
export default class BaseObject {

  private data: Object;

  /**
   * @name constructor
   * @description init property for class
   * @param  {Object} object init class object model
   */
  constructor(protected object: Object) {
    this.data = object;
  }

  /**
   * @name set
   * @description This method to use set value for object by key
   * @param {string} key   key object
   * @param {any}    value value object
   */
  protected set(key: string, value: any): void {
    this.data[key] = value;
  }

  /**
   * @name get
   * @description This method to use get data object by key
   * @param  {string} key key object
   * @return {any}        value object
   */
  protected get(key: string): any {
    if (this.data[key]) {
     return this.data[key];
   }
   return !this.data[key] ? false : null;
  }

  /**
   * @name setId
   * @description This method to use set object id
   * @param {string | number} object id
   */
  protected setId(id: string | number): void {
    this.set('id', id);
  }

  /**
   * @name getId
   * @description This method to use get object id
   * @return {string} object id
   */
  protected getId(): string | number {
    return this.get('id');
  }

  /**
   * @name setData
   * @description This method to use set data for class object model
   * @param {Object} data object data
   */
  protected setData(data: Object): void {
    this.data = data;
  }

  /**
   * @name getData
   * @description This method to use get object data
   * @return {Object} object data
   */
  protected getData(): Object {
    return this.data;
  }

  /**
   * @name call
   * @description This method to use call method of class object
   * @param  {string} method method name
   * @return {any}           function
   */
  protected call(method: string): any {
    let args: Array<{}> = Array.prototype.slice.call(arguments, 1);
    if (typeof this[method] !== 'function' || !this[method]) {
      return false;
    }
    return this[method].apply(this, args);
  }
}
