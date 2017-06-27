'use strict';

/**
 * @name IUserObject
 * @description This interface to use define methods for UserObject
 */
export interface IUserObject {
  getId(): string | number;
  getName(): string;
}
