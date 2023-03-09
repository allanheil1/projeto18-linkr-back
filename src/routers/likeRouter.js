import { Router } from "express";
import { dislike, getLikes, like } from "../controllers/likeController.js";
import { tokenValidate } from "../middlewares/tokenValidate.js";

const router=Router();

router.get("/likes/:id", getLikes);
router.post("/like/:id", tokenValidate, like);
router.post("/dislike/:id", tokenValidate, dislike);

export default router;