import { Router } from "express";
import { tokenValidate } from "../middlewares/tokenValidate";
import { repost } from "../controllers/repostController";

const router = Router();

router.post("/post/:postId/repost", tokenValidate, repost);

export default router;