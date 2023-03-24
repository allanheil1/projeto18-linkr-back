import { Router } from "express";
import { commentPost } from "../controllers/commentController.js";

const commentRouter = Router();

commentRouter.post("/comment", commentPost );

export default commentRouter ;