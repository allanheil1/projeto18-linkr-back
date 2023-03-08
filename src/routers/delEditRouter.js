import { Router } from "express";
import { del, edit } from "../controllers/delEditController.js";
import { newContentValidate } from "../middlewares/editMiddleware.js";
import { tokenValidate } from "../middlewares/tokenValidate.js";

const router=Router();

router.delete("/post/:id", tokenValidate, del);
router.post("/post/update/:id", tokenValidate, newContentValidate, edit);

export default router;