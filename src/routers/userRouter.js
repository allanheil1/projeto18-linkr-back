import { Router } from 'express';
import {getUserById} from "../controllers/userController.js"
const userRouter = Router();

userRouter.post('/user/:id', getUserById);


export default userRouter