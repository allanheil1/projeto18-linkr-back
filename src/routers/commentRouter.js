import { Router } from "express";
import { commentPost, getComment } from "../controllers/commentController.js";
import { tokenValidate } from "../middlewares/tokenValidate.js";

const commentRouter = Router();

commentRouter.post("/comment",tokenValidate, commentPost );
commentRouter.get("/comment/:id",tokenValidate, getComment)

export default commentRouter ;