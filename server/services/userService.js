import User from '../db/models/user';

import BaseService from './baseService';

/**
 * @class UserService
 */
export default class UserService extends BaseService {
  /**
   * @constructor
   */
  constructor() {
    super(User);
  }
}

export const userService = new UserService();
