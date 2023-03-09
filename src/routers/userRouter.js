import { Router } from 'express';
import {getUserById, searche} from "../controllers/userController.js"
import authUser from '../middlewares/authUserMiddleware.js';

const userRouter = Router();

userRouter.get('/user/:id',authUser, getUserById);
userRouter.get("/users", searche)

export default userRouter