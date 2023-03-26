import { Router } from "express";
import { tokenValidate } from "../middlewares/tokenValidate.js";
import { repost } from "../controllers/repostController.js";

const router = Router();

router.post("/post/:postId/repost", tokenValidate, repost);

export default router;