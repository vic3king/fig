import authHelper from '../helpers/auth';
import { authService } from '../services/authService';

/**
 * @class AuthController
 */
export default class AuthController {
  /**
   * @method register
   * @description registers a new user with their email, password
   * @param {*} req
   * @param {*} res
   * @returns {object} registered user
   */
  static async register(req, res) {
    const { body } = req;

    const user = await authService.create(body);

    const { _id, email } = user;

    const token = authHelper.encode({ _id, email });

    return res.status(200).json({
      status: true,
      message: 'Registration successful',
      token,
      user,
    });
  }

  /**
   * @method login
   * @description login a user with their email and password
   * @param {*} req
   * @param {*} res
   * @returns {object} logged in user
   */
  static async login(req, res) {
    const { password } = req.body;
    const {
      user,
      user: { _id, email, password: hashedPassword },
    } = req;

    const verifiedPassword = authHelper.comparePassword(
      hashedPassword,
      password
    );

    if (!verifiedPassword) {
      return res.status(401).send({
        status: false,
        error: 'Bad Login',
      });
    }

    const token = authHelper.encode({ _id, email });

    return res.status(200).json({
      status: true,
      message: 'Login successful',
      token,
      user,
    });
  }
}
