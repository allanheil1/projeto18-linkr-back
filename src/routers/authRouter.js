import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import { signUpValidation, signInValidation } from '../middlewares/authMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-up', signUpValidation, signUp);
authRouter.post('/', signInValidation, signIn);

export default authRouter