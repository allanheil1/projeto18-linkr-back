import { Router } from "express";
import { dislike, getLikesAndOwnership, like } from "../controllers/likeController.js";
import { tokenValidate } from "../middlewares/tokenValidate.js";

const likeRouter = Router();

likeRouter.get("/likes/:postId", tokenValidate, getLikesAndOwnership);
likeRouter.post("/like/:postId", tokenValidate, like);
likeRouter.post("/dislike/:postId", tokenValidate, dislike);

export default likeRouter;