import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const userRoute = express.Router();

const {
  userController: { addInterests },
} = controllers;

userRoute.patch('/interests', middlewares.verifyToken, addInterests);

export default userRoute;
