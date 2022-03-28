import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const eventRoute = express.Router();

const { eventsMiddleware } = middlewares;

const {
  eventsController: { create, events },
  userController: { recommendedEvents },
} = controllers;

eventRoute.post('/create', eventsMiddleware, create);

eventRoute.get('/recommended', middlewares.verifyToken, recommendedEvents);

eventRoute.get('', events);

export default eventRoute;
