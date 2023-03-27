import { Router } from 'express';
import {getUserById, searche} from "../controllers/userController.js"
import authUser from '../middlewares/authUserMiddleware.js';
import { tokenValidate } from '../middlewares/tokenValidate.js';

const userRouter = Router();

userRouter.get('/user/:id',tokenValidate, authUser, getUserById);
userRouter.get("/users",tokenValidate, searche)

export default userRouter