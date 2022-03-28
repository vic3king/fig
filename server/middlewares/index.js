import trimmerMiddleware from './trimmer.middlewares';
import loginMiddleware from './login';
import registerMiddleware from './register';
import eventsMiddleware from './events';
import verifyToken from './isLoggedIn';

export default {
  trimmerMiddleware,
  loginMiddleware,
  registerMiddleware,
  eventsMiddleware,
  verifyToken,
};
