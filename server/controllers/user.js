import { eventService } from '../services/eventService';
import { userService } from '../services/userService';

/**
 * @class UserController
 */
export default class UserController {
  /**
   * @method addInterest
   * @description adds a users interests
   * @param {*} req
   * @param {*} res
   * @returns {object} returns a user
   */
  static async addInterests(req, res) {
    const {
      body: { interests },
    } = req;

    await userService.update(
      { _id: req.user._id },
      { $addToSet: { interests } }
    );

    return res.status(200).json({
      status: true,
      message: 'User interest updated successfully',
    });
  }

  /**
   * @method recommendedEvents
   * @description returns a array of events
   * @param {*} req
   * @param {*} res
   * @returns {object} returns a array of events
   */
  static async recommendedEvents(req, res) {
    const user = await userService.find({ _id: req.user._id });

    const events = await eventService.findRecommendedEvents(user.interests);

    return res.status(200).json({
      status: true,
      message: 'Recommended events for users retrieved successfully',
      events,
    });
  }
}
