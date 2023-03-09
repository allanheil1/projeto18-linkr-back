import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import processRequestParams from '../middlewares/processRequestParams.js';
import { signUpSchema, signInSchema } from '../schemas/authSchema.js';
import { signUpValidation, signInValidation } from '../middlewares/authMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-up', processRequestParams(signUpSchema), signUpValidation, signUp);
authRouter.post('/',processRequestParams(signInSchema), signInValidation, signIn);

export default authRouter;