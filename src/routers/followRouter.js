import { Router } from "express";
import { checkFollow, followRequest, unfollowRequest } from "../controllers/followController.js";
import { tokenValidate } from "../middlewares/tokenValidate.js";

const followRouter = Router();

followRouter.post('/follows/:id', tokenValidate, followRequest)
followRouter.delete('/follows/:id', tokenValidate, unfollowRequest)
followRouter.get('/follows/:id', tokenValidate, checkFollow)

export default followRouter