import { eventService } from '../services/eventService';

/**
 * @class EventController
 */
export default class EventController {
  /**
   * @method create
   * @description creates a new event
   * @param {*} req
   * @param {*} res
   * @returns {object} a new event
   */
  static async create(req, res) {
    const { body } = req;

    const event = await eventService.create(body);

    return res.status(200).json({
      status: true,
      message: 'Event created successfully',
      event,
    });
  }

  /**
   * @method events
   * @description returns an array of events
   * @param {*} req
   * @param {*} res
   * @returns {object} returns an array of events
   */
  static async events(req, res) {
    const events = await eventService.findAll({});

    return res.status(200).json({
      status: true,
      message: 'events retrieved successfully',
      events,
    });
  }
}
