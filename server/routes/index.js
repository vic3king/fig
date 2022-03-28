import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../../documentation/swagger.json';

// index Routes
import indexRoute from './index.routes';

// auth Routes
import authRoute from './auth.routes';

// event Routes
import eventsRoutes from './event.routes';

// user Routes
import userRoutes from './user.routes';

// express router
const router = express.Router();

// routes
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
router.use('/auth', authRoute);
router.use('/events', eventsRoutes);
router.use('/users', userRoutes);

router.use(indexRoute);

export default router;
