import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { UserValidation } from './auth.validation';
import { AuthController } from './auth.controller';

// import auth from '../../middleware/auth';
// import { user_role } from './user.constant';

const router = express.Router();

 
// router.post('/signup',validateRequest(UserValidation.UserSchemaValidation),auth(user_role.admin),UserController.createUser);
router.post('/signup',validateRequest(UserValidation.UserSchemaValidation),AuthController.createUser);
router.post("/signin", AuthController.login);
export const AuthRoutes = router;