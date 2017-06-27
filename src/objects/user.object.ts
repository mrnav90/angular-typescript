'use strict';

import BaseObject from '../base/base.object';
import { IUserObject, IUserResponse } from '../interfaces';

/**
 * @name UserObject
 * @description This class to use get user response data
 * @param  {IUserResponse} object
 */
export class UserObject extends BaseObject implements IUserObject {

  /**
   * @name constructor
   * @description constructor init object
   * @param  {IUserResponse} object user object
   */
  constructor(object: IUserResponse) {
    super(object);
  }

  /**
   * @name getName
   * @description This method to use get name of user
   * @return {string} name of user
   */
  public getName(): string {
    return super.get('name');
  }
}
