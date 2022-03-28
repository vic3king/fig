import Event from '../db/models/event';

import BaseService from './baseService';

/**
 * @class EventService
 */
export default class EventService extends BaseService {
  /**
   * @constructor
   */
  constructor() {
    super(Event);
  }

  /**
   * @method findRecommendedEvents
   * @description returns a array of a users recommended events based on their interests
   * @param {*} interests
   * @returns {Array} returns an array of events
   */
  async findRecommendedEvents(interests) {
    return this.find({
      tags: { $in: interests },
    });
  }
}

export const eventService = new EventService();
