import express from 'express';
import { userController } from './user.controller';
import { userValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', userController.getAllFromDB);

router.post('/register', validateRequest(userValidation.registerUserSchema), userController.registerUser);

export const userRoutes = router;
