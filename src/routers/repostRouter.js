import { Router } from "express";
import { tokenValidate } from "../middlewares/tokenValidate.js";
import { repost, getRepost } from "../controllers/repostController.js";

const router = Router();

router.post("/post/:postId/repost", tokenValidate, repost);
router.get("/post/:postId/reposts", tokenValidate, getRepost);

export default router;